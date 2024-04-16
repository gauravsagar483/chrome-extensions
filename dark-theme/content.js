let darkThemeEnabled = false;

chrome.storage.sync.get('darkThemeEnabled', function(data) {
  darkThemeEnabled = data.darkThemeEnabled || false;
  updateTheme();
});

function updateTheme() {
  if (darkThemeEnabled) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'green';
  } else {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
  }
  
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleTheme') {
    darkThemeEnabled = !darkThemeEnabled;
    updateTheme();
    sendResponse({themeEnabled: darkThemeEnabled});
  }
});
