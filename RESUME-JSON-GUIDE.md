# Chelsea's JSON-Driven Resume System

## Overview

This system separates **content** (JSON) from **design** (HTML), so you only edit a simple data file. The design stays perfectly intact, and everything populates automatically.

**How it works:**
1. All resume content lives in `resume-data.json` (easy to edit, text-only)
2. `resume-template.html` reads the JSON and builds the formatted resume
3. Design never changes — only update the data file

---

## Quick Start

### To Edit Your Resume:

1. **Open** `resume-data.json` in any text editor
2. **Find the section** you want to change (see structure below)
3. **Edit the text** between the quotes
4. **Save the file**
5. **Refresh** `resume-template.html` in your browser
6. **Done!** The resume updates instantly

---

## JSON Structure

The resume-data.json file has these main sections:

### 1. **personal** — Header & Contact Info
```json
"personal": {
  "firstName": "Chelsea",
  "lastName": "Rittenmyer",
  "title": "Your professional title here",
  "tagline": "Your tagline here",
  "location": "Seattle, WA",
  "website": "crittenmyer.com",
  "websiteUrl": "http://crittenmyer.com",
  "email": "cpatthoff@gmail.com",
  "emailUrl": "mailto:cpatthoff@gmail.com",
  "phone": "(304) 279-3159",
  "linkedin": "https://www.linkedin.com/in/chelsea-rittenmyer-says-hello/",
  "profileImage": "assets/images/chelsea-hero.jpg"
}
```

**What updates where:**
- `firstName` & `lastName` → Header name
- `title` → Large colored text in header
- `tagline` → Smaller text under title
- `location`, `website`, `email`, `linkedin`, `phone` → Header contacts & footer

---

### 2. **profile** — Professional Summary
```json
"profile": {
  "text": "Strategic and innovative content leader with <strong>16+ years</strong>..."
}
```

**Can include:** `<strong>bold</strong>`, `<em>italic</em>`, `<br>` for line breaks

---

### 3. **skills** — Skills & Tools (Two Categories)
```json
"skills": [
  {
    "category": "Core Skills",
    "items": [
      "Content Strategy Development",
      "Product Launch Strategy",
      ...
    ]
  },
  {
    "category": "Tools",
    "items": [
      "🎬 Adobe Premiere Pro",
      "🖼️ Adobe Photoshop",
      ...
    ]
  }
]
```

**To add/remove a skill:**
- Just add or delete a line in the `items` array
- Skills with emojis (in Tools) will show them

---

### 4. **education** — Education Cards
```json
"education": [
  {
    "institution": "University of Cincinnati",
    "degree": "BFA",
    "field": "Electronic Media",
    "additional": "Journalism Certificate, Media Communications",
    "year": "2005 – 2009"
  }
]
```

**To add another degree:** Duplicate the object and change values

---

### 5. **honors** — Awards & Honors
```json
"honors": [
  {
    "title": "🏆 David J. Clarke Memorial Scholarship",
    "organization": "NATAS"
  }
]
```

---

### 6. **experience** — Main Jobs (Full Details)
```json
"experience": [
  {
    "company": "Amazon",
    "companyLogo": "assets/images/amazon-logo.png",
    "logoType": "image",
    "position": "Creative Director — Amazon Devices & Digital",
    "startDate": "2019",
    "endDate": "Present",
    "dateRange": "2019 – Present",
    "bullets": [
      "Led creative direction for animated and live-action...",
      "Conceptualized educational onboarding for customers..."
    ]
  },
  {
    "company": "CreativeLive",
    "companyLogo": "creativelive",
    "logoType": "custom",
    "position": "Director of Content",
    "dateRange": "2018 – 2019",
    "bullets": [...]
  }
]
```

**Key fields:**
- `logoType`: "image" or "custom" (for CreativeLive's special logo)
- `dateRange`: "2018 – 2019" (shown on resume)
- `bullets`: List of accomplishments (can include `<strong>text</strong>`)

**To update a job:**
1. Find it by company name
2. Update `position` to change title
3. Update `dateRange` to change dates
4. Update bullet points in the `bullets` array
5. Add/remove bullets as needed

---

### 7. **earlierCareer** — Earlier Positions (Compact Format)
```json
"earlierCareer": [
  {
    "emoji": "📹",
    "position": "Managing Post-Production Supervisor",
    "company": "CreativeLive, Seattle WA",
    "dateRange": "2012 – 2015"
  },
  {
    "emoji": "🎬",
    "position": "Producer & Art Director",
    "company": "Geo Rittenmyer Visuals",
    "dateRange": "2010 – 2018"
  }
]
```

**Emojis:** Pick any emoji that represents the role

---

## Editing Examples

### Example 1: Update Your Email
```json
// FIND this:
"email": "cpatthoff@gmail.com",
"emailUrl": "mailto:cpatthoff@gmail.com",

// CHANGE to:
"email": "newemail@example.com",
"emailUrl": "mailto:newemail@example.com",
```

### Example 2: Add a New Skill
```json
// Find the "Core Skills" items array
"items": [
  "Content Strategy Development",
  "Product Launch Strategy",
  "YOUR NEW SKILL HERE"  ← Add this line
]
```

### Example 3: Update a Job Title & Dates
```json
// Find Amazon in "experience"
{
  "company": "Amazon",
  ...
  "position": "Creative Director — Amazon Devices & Digital",  ← Change this
  "dateRange": "2019 – 2024",  ← Update dates
  ...
}
```

### Example 4: Update a Bullet Point
```json
"bullets": [
  "Led creative direction for animated and live-action video campaigns...",  ← Edit this text
  "Conceptualized educational onboarding..."
]
```

---

## JSON Editing Tips

1. **Preserve quotes** — Always keep text in `"quotes"`
2. **Commas matter** — Each item needs a comma EXCEPT the last one
3. **HTML allowed** — Use `<strong>bold</strong>` in text fields
4. **Newlines in lists** — Just put each item on its own line
5. **Emojis OK** — Copy/paste emojis directly (like 📹, 🎬, etc.)

**Bad (missing comma):**
```json
"firstName": "Chelsea"
"lastName": "Rittenmyer"  ← Missing comma after Chelsea
```

**Good:**
```json
"firstName": "Chelsea",
"lastName": "Rittenmyer"  ← Correct
```

---

## Workflow

### Every time you edit:

1. **Open** `resume-data.json` in your text editor
2. **Make changes** to any section
3. **Save** (Cmd+S)
4. **Refresh** `resume-template.html` in browser (Cmd+R)
5. **Check** the changes look correct
6. **When satisfied**, copy updated content into the live resume files

---

## Converting to PDF

Once you've edited the JSON and reviewed in `resume-template.html`:

### Option 1: Browser Print-to-PDF (Easiest)
1. Open `resume-template.html` in browser
2. Cmd+P (or Ctrl+P)
3. Save as PDF
4. Name it `CrittenmyerResume2026.pdf`

### Option 2: Command Line (Puppeteer)
If you want to automate PDF generation, you can use:
```bash
npx puppeteer print-to-pdf resume-template.html CrittenmyerResume2026.pdf
```

---

## File Organization

```
Chelsea/
├── resume-data.json           ← EDIT THIS (content only)
├── resume-template.html       ← View in browser (reads JSON)
├── RESUME-JSON-GUIDE.md       ← This file
│
├── crittenmyer/               ← Website folder
│   ├── CrittenmyerResume2026.html
│   ├── CrittenmyerResume2026.pdf
│   ├── CrittenmyerResume2026-1page.html
│   ├── CrittenmyerResume2026-1page.pdf
│   └── ...
└── CrittenmyerResume2026.html  ← Work copies (sync with updates)
```

---

## Next Steps

1. **Test the system** — Open `resume-template.html` in browser, check everything looks right
2. **Make a test edit** — Change something in `resume-data.json`, refresh browser, confirm it updates
3. **When ready**, create PDF and copy to website folder
4. **Keep synced** — Whenever you update resume-data.json, update the crittenmyer/ versions too

---

## Hybrid Version (Future)

Once this JSON system is working well, we can build a simple web interface where you:
- Click "Edit" button
- Form fields populate with JSON data
- Update fields visually
- Click "Save" → updates JSON automatically

This keeps the best of both worlds: easy web editing + clean data file.

---

Questions? This system is designed to be simple and flexible. If you want to adjust the structure or add new sections, let me know!
