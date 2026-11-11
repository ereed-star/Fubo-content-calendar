/* =========================================================================
   Fubo Content Calendar — EVENT DATA
   Edit this file to add, remove, or update events, then commit & push.

   Each event is an object:
     cat   "sport" | "ent"                 (category — required)
     d      20270125                        (sort key YYYYMMDD, use the START date — required)
     end    20270131                        (optional END date YYYYMMDD — add for multi-day or
                                             ongoing events so the rolling window keeps them
                                             visible through their whole run; omit for one-day events)
     date  "Jan 25"                         (what shows in the date column — required)
     yr    "2027"                           (small year line under the date)
     time  "8:00 PM ET"                     (optional US-Eastern start time, shown under the date;
                                             omit for multi-day/weekly slates or when not yet announced)
     title "CFP National Championship"      (required)
     nets  ["ESPN","ABC"]                   (networks — array, shown as pills)
     note  "Allegiant Stadium, Las Vegas."  (one-line description — optional)
     new   true                             (optional — adds a "New" badge for new series/seasons)
     tbc   true                             (optional — marks the date approximate / to confirm, shows "≈")
     fix   "Jan 25, not ~Jan 18."           (optional — kept as a record of corrections; not displayed)

   The site shows a ROLLING WINDOW: events from today through two months out.
   (Change MONTHS_AHEAD in app.js to widen/narrow it.) Events sort by `d`
   automatically and group under their month.
   ========================================================================= */

// Site metadata. `lastVerified` is bumped automatically by the weekly
// re-verification Action. Set `repoUrl` to your GitHub repo once pushed
// (leave "" to hide the link).
window.FUBO_META = {
  lastVerified: "2026-11-11",
  repoUrl: ""   // e.g. "https://github.com/you/fubo-sports-live"
};

window.FUBO_EVENTS = [
  // ===== NOVEMBER 2026 =====
  {cat:"sport",d:20261108,end:20261115,date:"Nov 8–15",yr:"2026",title:"WTA Finals",nets:["Tennis Channel"],note:"Season-ending championship, now underway.",fix:"Relocated from Riyadh to Indian Wells, CA; runs Nov 8–15 (was listed Nov 7–14 in Riyadh)."},
  {cat:"ent",d:20261108,end:20261224,date:"Nov–Dec",yr:"2026",title:"Hallmark Countdown to Christmas",nets:["Hallmark"],note:"New original holiday movies every weekend through the holidays."},
  {cat:"sport",d:20261112,end:20261117,date:"Nov 12–17",yr:"2026",title:"UEFA Nations League — Matchdays 5–6",nets:["FS1","FS2"],note:"League-phase finale; English-language coverage."},
  {cat:"sport",d:20261112,end:20261117,date:"Nov 12–17",yr:"2026",title:"CONCACAF Nations League — Quarterfinals",nets:["TNT","truTV","Universo"],note:"Home-and-away QFs (USMNT vs. Haiti). Winners advance to the March 2027 Finals at SoFi Stadium.",fix:"This window is the quarterfinals (Nov 12–17) on TNT/truTV — not “MD 5–6, Nov 14–18, CBS Sports Network.”"},
  {cat:"ent",d:20261112,date:"Nov 12",yr:"2026",time:"9:00 PM ET",title:"Southern Charm S12",nets:["Bravo"],note:"Charleston's social set returns.",fix:"Premieres Nov 12, not Nov 5."},
  {cat:"sport",d:20261115,end:20261122,date:"Nov 15–22",yr:"2026",title:"ATP Finals",nets:["Tennis Channel","ESPN"],note:"Season-ending singles & doubles, Inalpi Arena, Turin."},
  {cat:"sport",d:20261115,end:20261130,date:"Nov (weekly)",yr:"2026",title:"NFL Regular Season — Weeks 10–13",nets:["NBC","FOX","CBS","ESPN","ABC"],note:"Sunday doubleheaders · SNF on NBC · MNF on ESPN/ABC."},
  {cat:"sport",d:20261114,end:20261128,date:"Nov (weekly)",yr:"2026",title:"College Football — Weeks 12–14",nets:["ABC","ESPN","FOX","FS1","BTN"],note:"Conference races tighten heading into rivalry weekend."},
  {cat:"ent",d:20261118,date:"Nov 18",yr:"2026",time:"8:00 PM ET",title:"CMA Awards — 60th Annual",nets:["ABC"],note:"Live from Bridgestone Arena, Nashville (next day on Hulu)."},
  {cat:"ent",d:20261118,date:"Nov 18",yr:"2026",time:"9:00 PM ET",title:"Small Town Trouble: Texas",nets:["Bravo"],new:true,note:"Two-hour premiere; docuseries set in Boerne, TX (next day on Peacock)."},
  {cat:"sport",d:20261114,end:20261115,date:"Nov 14–15",yr:"2026",title:"NWSL Playoffs — Semifinals",nets:["CBS","ABC","ESPN"],note:"Saturday on CBS/Paramount+, Sunday on ABC/ESPN.",fix:"Nov 14–15, not Nov 13–15; the Saturday semifinal is on CBS."},
  {cat:"sport",d:20261121,date:"Nov 21",yr:"2026",time:"8:00 PM ET",title:"NWSL Championship",nets:["CBS","Telemundo"],note:"Audi Field, Washington D.C. English on CBS/Paramount+, Spanish on Telemundo."},
  {cat:"sport",d:20261121,date:"Nov 21",yr:"2026",time:"5:30 PM ET",title:"Copa Sudamericana Final",nets:["FS1","FOX Deportes"],note:"Single match in Barranquilla, Colombia.",fix:"Exact date is Nov 21 (was listed as ~Nov 22)."},
  {cat:"sport",d:20261123,end:20261128,date:"Nov 23–28",yr:"2026",title:"Feast Week — Thanksgiving Tournaments",nets:["ESPN","ESPN2","FS1"],note:"Maui Invitational (Nov 23–25) and the Players Era Festival."},
  {cat:"sport",d:20261124,end:20261129,date:"Nov 24–29",yr:"2026",title:"Davis Cup Finals 2026",nets:["Tennis Channel"],note:"Men's team Final 8 in Bologna, Italy.",fix:"Nov 24–29, not Nov 17–22."},
  {cat:"sport",d:20261124,end:20261125,date:"Nov 24–25",yr:"2026",title:"UEFA Champions League — Matchday 5",nets:["CBS Sports Network"],note:"Select games; English rights on CBS/Paramount+."},
  {cat:"ent",d:20261124,date:"Nov 24",yr:"2026",time:"8:00 PM ET",title:"Dancing with the Stars S35 Finale",nets:["ABC"],note:"Live mirror-ball finale (next day on Disney+).",fix:"Finale is Nov 24, not ~Nov 17."},
  {cat:"ent",d:20261126,date:"Nov 26",yr:"2026",time:"8:30 AM ET",title:"Macy's Thanksgiving Day Parade — 100th",nets:["NBC"],note:"Live telecast; genuinely the 100th (three WWII years were skipped)."},
  {cat:"sport",d:20261126,date:"Nov 26",yr:"2026",title:"NFL Thanksgiving Day Games",nets:["CBS","FOX","NBC"],note:"Bears–Lions 1:00 (CBS), Eagles–Cowboys 4:30 (FOX), Chiefs–Bills 8:20 PM ET (NBC)."},
  {cat:"ent",d:20261127,date:"Nov 27",yr:"2026",time:"8:00 PM ET",title:"Soul Train Music Awards",nets:["BET"],note:"Harris Theater, Chicago (simulcast on CBS)."},
  {cat:"ent",d:20261127,date:"Nov 27",yr:"2026",time:"10:00 PM ET",title:"You Can Go Home Again",nets:["BET"],note:"Queen Latifah documentary on affordable housing in Newark."},
  {cat:"sport",d:20261128,date:"Nov 28",yr:"2026",time:"6:00 PM ET",title:"WWE Survivor Series: WarGames",nets:["ESPN"],note:"Daikin Park, Houston, TX.",fix:"Venue is Houston — not Vancouver."},
  {cat:"sport",d:20261128,date:"Nov 28",yr:"2026",title:"College Football — Rivalry Week (Week 14)",nets:["FOX","ABC","ESPN","FS1","BTN"],note:"Ohio State–Michigan (FOX, noon ET) · Alabama–Auburn · Texas–Texas A&M."},
  {cat:"sport",d:20261128,date:"Nov 28",yr:"2026",time:"3:00 PM ET",title:"Copa Libertadores Final",nets:["beIN Sports","FOX Deportes"],note:"Estadio Centenario, Montevideo, Uruguay."},

  // ===== DECEMBER 2026 =====
  {cat:"sport",d:20261201,end:20261216,date:"Dec 1–16",yr:"2026",title:"Coppa Italia 2026-27 — Round of 16",nets:["CBS Sports Network"],note:"Single-leg knockouts; US via Paramount+/CBS (a few ties slip to January).",fix:"Runs Dec 1–16, not ~Dec 1–3; carried on Paramount+/CBS (was listed FSN)."},
  {cat:"sport",d:20261201,end:20261202,date:"Dec 1–2",yr:"2026",title:"ACC/SEC Challenge",nets:["ESPN","ESPN2"],note:"Duke at Florida headlines, Tue Dec 1, 9:30 PM ET."},
  {cat:"ent",d:20261201,end:20261225,date:"Dec 1–25",yr:"2026",title:"Freeform 25 Days of Christmas",nets:["Freeform"],note:"Annual 25-day holiday marathon of Disney, Pixar and holiday specials."},
  {cat:"ent",d:20261202,date:"Dec 2",yr:"2026",title:"Christmas in Rockefeller Center",nets:["NBC"],note:"Tree lighting; NBC telecast time not yet confirmed (7–10 PM ET window)."},
  {cat:"sport",d:20261204,end:20261205,date:"Dec 4–5",yr:"2026",title:"College Football Conference Championships",nets:["CBS","ABC","ESPN"],note:"SEC, Big Ten, ACC and Big 12 title games."},
  {cat:"sport",d:20261206,date:"Dec 6",yr:"2026",time:"12:00 PM ET",title:"CFP Selection Show",nets:["ESPN"],note:"12-team playoff field announced.",fix:"Sunday Dec 6, not Dec 8 (which is a Tuesday)."},
  {cat:"sport",d:20261206,end:20261228,date:"Dec (weekly)",yr:"2026",title:"NFL Regular Season — Weeks 14–17",nets:["NBC","FOX","CBS","ESPN","ABC"],note:"Playoff seeding race heats up."},
  {cat:"ent",d:20261207,date:"Dec 7",yr:"2026",title:"Kennedy Center Honors (49th)",nets:["TBA"],note:"Gala Dec 7 at Capital One Arena, D.C. Broadcaster/air date not yet announced — CBS's longtime deal ended after 2025.",fix:"Gala is Dec 7 (was listed ~Dec 23); no CBS broadcast confirmed.",tbc:true},
  {cat:"sport",d:20261208,end:20261209,date:"Dec 8–9",yr:"2026",title:"UEFA Champions League — Matchday 6",nets:["CBS Sports Network"],note:"Final league-phase matchday."},
  {cat:"sport",d:20261208,date:"Dec 8",yr:"2026",time:"6:30 PM ET",title:"Jimmy V Classic",nets:["ESPN"],note:"MSG — Alabama–Houston (6:30 PM ET), Georgia–Duke (9 PM ET)."},
  {cat:"ent",d:20261209,date:"Dec 9",yr:"2026",time:"9:30 PM ET",title:"The Amazing Race S39 Finale",nets:["CBS"],note:"Two-hour finale.",fix:"Finale is Dec 9, not ~Dec 30."},
  {cat:"ent",d:20261210,date:"Dec 10",yr:"2026",time:"9:00 PM ET",title:"Ghosts — Die Hard Christmas Special",nets:["CBS"],note:"A one-off holiday special. Season 6 proper returns midseason (early 2027).",fix:"Dec 10 is a Christmas special, not the Season 6 premiere."},
  {cat:"sport",d:20261211,date:"Dec 11",yr:"2026",title:"NBA Cup Final",nets:["Amazon Prime Video"],note:"Championship at Hinkle Fieldhouse, Indianapolis — first time outside Las Vegas. Tip-off time TBA.",fix:"Dec 11 (not ~Dec 16), in Indianapolis, on Prime Video (not ABC/ESPN)."},
  {cat:"sport",d:20261212,date:"Dec 12",yr:"2026",time:"3:00 PM ET",title:"Army–Navy Game (127th)",nets:["CBS"],note:"MetLife Stadium.",fix:"It is the 127th meeting, not the 126th (that was 2025)."},
  {cat:"sport",d:20261212,date:"Dec 12",yr:"2026",time:"7:00 PM ET",title:"Heisman Trophy Ceremony",nets:["ABC"],note:"New York City; college football's top individual honor.",fix:"Airs on ABC (ESPN presents it) — not ESPN."},
  {cat:"ent",d:20261213,date:"Dec 13",yr:"2026",time:"8:00 PM ET",title:"The Price Is Right at Night: Live Holiday Special",nets:["CBS"],note:"The show's first-ever live episode (also Paramount+)."},
  {cat:"ent",d:20261214,date:"Dec 14",yr:"2026",time:"9:00 PM ET",title:"The Voice S30 Finale",nets:["NBC"],note:"Fall-season live finale.",fix:"Replaces the original “Voice S28, Jan 4” entry — that season aired in 2025; the live finale is Dec 14."},
  {cat:"ent",d:20261216,date:"Dec 16",yr:"2026",time:"8:00 PM ET",title:"Survivor S51 Finale",nets:["CBS"],note:"Two-hour finale."},
  {cat:"sport",d:20261218,end:20261219,date:"Dec 18–19",yr:"2026",title:"College Football Playoff — First Round",nets:["ESPN","ABC","TNT"],note:"On-campus sites; top seeds host.",fix:"Dec 18–19, not Dec 19–20."},
  {cat:"sport",d:20261218,date:"Dec 18",yr:"2026",title:"MLS Cup presented by Audi",nets:["FOX","FOX Deportes"],note:"First-ever Friday final; primetime kickoff TBA. Last December MLS Cup before the 2027 spring–fall shift."},
  {cat:"sport",d:20261218,date:"Dec (TBC)",yr:"2026",title:"Supercoppa Italiana",nets:["FOX Deportes"],note:"2026 edition confirmed NOT in Saudi Arabia; venue, date and Final Four format still unconfirmed.",fix:"Date/venue unconfirmed (was listed ~Dec 18–22).",tbc:true},
  {cat:"sport",d:20261219,date:"Dec 19",yr:"2026",time:"12:00 PM ET",title:"CBS Sports Classic",nets:["CBS"],note:"Kansas–Ohio State (noon) and Kentucky–UNC (2:30 PM ET) at Madison Square Garden."},
  {cat:"sport",d:20261219,end:20270120,date:"Dec 19+",yr:"2026",title:"Bowl Season Begins",nets:["ESPN","ABC","CBS","FOX"],note:"Early non-CFP bowls running through the holidays."},
  {cat:"sport",d:20261225,date:"Dec 25",yr:"2026",title:"NBA Christmas Day Showcase",nets:["ABC","ESPN","Prime Video"],note:"Holiday marquee slate across the day."},
  {cat:"ent",d:20261225,date:"Dec 25",yr:"2026",time:"10:00 AM ET",title:"Disney Parks Magical Christmas Day Parade",nets:["ABC"],note:"Streams on Disney+/Hulu Dec 26."},
  {cat:"ent",d:20261230,date:"Dec 30",yr:"2026",title:"Mayfair Witches: Salem Coven S3",nets:["AMC","AMC+"],note:"Anne Rice adaptation returns with Alexandra Daddario; premiere time TBA."},
  {cat:"sport",d:20261230,end:20270101,date:"Dec 30 / Jan 1",yr:"2026–27",title:"CFP Quarterfinals",nets:["ESPN","ABC"],note:"Fiesta Bowl (Dec 30), then Cotton, Peach & Rose (Jan 1).",fix:"QFs are Dec 30 & Jan 1 — Sugar is a semifinal, not a quarterfinal (was listed Jan 1–2 with wrong bowls)."},
  {cat:"ent",d:20261231,date:"Dec 31",yr:"2026",time:"8:00 PM ET",title:"Dick Clark's New Year's Rockin' Eve 2027",nets:["ABC"],note:"Times Square countdown; first-ever Disney+ simulcast."},
  {cat:"sport",d:20261231,date:"Dec 31",yr:"2026",time:"6:00 PM ET",title:"NHL Winter Classic 2027",nets:["TNT"],note:"Avalanche at Utah Mammoth, Salt Lake City.",fix:"New Year's Eve, Dec 31, 2026 — not Jan 1, 2027."},

  // ===== JANUARY 2027 =====
  {cat:"sport",d:20270102,end:20270104,date:"Jan 2–3",yr:"2027",title:"La Liga Returns from Winter Break",nets:["ESPN","ESPN2","ESPN Deportes"],note:"Matchday 17 resumes.",fix:"Resumes the weekend of Jan 2–3."},
  {cat:"sport",d:20270103,end:20270106,date:"Jan 3–4",yr:"2027",title:"Serie A Returns from Christmas Break",nets:["FOX Deportes","FSN"],note:"Resumes Jan 2–3 with a midweek round Jan 6."},
  {cat:"sport",d:20270104,end:20270228,date:"Jan (weekly)",yr:"2027",title:"NCAA Basketball — Conference Play",nets:["ESPN","FOX","FS1","BTN","CBS"],note:"Big Ten, Big 12, SEC, ACC and Big East slate in full swing."},
  {cat:"ent",d:20270105,date:"Jan 5",yr:"2027",time:"8:00 PM ET",title:"Will Trent S05",nets:["ABC"],note:"Tuesday night return."},
  {cat:"ent",d:20270105,date:"Jan 5",yr:"2027",time:"9:00 PM ET",title:"High Potential S03",nets:["ABC"],note:"Tuesday night return."},
  {cat:"ent",d:20270105,date:"Early Jan",yr:"2027",title:"NCIS · NCIS: Sydney · NCIS: Origins — Winter Return",nets:["CBS"],note:"Tuesday NCIS block resumes; exact return dates not yet announced.",tbc:true},
  {cat:"ent",d:20270106,date:"Jan 6",yr:"2027",time:"9:00 PM ET",title:"The Rookie S09",nets:["ABC"],note:"Wednesday night return.",fix:"It's Season 9 (not S8); premieres Jan 6."},
  {cat:"ent",d:20270106,date:"Jan 6",yr:"2027",time:"8:00 PM ET",title:"Shifting Gears S03",nets:["ABC"],note:"Two-episode premiere; car-restoration comedy.",fix:"Premieres Jan 6, not Jan 1."},
  {cat:"ent",d:20270107,date:"Early Jan",yr:"2027",title:"Chicago Med · Fire · P.D. — Winter Return",nets:["NBC"],note:"Wednesday One Chicago block (Med / Fire / P.D.); NBC has not yet announced the 2027 return date.",tbc:true},
  {cat:"ent",d:20270107,date:"Jan 7",yr:"2027",time:"9:00 PM ET",title:"9-1-1: Nashville S2 — Winter Return",nets:["ABC"],note:"Thursday night."},
  {cat:"sport",d:20270107,end:20270205,date:"Jan 7 – Feb 5",yr:"2027",title:"AFC Asian Cup 2027",nets:["CBS Sports Network"],note:"Saudi Arabia hosts; 24 nations; continental championship."},
  {cat:"sport",d:20270108,end:20270110,date:"Jan 8",yr:"2027",title:"Bundesliga — Winterpause Ends",nets:["ESPN+"],note:"Matchday 15 weekend.",fix:"Resumes Jan 8, not ~Jan 10."},
  {cat:"sport",d:20270109,end:20270110,date:"Jan 9–10",yr:"2027",title:"NFL Regular Season — Week 18 (Finale)",nets:["CBS","FOX","NBC"],note:"Playoff seeding and wild-card berths locked.",fix:"Week 18 is Jan 9–10 — Jan 3 is actually Week 17."},
  {cat:"ent",d:20270109,end:20270228,date:"Jan (ongoing)",yr:"2027",title:"Hallmark “Winter Escape”",nets:["Hallmark"],note:"Post-holiday movie block, Saturdays.",fix:"The January event is now branded “Winter Escape,” not “Winterfest.”",tbc:true},
  {cat:"ent",d:20270110,date:"Jan 10",yr:"2027",time:"8:00 PM ET",title:"Golden Globes (84th)",nets:["CBS","Paramount+"],note:"Beverly Hilton; film & TV honors.",fix:"It's the 84th Golden Globes, not the 83rd."},
  {cat:"ent",d:20270113,date:"Jan 13",yr:"2027",time:"8:30 PM ET",title:"Abbott Elementary S6 — Winter Return",nets:["ABC"],note:"Regular Wednesday slot.",fix:"Returns Jan 13, not ~Jan 7."},
  {cat:"sport",d:20270114,end:20270115,date:"Jan 14–15",yr:"2027",title:"CFP Semifinals",nets:["ESPN","ABC"],note:"Orange Bowl (Jan 14) and Sugar Bowl (Jan 15).",fix:"Jan 14–15, not Jan 8–9; the bowls are Orange & Sugar."},
  {cat:"sport",d:20270116,end:20270118,date:"Jan 16–18",yr:"2027",title:"NFL Super Wild Card Weekend",nets:["CBS","FOX","NBC","ESPN","ABC"],note:"Six playoff games across three days.",fix:"Jan 16–18, not Jan 9–11."},
  {cat:"ent",d:20270123,date:"Jan 23",yr:"2027",time:"11:30 PM ET",title:"Saturday Night Live S52 — Winter Return",nets:["NBC"],note:"Returns from holiday hiatus.",fix:"Returns Jan 23 (the original “mid-Jan / ~Jan 3” was unconfirmed)."},
  {cat:"sport",d:20270117,end:20270131,date:"Jan 17–31",yr:"2027",title:"Australian Open 2027",nets:["ESPN","ESPN2"],note:"Season's first Grand Slam, Melbourne Park.",fix:"Main draw opens Jan 17 (was listed Jan 18)."},
  {cat:"sport",d:20270118,date:"Jan 18",yr:"2027",title:"NBA MLK Day Showcase",nets:["NBC","Peacock"],note:"Holiday showcase across the day.",fix:"The MLK slate is on NBC/Peacock under the new media deal (was listed ABC/ESPN)."},
  {cat:"sport",d:20270121,end:20270124,date:"Jan 21–24",yr:"2027",title:"The American Express",nets:["CBS"],note:"2027 PGA Tour season at PGA West, La Quinta CA."},
  {cat:"sport",d:20270123,end:20270124,date:"Jan 23–24",yr:"2027",title:"NFL Divisional Round",nets:["CBS","FOX","NBC","ESPN"],note:"Top two seeds in each conference host; four games.",fix:"Jan 23–24, not Jan 16–17."},
  {cat:"sport",d:20270125,date:"Jan 25",yr:"2027",time:"7:30 PM ET",title:"CFP National Championship",nets:["ESPN","ABC"],note:"Allegiant Stadium, Las Vegas, NV.",fix:"Jan 25 at Allegiant Stadium, Las Vegas — NOT ~Jan 18 at Hard Rock/Miami."},
  {cat:"sport",d:20270127,end:20270130,date:"Jan 27–30",yr:"2027",title:"The Sentry at Torrey Pines",nets:["CBS","Golf Channel"],note:"PGA Tour, San Diego.",fix:"Renamed “The Sentry” (fka Farmers Insurance Open); runs Jan 27–30 (was listed Jan 28–31)."},
  {cat:"ent",d:20270129,date:"Jan 29",yr:"2027",time:"8:00 PM ET",title:"Celebrity Jeopardy! S05",nets:["ABC"],note:"Celebrity contestants compete."},
  {cat:"sport",d:20270129,end:20270131,date:"Jan 29–31",yr:"2027",title:"Winter X Games 2027",nets:["ESPN"],note:"Buttermilk Mountain, Aspen.",fix:"Jan 29–31, not ~Jan 21–24."},
  {cat:"sport",d:20270131,date:"Jan 31",yr:"2027",title:"NFL Conference Championships",nets:["CBS","FOX"],note:"AFC on CBS, NFC on FOX; winners reach Super Bowl LXI.",fix:"Jan 31, not Jan 24."},

  // ===== FEBRUARY 2027 =====
  {cat:"sport",d:20270201,end:20270308,date:"Feb (weekly)",yr:"2027",title:"NCAA Basketball — Rivalry & Bubble Season",nets:["ESPN","FOX","FS1","BTN","CBS"],note:"Conference play heads toward Selection Sunday."},
  {cat:"sport",d:20270206,date:"Feb 6",yr:"2027",title:"WWE Royal Rumble 2027",nets:["ESPN"],note:"State Farm Stadium, Glendale, AZ; start time TBA.",fix:"Feb 6, not ~Jan 30."},
  {cat:"ent",d:20270207,date:"Feb 7",yr:"2027",time:"7:00 PM ET",title:"Grammy Awards 2027",nets:["ABC","Disney+","Hulu"],note:"Crypto.com Arena, LA — first time on ABC since 1972."},
  {cat:"ent",d:20270208,date:"Feb 8",yr:"2027",time:"8:30 PM ET",title:"Sunset P.I.",nets:["NBC"],new:true,note:"Workplace comedy set in the world of private detectives."},
  {cat:"sport",d:20270214,date:"Feb 14",yr:"2027",title:"Super Bowl LXI",nets:["ABC","ESPN"],note:"SoFi Stadium, Inglewood CA — first Super Bowl on the ESPN/ABC simulcast. Kickoff time TBA (~6:30 PM ET)."},
  {cat:"sport",d:20270221,date:"Feb 21",yr:"2027",title:"Daytona 500",nets:["FOX"],note:"69th running; green-flag time TBA. Moved a week later to avoid the Super Bowl."},

  // ===== MARCH 2027 =====
  {cat:"sport",d:20270314,date:"Mar 14",yr:"2027",title:"Selection Sunday — NCAA Tournament",nets:["CBS"],note:"Field officially expands to 76 teams in 2027; show time TBA (~6 PM ET)."},
  {cat:"ent",d:20270314,date:"Mar 14",yr:"2027",time:"7:00 PM ET",title:"99th Oscars",nets:["ABC","Hulu"],note:"Dolby Theatre; Conan O'Brien hosting for a third year."},
  {cat:"sport",d:20270315,date:"Mar (TBC)",yr:"2027",title:"College Football Spring Games",nets:["ESPN","FS1","BTN"],note:"Spring-practice showcases.",tbc:true},
  {cat:"sport",d:20270316,end:20270319,date:"Mar 16–19",yr:"2027",title:"March Madness — Opening & First Round",nets:["CBS","TNT","TBS","truTV"],note:"Opening Round Mar 16–17, First Round Mar 18–19."},
  {cat:"ent",d:20270321,date:"Mar 21",yr:"2027",new:true,title:"The Bachelor S30",nets:["ABC","Hulu"],note:"Franchise moves to Sundays.",fix:"Premieres Mar 21 — not ~Jan 5."}
];
