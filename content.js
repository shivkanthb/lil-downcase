// document.getElementsByTagName("body")[0].style.backgroundColor = "red";
// document.getElementsByTagName("body")[0].style.textTransform = "lowercase";

chrome.storage.sync.get("excludedWebsites", (data) => {
  const excludedWebsites = data.excludedWebsites || [];
  const domain = window.location.hostname;

  const isExcluded = excludedWebsites.some((excludedDomain) => {
    return domain.startsWith(excludedDomain);
  });

  if (!isExcluded) {
    walk(document.body);
  }
});

function walk(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.toLowerCase();
  } else {
    for (let child of node.childNodes) {
      walk(child);
    }
  }
}
