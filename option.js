document.onload = _ => {
    console.log("hello");
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    alert(tab);
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
}