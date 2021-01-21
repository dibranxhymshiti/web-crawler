const getGoogleResultLinks = async (page) => {
    let links = await page.$$eval('.yuRUbf a', anchors => {
        anchors = anchors.map(anchor => {
                let link = anchor.getAttribute('href');
                link = link.match('^(?:https?:\\/\\/)?(?:[^@\\/\\n]+@)?(?:www\\.)?([^:\\/?\\n]+)');
                return link ? link[0] : null
            }
        )
        anchors = anchors.filter(href =>( href !=='#') && (href !== null))

        return anchors;
    });

    return [...new Set(links)];
}

module.exports = getGoogleResultLinks;
