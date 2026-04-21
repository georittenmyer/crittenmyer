# Resume Customizer Tool — /mustard

Private tool for customizing your resume for specific job applications.

**URL:** `crittenmyer.com/mustard`  
**Password:** Protected with password auth  
**What it does:** Load your base resume, customize it for a specific opportunity, and save variants to GitHub

---

## How It Works

1. **Load base resume** — Fetches your `resume-data.json` from GitHub
2. **Edit for the role** — Reorder bullets, tweak title/tagline, update profile, adjust skills
3. **Live preview** — See changes instantly in the preview panel
4. **Save as variant** — Saves as `resume-apple.json`, `resume-google.json`, etc.
5. **Print to PDF** — Use browser print to create PDF for the application

---

## First Time Setup

### 1. Set the Password

Open `mustard/index.html` in a text editor and find:
```javascript
const PASSWORD = 'mustard';
```

Change `'mustard'` to a strong password. Example:
```javascript
const PASSWORD = 'your-super-secure-password-here';
```

**Recommendation:** Use a password like `Chelsea+2024Resume!` (something only you know)

### 2. Create GitHub Personal Access Token

The tool commits variants to GitHub automatically. You'll need a token:

1. Go to **github.com/settings/tokens**
2. Click **Generate new token** → **Generate new token (classic)**
3. Give it a name like "Resume Customizer"
4. **Select scope:** Check only `repo` (don't check anything else)
5. Click **Generate token**
6. **Copy the token** (you'll only see it once!)

When you first use the customizer:
- Password unlock
- You'll see a GitHub setup box
- Paste your token there
- It saves to browser's localStorage (stays on your device)

---

## Usage

### Basic Workflow

1. **Visit** `crittenmyer.com/mustard`
2. **Enter password** → Unlocks the editor
3. **Make edits:**
   - Change title/tagline to match the role
   - Reorder experience bullets to emphasize relevant work
   - Adjust skills section
   - Update profile summary if needed
4. **Watch the preview** — Right panel updates in real-time
5. **Save variant** — Click "💾 Save Variant"
   - Enter company name (e.g., "apple", "google", "startup-xyz")
   - Saves as `resume-apple.json`, etc.
   - Commits to GitHub automatically
6. **Print to PDF** — Click "🖨️ Print PDF" → Save as PDF on your computer

### Example Customizations

**For Product Manager Role at Google:**
- Title: "Product Manager · Strategic Vision & Execution"
- Reorder bullets to emphasize product strategy
- Highlight relevant metrics
- Save as `resume-google`

**For Creative Role at Startup:**
- Title: "Creative Director · Brand & Content Strategy"
- Lead with most creative/visual projects
- Emphasize innovation
- Save as `resume-startup-xyz`

---

## File Structure

```
crittenmyer/
└── mustard/
    ├── index.html          ← The customizer tool
    └── README.md           ← This file
```

---

## Features

✅ **Password protected** — Only you can access it  
✅ **Live preview** — See changes as you type  
✅ **Auto-save variants** — One click to commit to GitHub  
✅ **No backend needed** — Works entirely in browser + GitHub API  
✅ **Print to PDF** — Use browser's native print function  
✅ **Works offline** — Edit while disconnected, sync when online  

---

## Tips

### Keyboard Shortcut
- **Cmd+S** (Mac) or **Ctrl+S** (Windows/Linux) → Quick save dialog

### Managing Variants
- Each variant saves as `resume-{company}.json`
- They all live in the repo root alongside your base `resume-data.json`
- You can view/compare them in GitHub anytime
- Keep the base `resume-data.json` clean as your "master version"

### Best Practices
1. **Always start fresh** — Load the tool and it pulls the latest base resume
2. **One variant per job** — Don't overwrite; save new variant each time
3. **Test before submitting** — Print the PDF and review it carefully
4. **Keep base clean** — Don't save customizations as your main resume

---

## Troubleshooting

### "Wrong password"
- You changed the password in the code, so use the new one you set

### "Failed to load resume"
- Check internet connection
- GitHub might be down
- Verify `resume-data.json` exists in the repo

### GitHub token not saving
- Check browser's localStorage is enabled
- Try a different browser if issues persist

### PDF print looks weird
- Try Print → "Background graphics" ON
- Use Chrome/Edge for best print results
- Safari also works well

---

## Changing the Password Later

1. Open `mustard/index.html` in a text editor
2. Find: `const PASSWORD = 'your-current-password';`
3. Change to: `const PASSWORD = 'your-new-password';`
4. Save and commit to GitHub
5. Next time you visit, use the new password

---

## Security Notes

- **GitHub token** is stored in browser's localStorage (on this device only)
- **Password** is hardcoded in the HTML (basic protection, not encryption)
- **Token permissions** — Only has `repo` access (can only push to this repo)
- **No server logs** — Everything happens in your browser and GitHub's API

---

## Future Improvements

Possible enhancements:
- [ ] Save/load variants locally without GitHub push
- [ ] Side-by-side variant comparison
- [ ] Resume template switching (one-page vs full)
- [ ] Built-in formatting help
- [ ] Export as DOCX in addition to PDF

---

## Questions?

This is your private resume customizer. Use it to tailor your application to each opportunity!
