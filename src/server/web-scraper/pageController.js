const pageScraper = require('./pageScraper');
const libraryDeduplicator = require('../utils/deduplicator');

const scrapeAll = async (browserInstance, searchTerm) =>{
    let browser;
    try{
        browser = await browserInstance;
        let libraries = await pageScraper(browser, searchTerm);
        let deduplicatedLibraries = libraryDeduplicator(libraries);

        await browser.close();

        return deduplicatedLibraries.sort((first, second) => {
            return first.count > second.count ? -1 : 1
        });
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance, searchTerm) => scrapeAll(browserInstance, searchTerm)
