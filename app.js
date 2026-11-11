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

  // "Updated" banner = today's date
  var today = new Date();
  var fmt = today.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  document.getElementById("asof").textContent = fmt;

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
          (e.fix ? '<div class="fix"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg><span>' + esc(e.fix) + "</span></div>" : "") +
        "</div>" +
      "</article>";
    });
    html += "</div>";
    listEl.innerHTML = html;
  }

  render();
})();
