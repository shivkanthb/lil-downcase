// document.getElementsByTagName("body")[0].style.backgroundColor = "red";
// document.getElementsByTagName("body")[0].style.textTransform = "lowercase";

const styleEl = `<style>
    .lowerit {
      text-transform: lowercase;
    }
  </style>`;
document.getElementsByTagName("head")[0].innerHTML += styleEl;

function setDowncase() {
  document.getElementsByTagName("body")[0].classList.add("lowerit");
}

// var lowercaseBtn = document.getElementById("lowercaseBtn");
// lowercaseBtn.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({
//     active: true,
//     currentWindow: true,
//   });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setDowncase,
//   });
// });

chrome.runtime.onMessage.addListener((message) => {
  if (message === "toggleCase") {
    setDowncase();
  }
});
