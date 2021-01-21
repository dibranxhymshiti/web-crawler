const getGoogleResultLinks = require('../utils/googleLinks');
const pageLibrariesPromise = require('../utils/librariesFinder');

const scraper = async (browser, searchTerm) => {
    const editedSearchTerm = searchTerm.split(' ').join('%20');
    const url = `https://www.google.com/search?q=${editedSearchTerm}&num=7`
    let page = await browser.newPage();
    console.log(`Navigating to ${url}...`);
    await page.goto(url);

    // Wait for the required DOM to be rendered
    await page.waitForSelector('#search');
    console.log('Scraping links from page result ...')

    // Scrap links from search result
    let urls = await getGoogleResultLinks(page);
    console.log(`Found ${urls.length} links.`)

    // Scrap libraries for each link
    let scrapedLibraries = [];
    for(let link in urls){
        console.log(`Scraping libraries from: ${urls[link]} ...`);
        let currentPageLibraries = await pageLibrariesPromise(browser, urls[link]);
        scrapedLibraries = await scrapedLibraries.concat(currentPageLibraries);
    }


    await page.close();
    return scrapedLibraries;
}

module.exports = scraper;
