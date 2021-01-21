const express = require('express');
const JsLibraries = require('../services/jsLibrariesService')

const router = express.Router();

router.get('', JsLibraries.getLibraries)

module.exports = router;


