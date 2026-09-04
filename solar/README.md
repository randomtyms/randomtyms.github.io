# 🪐 3D Solar System — RandomTyms

A free 3D solar system kids can fly through. Tap a planet, pause time, speed it up. Built for the [RandomTyms](https://randomtyms.github.io/) hub by [Ganga Ponnu](https://lokeshvarsha.blogspot.com/) — no ads, no login.

🔗 **Open the app:** https://randomtyms.github.io/solar/

Pairs with the **Space Secrets** series on the [Lokesh & Varsha blog](https://lokeshvarsha.blogspot.com/p/space-secrets-series-lokesh-varsha.html).

---

## Who it's for

Class 3–8 science. Works on a phone, tablet, or classroom projector.

**Kids:** Tap Earth, Saturn, the Moon. Read the short fact. Drag to look around.

**Teachers:** Open on the smartboard → Pause → Ask “which planet is this?” → Play again at Slow / Medium / Fast.

**Parents:** Open the link. That’s it.

---

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The page (rename `solar-system.html` to this) |
| `solar-system.js` | The 3D scene — planets, orbits, camera |
| `README.md` | This file |

Keep these files **together**. Three.js loads from a CDN, so you do not need a third library file.

---

## How to use

- **Drag** — look around
- **Tap a planet** (or a name chip) — fly to it
- **Pause / Play** — freeze the sky
- **Slow / Medium / Fast** — change orbit speed
- **See all** — back out to the whole system

Sun, Mercury, Venus, Earth, Moon, Mars, Jupiter, Saturn (with rings), Uranus, Neptune.

Distances and sizes are compressed so everything fits on one screen.

---

## Add it to the hub Apps tab

In the root `index.html`, first card in the Apps panel:

```html
<a class="series-card searchable" href="solar/">
  <div class="s-title">🪐 3D Solar System</div>
  <div class="s-meta">Fly to the
