You are maintaining the Fubo Content Calendar. Your only job in this run is to keep
`data.js` accurate. Do NOT run git — the workflow handles committing and pushing.

Steps:

1. Read `data.js` in the repository root.

2. Determine today's real date. The site shows a rolling window of today through two
   months out, so focus on every event whose start date (`d`) falls within roughly the
   next 10 weeks.

3. For each of those events, use WebSearch (and WebFetch if helpful) to re-verify the
   date, network(s), and venue against current, reliable sources — network, league, or
   reputable press. Only treat something as wrong if a credible source contradicts it.

4. When a value has changed, edit the event so these stay consistent:
   - `d` and `end` are YYYYMMDD sort keys (use `end` for multi-day/ongoing events).
   - `date` is the human-readable display string; `yr` is the year line.
   Update all of them together. When you correct a value, set or refresh the `fix:` note
   with a short explanation. Remove a `fix:` note only if it no longer describes a real
   discrepancy.

5. Add any notable, newly-announced sports or entertainment premieres on Fubo-carried
   networks that now fall within the next ~10 weeks. Match the existing object shape;
   include `end` for multi-day events and `tbc:true` for approximate/unconfirmed dates.

6. Never fabricate dates or sources. If you cannot confirm something, mark it `tbc:true`
   and explain in the note rather than guessing. Keep edits minimal and surgical — do not
   rewrite entries that have not changed, and preserve the file's formatting and comments.

7. Update `window.FUBO_META.lastVerified` at the top of `data.js` to today's date in
   YYYY-MM-DD form — do this on every run, even when no event entries changed, so the
   site's "Dates last verified" line stays current.

8. Make no other file changes. Do not touch index.html, styles.css, or app.js. (Leave
   `window.FUBO_META.repoUrl` as it is — the repo owner sets that.)

When finished, print a short summary of what you checked and what you changed.
