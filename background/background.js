chrome.runtime.onInstalled.addListener((details) => {
	chrome.contextMenus.create({
		title: "Test Context Menu",
		id: "contextMenu1",
		contexts: ["page", 'selection']
	})
	chrome.contextMenus.onClicked.addListener((event) => {
		console.log(event);
		chrome.tabs.create({
			// active: true,
			url: `https://www.imdb.com/find/?q=${event.selectionText}&ref_=nv_sr_sm`
		})
	})
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log(message);
	console.log(sender);
	sendResponse("received message")
	chrome.tabs.sendMessage(sender.tab.id, "Got your message, from back")
})