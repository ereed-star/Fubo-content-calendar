/* Fubo Content Calendar — rendering & filtering.
   Event data lives in data.js (window.FUBO_EVENTS). Edit that file to update the calendar. */
(function () {
  "use strict";

  var DATA = (window.FUBO_EVENTS || []).slice();

  var MONTHS = {
    "202611": "November 2026", "202612": "December 2026",
    "202701": "January 2027", "202702": "February 2027", "202703": "March 2027",
    "202704": "April 2027", "202705": "May 2027", "202706": "June 2027"
  };
  function monthName(key) {
    var k = String(key).slice(0, 6);
    if (MONTHS[k]) return MONTHS[k];
    var y = k.slice(0, 4), m = parseInt(k.slice(4, 6), 10);
    var names = ["", "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return (names[m] || "") + " " + y;
  }

  var cat = "all", net = null, q = "";
  var listEl = document.getElementById("list");
  var countEl = document.getElementById("count");

  // ---- Rolling window: today through MONTHS_AHEAD months out ----
  var MONTHS_AHEAD = 2;
  function ymd(dt) {
    return dt.getFullYear() * 10000 + (dt.getMonth() + 1) * 100 + dt.getDate();
  }
  var now = new Date();
  var todayNum = ymd(now);
  var cutDate = new Date(now.getFullYear(), now.getMonth() + MONTHS_AHEAD, now.getDate());
  var cutNum = ymd(cutDate);

  // An event is in-window if it STARTS on/before the cutoff AND has not yet ended
  // (ongoing/multi-day events carry an `end` key; single-day events use `d`).
  function inWindow(e) {
    var ends = e.end || e.d;
    return e.d <= cutNum && ends >= todayNum;
  }
  DATA = DATA.filter(inWindow);

  // "Updated" banner = today's date; window runs today -> cutoff
  var optsDM = { month: "short", day: "numeric" };
  document.getElementById("asof").textContent =
    now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  var winEl = document.getElementById("window");
  if (winEl) {
    winEl.textContent = now.toLocaleDateString("en-US", optsDM) + " – " +
      cutDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  // Footer meta: last-verified date (bumped weekly by the Action) + repo link
  var meta = window.FUBO_META || {};
  var metaEl = document.getElementById("meta");
  if (metaEl) {
    var bits = [];
    if (meta.lastVerified) {
      var lv = new Date(meta.lastVerified + "T00:00:00");
      var lvStr = isNaN(lv) ? meta.lastVerified
        : lv.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      bits.push("Dates last verified " + lvStr + ".");
    }
    metaEl.textContent = bits.join(" ");
    if (meta.repoUrl) {
      metaEl.appendChild(document.createTextNode(" "));
      var a = document.createElement("a");
      a.href = meta.repoUrl;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = "Source & data on GitHub ↗";
      metaEl.appendChild(a);
    }
  }

  // Build network filter chips (most common networks)
  var netCounts = {};
  DATA.forEach(function (e) {
    (e.nets || []).forEach(function (n) { netCounts[n] = (netCounts[n] || 0) + 1; });
  });
  var topNets = Object.keys(netCounts)
    .sort(function (a, b) { return netCounts[b] - netCounts[a]; })
    .slice(0, 14)
    .sort();
  var netsEl = document.getElementById("nets");
  topNets.forEach(function (n) {
    var b = document.createElement("button");
    b.textContent = n;
    b.setAttribute("aria-pressed", "false");
    b.dataset.net = n;
    b.onclick = function () { net = (net === n ? null : n); syncNets(); render(); };
    netsEl.appendChild(b);
  });
  function syncNets() {
    Array.prototype.forEach.call(netsEl.children, function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.net === net));
    });
  }

  document.getElementById("cat").addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    cat = btn.dataset.cat;
    Array.prototype.forEach.call(e.currentTarget.children, function (b) {
      b.setAttribute("aria-pressed", String(b === btn));
    });
    render();
  });
  document.getElementById("q").addEventListener("input", function (e) {
    q = e.target.value.toLowerCase().trim();
    render();
  });

  function matches(e) {
    if (cat !== "all" && e.cat !== cat) return false;
    if (net && (e.nets || []).indexOf(net) === -1) return false;
    if (q) {
      var hay = (e.title + " " + (e.nets || []).join(" ") + " " + (e.note || "")).toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    });
  }

  function render() {
    var rows = DATA.filter(matches).sort(function (a, b) { return a.d - b.d; });
    countEl.innerHTML = "<b>" + rows.length + "</b> event" + (rows.length === 1 ? "" : "s") +
      (cat !== "all" ? " · " + (cat === "sport" ? "Sports" : "Entertainment") : "") +
      (net ? " · " + esc(net) : "");

    if (!rows.length) {
      listEl.innerHTML = '<p class="empty">No events match your filters.</p>';
      return;
    }

    var html = "", curMonth = "";
    rows.forEach(function (e) {
      var mk = String(e.d).slice(0, 6);
      if (mk !== curMonth) {
        if (curMonth) html += "</div>";
        curMonth = mk;
        html += '<section class="month"><h2>' + monthName(mk) + "</h2>";
      }
      var catPill = e.cat === "sport"
        ? '<span class="pill cat-sport">Sports</span>'
        : '<span class="pill cat-ent">Entertainment</span>';
      var netPills = (e.nets || []).map(function (n) {
        return '<span class="pill net">' + esc(n) + "</span>";
      }).join("");
      var newPill = e["new"] ? '<span class="pill new">New</span>' : "";
      html += '<article class="card">' +
        '<div class="date">' + (e.tbc ? '<span class="tbc">≈ </span>' : "") + esc(e.date) +
          '<span class="yr">' + esc(e.yr || "") + "</span></div>" +
        '<div class="body">' +
          '<p class="title">' + esc(e.title) + newPill + "</p>" +
          '<div class="tagwrap">' + catPill + netPills + "</div>" +
          (e.note ? '<p class="note">' + esc(e.note) + "</p>" : "") +
        "</div>" +
      "</article>";
    });
    html += "</div>";
    listEl.innerHTML = html;
  }

  render();
})();
