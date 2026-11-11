# Fubo Content Calendar

A lightweight static website listing upcoming sports & entertainment premieres across
networks carried on Fubo. No build step, no dependencies — plain HTML/CSS/JS.

## Files

| File | What it's for |
|------|---------------|
| `index.html` | The page shell (markup only). |
| `styles.css` | All styling. Light/dark themes via `prefers-color-scheme`. |
| `app.js` | Rendering, filtering (category / network / search), month grouping. |
| `data.js` | **The event list. This is the file you edit.** |

## Editing the calendar

Open `data.js` and edit the `window.FUBO_EVENTS` array. Each event looks like:

```js
{
  cat:  "sport",                 // "sport" or "ent"  (required)
  d:    20270125,                // sort key YYYYMMDD, use the START date (required)
  date: "Jan 25",                // text shown in the date column (required)
  yr:   "2027",                  // small year line
  title:"CFP National Championship",
  nets: ["ESPN","ABC"],          // networks -> shown as pills & drive the network filter
  note: "Allegiant Stadium, Las Vegas.",
  new:  true,                    // optional: adds a "New" badge
  tbc:  true,                    // optional: marks the date approximate (shows "≈")
  fix:  "Jan 25, not ~Jan 18."   // optional: amber "correction" note
}
```

Events sort automatically by `d` and group under their month heading. Months through
mid-2027 are pre-labeled in `app.js` (`MONTHS`); anything later falls back to an
auto-generated "Month YEAR" label, so you can keep adding events without touching `app.js`.

The "Updated" date in the header is simply today's date in the viewer's browser.

## Preview locally

Because the page loads `data.js` as a normal script, you can just **double-click
`index.html`** to open it in a browser. Or run a tiny local server:

```bash
cd fubo-content-calendar
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo and push these files to it:
   ```bash
   cd fubo-content-calendar
   git init
   git add .
   git commit -m "Fubo content calendar"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` / `root`, Save.
3. Your site goes live at `https://<you>.github.io/<repo>/` within a minute or two.

To update the calendar later, edit `data.js`, commit, and push — Pages redeploys automatically.
