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
console.log("back is run")