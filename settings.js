function updateExcludedWebsitesList() {
    chrome.storage.sync.get("excludedWebsites", (data) => {
      const excludedWebsites = data.excludedWebsites || [];
      const list = excludedWebsites.map((site) => `<li>${site}</li>`).join("");
      document.getElementById("excludedWebsites").innerHTML = `<ul>${list}</ul>`;
    });
  }
  
  updateExcludedWebsitesList();