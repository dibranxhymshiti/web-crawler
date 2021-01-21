const express = require('express');
const jsLibrariesRoutes = require('./routes/jsLibrariesRoute')

const app = express();
const port = 8080;

app.use('/api/libraries', jsLibrariesRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
