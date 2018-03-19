browser.tabs.onUpdated.addListener(listenForTabChange);

browser.tabs.onActivated.addListener(listenWhenTabChange);

browser.tabs.onCreated.addListener(listenWhenTabCreated);

function listenForTabChange(tabId, changeInfo, tab) {

		 console.log(' tab url is changed');
	getCurrentTabDetails(); 
}

function listenWhenTabChange (activeInfo) {
	 console.log(' tab is changed');
	
getCurrentTabDetails();
}

function listenWhenTabCreated(tab){
	console.log('tab is created');
	browser.pageAction.show(tab.id)
}


function getCurrentTabDetails(){
	var querying = browser.tabs.query({currentWindow: true, active: true});
	querying.then(getInfoForTab, onError);
}

function getInfoForTab(tabs) {

  if (tabs.length > 0) {
		console.log(tabs[0]); 
	if(tabs[0].isArticle){
		browser.pageAction.show(tabs[0].id);
	}
    }
}


function onError(error) {
  console.log(`Error: ${error}`);
}

browser.pageAction.onClicked.addListener(doPageActClickProc);

function doPageActClickProc(){
	 //browser.tabs.toggleReaderMode();	
	 browser.tabs.saveAsPDF({});
}
