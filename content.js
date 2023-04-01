// document.getElementsByTagName("body")[0].style.backgroundColor = "red";

chrome.storage.sync.get("excludedWebsites", (data) => {
  const excludedWebsites = data.excludedWebsites || [];
  const domain = window.location.hostname;

  const isExcluded = excludedWebsites.some((excludedDomain) => {
    return domain.startsWith(excludedDomain);
  });

  if (!isExcluded) {
    document.getElementsByTagName("body")[0].style.textTransform = "lowercase";
    if (!isGoogleSearch(domain, window.location.pathname)) {
      walk(document.body);
    }
  }
});

function isGoogleSearch(domain, path) {
  return domain === 'www.google.com' && path.startsWith('/search');
}

function walk(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.toLowerCase();
  } else {
    for (let child of node.childNodes) {
      walk(child);
    }
  }
}
