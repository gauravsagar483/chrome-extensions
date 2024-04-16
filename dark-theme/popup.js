let darkThemeEnabled = false;

chrome.storage.sync.get('darkThemeEnabled', function(data) {
  darkThemeEnabled = data.darkThemeEnabled || false;
  updateButton();
  updateTheme();
});

function updateButton() {
  let button = document.getElementById('toggleTheme');
  if (button) {
    button.innerText = darkThemeEnabled ? 'Disable Dark Theme' : 'Enable Dark Theme';
  }
}

function updateTheme() {
  if (darkThemeEnabled) {
    chrome.scripting.insertCSS({
      code: 'body { background-color: black !important; color: green !important; }',
      allFrames: true
    });
  } else {
    chrome.scripting.removeCSS({
      code: 'body { background-color: black !important; color: green !important; }',
      allFrames: true
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let button = document.getElementById('toggleTheme');
  if (button) {
    button.addEventListener('click', function() {
      darkThemeEnabled = !darkThemeEnabled;
      chrome.storage.sync.set({darkThemeEnabled: darkThemeEnabled}, function() {
        updateButton();
        updateTheme();
      });
    });
  }
});
