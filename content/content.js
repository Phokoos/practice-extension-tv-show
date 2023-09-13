const text = []
const aTags = document.getElementsByTagName("a")
for (const tag of aTags) {
	text.push(tag.textContent)
}

chrome.storage.local.set({
	text
})

chrome.runtime.sendMessage(null, text,
	// (res) => { console.log("I`m from send res func: ", res); }
)

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	console.log(msg);
	console.log(sender);
})

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// 	console.log(message);
// 	console.log(sender);
// })