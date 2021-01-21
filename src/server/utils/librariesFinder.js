const pageLibrariesPromise = (browser, link) => new Promise(async (resolve, reject) => {
    let newPage = await browser.newPage();
    await newPage.goto(link, {
        wait: 'load',
        timeout: 0
    });
    try {
        await newPage.waitForSelector("body");
        let libraries = await newPage.$$eval('script', elements => elements.map(item => {
            const librarySrc = item.getAttribute('src')
            const libraryName = librarySrc ? librarySrc.match('.*/(.*)(\\.js.*)') : null;
            return libraryName ? libraryName[1] : null
        }));

        libraries = libraries.filter(src => src !== null).map(library => {
            if (library.includes('jquery')) {
                return 'jquery'
            }
            return library;
        });
        resolve(libraries);
    } catch (e) {
        console.log('Error occurred scraping libraries: ', e)
        reject(e);
    }

    await newPage.close();
});

module.exports = pageLibrariesPromise;
