console.log("content.js loaded");

document.addEventListener("DOMContentLoaded", function () {
  console.log("Page load complete!");
});

chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
  console.log(response.farewell);
});
