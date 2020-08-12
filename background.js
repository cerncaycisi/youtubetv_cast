(() => {

    "use strict";

    // URLs on which the User-Agent header should be changed
    const URL_PATTERNS = ["*://*.youtube.com/tv*"];

    // New User-Agent header string
    const USER_AGENT_STRING = "Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1";

    // Register an event listener to perform the replacement
    chrome.webRequest.onBeforeSendHeaders.addListener(x => {
        for (const header of x.requestHeaders) {
            if (header.name.toLowerCase() === "user-agent") {
                header.value = USER_AGENT_STRING;
            }
        }

        return {requestHeaders: x.requestHeaders};
    }, {urls: URL_PATTERNS}, ["blocking", "requestHeaders"]);

})();