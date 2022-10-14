const express = require("express");
const router = express.Router(); ///test-you
//importing a custom module

const logger = require("../logger/logger");
//importing external package
// const underscore = require('underscore')
const helper = require("../util/helper");
const formatter = require("../validator/formatter");
const lodash = require("../lodash/useLodash");
router.get("/test-me", function (req, res) {
    logger.welcome();
    helper.detailsOfBatch();
    formatter.trim("  FunctionUp ");
    lodash.monthOfYear();
    res.send("My first ever api!");

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;
