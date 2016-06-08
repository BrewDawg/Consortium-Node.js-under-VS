/// <reference path="services/StockQuoteService.ts" />
/// <reference path="typings/browser.d.ts" />

import * as http from "http";
import * as express from "express";
import stocks = require('./services/StockQuoteService');

var app: express.Application = express();
var router: express.Router = express.Router();

app.set("view engine", "vash");

app.get("/", function (req: express.Request, res: express.Response) {
    res.render("index", { title: "Node.js Demo !!" });
});

app.get("/Services/StockQuote/:symbol", function (request: express.Request, response: express.Response) {

    var service = new stocks.Services.StockQuoteService();
    var resp = service.getQuote(request.params.symbol);
    response.json(resp);
});

// Just to show the diff of running under IISNODE
console.log(process.env.PORT || 1337);

var server = app.listen(process.env.PORT || 1337);