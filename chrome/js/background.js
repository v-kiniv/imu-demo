chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
        frame: "none",
        'bounds': {
            'width': 1000,
            'height': 800
        }
    });
});
