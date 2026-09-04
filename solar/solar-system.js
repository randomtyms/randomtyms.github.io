import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const BODIES = [
  { id: "sun", name: "Sun", orbit: 0, radius: 2.6, period: 1, spin: 25, tilt: 0, e: 0, phase: 0, color: "#ffd18a", parent: null,
    blurb: "The Sun is a star — a giant ball of hot, glowing gas. It keeps every planet moving around it." },
  { id: "mercury", name: "Mercury", orbit: 7.2, radius: 0.32, period: 88, spin: 59, tilt: 0, e: 0.2, phase: 0.7, color: "#b0a89e", parent: null,
    blurb: "Mercury is the closest planet to the Sun. Days are very hot and nights are very cold." },
  { id: "venus", name: "Venus", orbit: 10.2, radius: 0.52, period: 225, spin: -243, tilt: 3.1, e: 0, phase: 2.1, color: "#e4c89a", parent: null,
    blurb: "Venus is the hottest planet. Thick clouds wrap it like a blanket and trap the heat." },
  { id: "earth", name: "Earth", orbit: 13.6, radius: 0.54, period: 365, spin: 1, tilt: 0.41, e: 0, phase: 0.4, color: "#6ea0d0", parent: null,
    blurb: "Earth is our home. It has air, water, plants, animals, and people. It takes one year to go around the Sun." },
  { id: "moon", name: "Moon", orbit: 1.25, radius: 0.16, period: 27, spin: 27, tilt: 0, e: 0, phase: 1.1, color: "#cfc9be", parent: "earth",
    blurb: "The Moon goes around Earth. It lights up the night and pulls on our oceans to make tides." },
  { id: "mars", name: "Mars", orbit: 17.6, radius: 0.4, period: 687, spin: 1, tilt: 0.44, e: 0.09, phase: 3.5, color: "#c47a58", parent: null,
    blurb: "Mars is called the red planet because its dirt looks rusty. It has the biggest volcano we know." },
  { id: "jupiter", name: "Jupiter", orbit: 26, radius: 1.45, period: 4333, spin: 0.41, tilt: 0.05, e: 0, phase: 5.1, color: "#d4b48a", parent: null,
    blurb: "Jupiter is the biggest planet. A giant storm called the Great Red Spot has lasted for hundreds of years." },
  { id: "saturn", name: "Saturn", orbit: 34, radius: 1.22, period: 10759, spin: 0.44, tilt: 0.47, e: 0, phase: 1.4, color: "#e6d3a3", parent: null, rings: [1.6, 2.4],
    blurb: "Saturn wears bright rings made of ice and rock. They look solid from far away, but they are many little pieces." },
  { id: "uranus", name: "Uranus", orbit: 42.5, radius: 0.82, period: 30687, spin: -0.72, tilt: 1.71, e: 0, phase: 4.0, color: "#9ad2d6", parent: null,
    blurb: "Uranus is an icy planet that spins on its side, like a ball rolling around the Sun." },
  { id: "neptune", name: "Neptune", orbit: 51, radius: 0.78, period: 60190, spin: 0.67, tilt: 0.49, e: 0, phase: 2.7, color: "#4b7fd0", parent: null,
    blurb: "Neptune is the farthest planet. It is deep blue and has the fastest winds in the solar system." },
];

const byId = Object.fromEntries(BODIES.map((b) => [b.id, b]));

function boot() {
  const canvas = document.getElementById("view");
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x07070b, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x07070b, 90, 210);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.08, 400);
  camera.position.set(0, 22, 48);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 4;
  controls.maxDistance = 130;
  controls.maxPolarAngle = Math.PI * 0.92;
  controls.target.set(0, 0, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 0.05));
  scene.add(new THREE.HemisphereLight(0x1a2230, 0x08060a, 0.28));

  const starGeo = new THREE.BufferGeometry();
  const starN = 2800;
  const starPos = new Float32Array(starN * 3);
  for (let i = 0; i < starN; i++) {
    const r = 120 + Math.random() * 80;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    starPos[i * 3 + 2] = r * Math.cos(phi);
  }
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({ color: 0xe8e6e0, size: 0.45, sizeAttenuation: true, depthWrite: false }),
  );
  stars.raycast = () => {};
  scene.add(stars);

  const glow = document.createElement("canvas");
  glow.width = glow.height = 256;
  const gctx = glow.getContext("2d");
  const grd = gctx.createRadialGradient(128, 128, 6, 128, 128, 128);
  grd.addColorStop(0, "rgba(255,236,196,0.95)");
  grd.addColorStop(0.2, "rgba(255,180,80,0.4)");
  grd.addColorStop(1, "rgba(255,120,20,0)");
  gctx.fillStyle = grd;
  gctx.fillRect(0, 0, 256, 256);
  const glowTex = new THREE.CanvasTexture(glow);

  const nodes = {};
  const sphere = new THREE.SphereGeometry(1, 48, 32);
  const orbitMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.16 });

  function addOrbit(body) {
    if (!body.orbit || body.parent) return;
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const theta = (i / 128) * Math.PI * 2 + body.phase;
      const e = body.e;
      const r = (body.orbit * (1 - e * e)) / (1 + e * Math.cos(theta));
      pts.push(new THREE.Vector3(r * Math.cos(theta), 0, r * Math.sin(theta)));
    }
    const line = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), orbitMat);
    line.raycast = () => {};
    scene.add(line);
  }

  for (const body of BODIES) {
    addOrbit(body);
    const group = new THREE.Group();
    const spin = new THREE.Group();
    spin.rotation.z = body.tilt;
    const mat = body.id === "sun"
      ? new THREE.MeshBasicMaterial({ color: body.color, toneMapped: false })
      : new THREE.MeshStandardMaterial({ color: body.color, roughness: 0.72, metalness: 0.04 });
    const mesh = new THREE.Mesh(sphere, mat);
    mesh.scale.setScalar(body.radius);
    mesh.userData.id = body.id;
    spin.add(mesh);
    if (body.rings) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(body.rings[0], body.rings[1], 96),
        new THREE.MeshBasicMaterial({ color: body.color, side: THREE.DoubleSide, transparent: true, opacity: 0.7, depthWrite: false }),
      );
      ring.rotation.x = -Math.PI / 2;
      ring.userData.id = body.id;
      spin.add(ring);
    }
    group.add(spin);
    if (body.id === "sun") {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, toneMapped: false,
      }));
      sprite.scale.set(11, 11, 1);
      sprite.raycast = () => {};
      group.add(sprite);
      group.add(new THREE.PointLight(0xffd7a0, 55, 160, 1.35));
    }
    nodes[body.id] = { group, spin, mesh, body };
  }

  for (const body of BODIES) {
    const node = nodes[body.id];
    if (body.parent) nodes[body.parent].group.add(node.group);
    else scene.add(node.group);
  }

  const tmp = new THREE.Vector3();
  const deltaMove = new THREE.Vector3();

  function place(id, days) {
    const body = byId[id];
    const node = nodes[id];
    if (body.orbit === 0) {
      node.group.position.set(0, 0, 0);
      return;
    }
    const theta = (days / body.period) * Math.PI * 2 + body.phase;
    const e = body.e;
    const r = (body.orbit * (1 - e * e)) / (1 + e * Math.cos(theta));
    node.group.position.set(r * Math.cos(theta), 0, r * Math.sin(theta));
  }

  let days = 0;
  let speed = 3;
  let playing = true;
  let focused = null;
  const lastTarget = new THREE.Vector3();
  const fromPos = new THREE.Vector3();
  const fromTarget = new THREE.Vector3();
  const toPos = new THREE.Vector3();
  const toTarget = new THREE.Vector3();
  const dir = new THREE.Vector3();
  let anim = null;

  const factName = document.getElementById("fact-name");
  const factBlurb = document.getElementById("fact-blurb");
  const chips = document.getElementById("chips");
  const toggle = document.getElementById("toggle");

  function setFact(id) {
    const b = byId[id];
    factName.textContent = b.name;
    factBlurb.textContent = b.blurb;
    for (const btn of chips.querySelectorAll(".chip")) {
      btn.setAttribute("aria-pressed", btn.dataset.id === id ? "true" : "false");
    }
  }

  function focusDistance(body) {
    if (body.id === "sun") return 12;
    if (body.rings) return Math.max(body.radius * 11, 6);
    if (body.id === "jupiter") return Math.max(body.radius * 9, 5);
    if (body.parent) return 2.2;
    return Math.max(body.radius * 7, 2.6);
  }

  function worldPos(id, out) {
    nodes[id].mesh.getWorldPosition(out);
    return out;
  }

  function goTo(id, follow) {
    setFact(id);
    focused = follow ? (id === "sun" ? null : id) : null;
    const body = byId[id];
    worldPos(id, toTarget);
    dir.copy(camera.position).sub(controls.target);
    if (dir.lengthSq() < 0.0001) dir.set(0.45, 0.4, 0.8);
    dir.normalize();
    if (!focused && id === "sun") {
      toTarget.set(0, 0, 0);
      toPos.set(0, 22, 48);
    } else {
      toPos.copy(toTarget).addScaledVector(dir, focusDistance(body));
    }
    fromPos.copy(camera.position);
    fromTarget.copy(controls.target);
    anim = { t: 0, dur: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0.05 : 1.1 };
    controls.enabled = false;
  }

  for (const body of BODIES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.dataset.id = body.id;
    btn.setAttribute("aria-pressed", body.id === "sun" ? "true" : "false");
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.background = body.color;
    btn.appendChild(dot);
    btn.appendChild(document.createTextNode(body.name));
    btn.addEventListener("click", () => goTo(body.id, true));
    chips.appendChild(btn);
  }

  toggle.addEventListener("click", () => {
    playing = !playing;
    toggle.textContent = playing ? "Pause" : "Play";
    toggle.setAttribute("aria-pressed", playing ? "false" : "true");
  });
  document.getElementById("home").addEventListener("click", () => goTo("sun", false));
  for (const btn of document.querySelectorAll(".spd")) {
    btn.addEventListener("click", () => {
      speed = Number(btn.dataset.speed);
      for (const b of document.querySelectorAll(".spd")) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      }
    });
  }

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const drag = { x: 0, y: 0, down: false };
  renderer.domElement.addEventListener("pointerdown", (e) => {
    drag.x = e.clientX;
    drag.y = e.clientY;
    drag.down = true;
  });
  renderer.domElement.addEventListener("pointerup", (e) => {
    if (!drag.down) return;
    drag.down = false;
    if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 6) return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(scene.children, true);
    for (const hit of hits) {
      const id = hit.object.userData.id;
      if (id) {
        goTo(id, true);
        break;
      }
    }
  });

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / Math.max(h, 1);
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }
  window.addEventListener("resize", resize);
  resize();

  let last = performance.now();
  function tick(now) {
    const delta = Math.min((now - last) / 1000, 0.1);
    last = now;
    if (playing) days += speed * 8 * delta;
    for (const body of BODIES) {
      place(body.id, days);
      if (playing) {
        const rate = (Math.PI * 2) / Math.max(Math.abs(body.spin), 0.3);
        nodes[body.id].spin.rotation.y += delta * speed * 8 * rate * Math.sign(body.spin || 1);
      }
    }
    if (anim) {
      anim.t += delta;
      const u = Math.min(anim.t / anim.dur, 1);
      const e = 1 - Math.pow(1 - u, 3);
      if (focused) {
        worldPos(focused, toTarget);
        dir.copy(fromPos).sub(fromTarget);
        if (dir.lengthSq() < 0.0001) dir.set(0.45, 0.4, 0.8);
        dir.normalize();
        toPos.copy(toTarget).addScaledVector(dir, focusDistance(byId[focused]));
      }
      camera.position.lerpVectors(fromPos, toPos, e);
      controls.target.lerpVectors(fromTarget, toTarget, e);
      if (u >= 1) {
        anim = null;
        controls.enabled = true;
        lastTarget.copy(controls.target);
      }
    } else if (focused) {
      worldPos(focused, tmp);
      deltaMove.copy(tmp).sub(lastTarget);
      camera.position.add(deltaMove);
      controls.target.copy(tmp);
      lastTarget.copy(tmp);
      controls.minDistance = Math.max(byId[focused].radius * 2.2, 1.2);
    } else {
      controls.minDistance = 4;
    }
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  lastTarget.copy(controls.target);
  requestAnimationFrame(tick);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
