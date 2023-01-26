console.log(
  "%c event_page loaded",
  "background: #222; color: #bada55;font-size: 20px;"
);
chrome.runtime.onInstalled.addListener(function () {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(
      sender.tab
        ? "from a content script:" + sender.tab.url
        : "from the extension"
    );
    console.log("Event is onInstalled");
    if (request.greeting == "hello") sendResponse({ farewell: "goodbyea" });
    if (request.greeting === "page_loaded") {
      console.log("Page has finished loading.");
      sendResponse({ farewell: "Page load complete" });
    }
  });
});
//not running
chrome.runtime.onStartup.addListener(function () {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(
      sender.tab
        ? "from a content script:" + sender.tab.url
        : "from the extension"
    );
    console.log("Event is onStartup");

    if (request.greeting == "hello") sendResponse({ farewell: "goodbyes" });
    if (request.greeting === "page_loaded") {
      console.log("Page has finished loading.");
      sendResponse({ farewell: "Page load complete" });
    }
  });
});
