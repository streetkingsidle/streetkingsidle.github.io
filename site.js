// Puts the current Discord invite (kept up to date by the Discord bot in invite.json) into every Discord link.
// The links already contain a working address, so the page is fine if this file cannot be read.
fetch('invite.json', { cache: 'no-store' })
  .then(function (r) { return r.ok ? r.json() : null; })
  .then(function (j) {
    if (!j || typeof j.url !== 'string' || !/^https:\/\/(discord\.gg|discord\.com\/invite)\//.test(j.url)) return;
    document.querySelectorAll('a[data-discord]').forEach(function (a) { a.href = j.url; });
  })
  .catch(function () {});
