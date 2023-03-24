document.getElementById("excludedListLink").addEventListener("click", () => {
	chrome.tabs.create({ url: "settings.html" });
});

async function updateToggleButton() {
	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	const url = new URL(tab.url);
	const domain = url.hostname;

	chrome.storage.sync.get("excludedWebsites", (data) => {
		const excludedWebsites = data.excludedWebsites || [];
		const isExcluded = excludedWebsites.includes(domain);

		const toggleButton = document.getElementById("toggleBtn");
		toggleButton.textContent = isExcluded ? "Enable for this website" : "Exclude this website";
		toggleButton.onclick = () => toggleExclusion(domain, isExcluded);
	});
}

function toggleExclusion(domain, isExcluded) {
	chrome.storage.sync.get("excludedWebsites", (data) => {
		const excludedWebsites = data.excludedWebsites || [];

		if (isExcluded) {
			const index = excludedWebsites.indexOf(domain);
			excludedWebsites.splice(index, 1);
		} else {
			excludedWebsites.push(domain);
		}

		chrome.storage.sync.set({ excludedWebsites }, () => {
			// updateExcludedWebsitesList();
			updateToggleButton();
		});
	});
}

updateToggleButton();