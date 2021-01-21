const browserObject = require('../web-scraper/browser');
const scraperController = require('../web-scraper/pageController');

exports.getLibraries = (req, res) => {
    const searchTerm = req.query.searchTerm.trim();

    console.log('SearchTerm:', searchTerm);

    //Start the browser and create a browser instance
    let browserInstance = browserObject.startBrowser();

    // Pass the browser instance and query param to the scraper controller
    const libraries = scraperController(browserInstance, searchTerm)

    libraries.then(data => {
        console.log("Successfully scraped libraries.")
        console.log(data)
        if(!data) {
            throw new Error('Failed to scrap libraries');
        }
        const topSixLibraries = data.slice(0, 6);
        res.send(topSixLibraries);
    }).catch(err => {
        console.log('Failed to scrape: ', err)
        return res.status(500).json({message: "Scraping libraries failed!"})
    })
}
