
/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
document.addEventListener("click", (e) => {
    /**
     * Just log the error to the console.
     */
    function reportError(error) {
    console.error(`Could not beastify: ${error}`);
    }
        
    console.log("popup loaded")
    let videoProgress = document.querySelector('video').currentTime
    console.log(videoProgress)
});
}

/**
 * There was an error executing the script.
 * Display the popup's error message.
 */
function reportExecuteScriptError(error) {
    console.error(`Failed to execute content script: ${error.message}`);
}
  
/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs.executeScript({file: "/content_scripts/varmonize.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
  
