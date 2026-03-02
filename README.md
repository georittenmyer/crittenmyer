# Chelsea Rittenmyer — Portfolio Site

## Folder Structure

```
chelsea-site/
├── index.html              ← Main page
├── README.md               ← This file
└── assets/
    ├── css/
    │   └── style.css       ← All styles
    ├── js/
    │   └── main.js         ← Cursor, nav, scroll animations
    └── images/             ← Drop any images here (e.g. headshot, og-image)
```

---

## Adding Videos

Open `index.html` and find the `<!-- PORTFOLIO -->` section.
For each `<iframe>`, replace `VIDEO_ID_HERE` with the actual YouTube video ID.

YouTube URL example:
`https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

Vimeo embed example:
`https://player.vimeo.com/video/123456789`

---

## Deploying to Cloudflare Pages

1. Push this folder to a **GitHub** or **GitLab** repository
2. Log in to [dash.cloudflare.com](https://dash.cloudflare.com)
3. Go to **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**
4. Select your repository
5. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (or the folder name if you pushed a subfolder)
6. Click **Save and Deploy**
7. Cloudflare will give you a `.pages.dev` URL instantly

### Connecting crittenmyer.com
1. In Cloudflare Pages → your project → **Custom Domains**
2. Click **Set up a custom domain** → enter `crittenmyer.com`
3. If the domain is already on Cloudflare DNS, it connects automatically
4. If not, update your domain registrar's nameservers to Cloudflare's

---

## Updating the Site

After deployment, any `git push` to your main branch will trigger an automatic redeploy — usually live in under 60 seconds.
