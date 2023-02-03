// document.getElementsByTagName("body")[0].style.backgroundColor = "red";
document.getElementsByTagName("body")[0].style.textTransform = "lowercase";

// const styleEl = `<style>
//     .lowerit {
//       text-transform: lowercase;
//     }
//   </style>`;
// // document.getElementsByTagName("head")[0].innerHTML += styleEl;

// const globalStyleEl = `<style>
//     * {
//       text-transform: lowercase !important;
//     }
//   </style>`;

// function setDowncase() {
//   // document.getElementsByTagName("head")[0].innerHTML += globalStyleEl;
//   // document.getElementsByTagName("body")[0].classList.add("lowerit");

//   document.getElementsByTagName("html")[0].style.cssText +=
//     "text-transform: lowercase !important";
// }

// // var lowercaseBtn = document.getElementById("lowercaseBtn");
// // lowercaseBtn.addEventListener("click", async () => {
// //   let [tab] = await chrome.tabs.query({
// //     active: true,
// //     currentWindow: true,
// //   });
// //   chrome.scripting.executeScript({
// //     target: { tabId: tab.id },
// //     function: setDowncase,
// //   });
// // });

// chrome.runtime.onMessage.addListener((message) => {
//   if (message === "toggleCase") {
//     setDowncase();
//   }
// });
