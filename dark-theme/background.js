chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({darkThemeEnabled: false});
});

