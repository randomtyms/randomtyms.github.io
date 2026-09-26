# RandomTyms AI Quiz Generator — GitHub Pages Deployment

This directory contains the complete, ultra-fast, zero-dependency static web application ready to drop into GitHub.

## 📁 Repository Structure to Commit to GitHub

```
your-repo-name/
├── index.html
├── README.md
└── assets/
    ├── banner.webp
    ├── correct.webp
    ├── wrong.webp
    ├── guide.webp
    └── prompt.webp
```

## 🚀 How to Deploy on GitHub Pages in 2 Minutes

1. Go to [GitHub.com](https://github.com) and click **New Repository**.
2. Name it `quiz` or `randomtyms-quiz` (set visibility to **Public**).
3. Drag and drop `index.html` and the `assets/` folder into your repository and click **Commit changes**.
4. Go to repository **Settings** → **Pages** (in the left sidebar).
5. Under **Build and deployment** > **Branch**, select `main` and `/ (root)` folder, then click **Save**.
6. Within 30 seconds, GitHub Pages will deploy your site at:
   `https://<your-github-username>.github.io/<repo-name>/`

## 🔗 How to Connect to Your Existing PWA

1. **Direct Link**:
   ```html
   <a href="https://<your-username>.github.io/<repo-name>/" target="_blank">
     🧪 Launch AI Quiz
   </a>
   ```

2. **Pre-Loaded Quiz Link via Query Parameter**:
   ```html
   <a href="https://<your-username>.github.io/<repo-name>/?quizfile=https://your-domain.com/quizzes/math.csv">
     📐 Take Math Quiz
   </a>
   ```

3. **In-App Embed via Iframe**:
   ```html
   <iframe 
     src="https://<your-username>.github.io/<repo-name>/" 
     style="width: 100%; height: 95vh; border: none; border-radius: 16px;" 
     allow="clipboard-write"
   ></iframe>
   ```
