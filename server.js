/// <reference path="services/StockQuoteService.ts" />
/// <reference path="typings/browser.d.ts" />
"use strict";
var express = require("express");
var stocks = require('./services/StockQuoteService');
var app = express();
var router = express.Router();
app.set("view engine", "vash");
app.get("/", function (req, res) {
    res.render("index", { title: "Node.js Demo !!" });
});
app.get("/Services/StockQuote/:symbol", function (request, response) {
    var service = new stocks.Services.StockQuoteService();
    var resp = service.getQuote(request.params.symbol);
    response.json(resp);
});
// Just to show the diff of running under IISNODE
console.log(process.env.PORT || 1337);
var server = app.listen(process.env.PORT || 1337);
//# sourceMappingURL=server.js.map