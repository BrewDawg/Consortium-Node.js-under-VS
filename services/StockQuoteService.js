"use strict";
var Services;
(function (Services) {
    (function (ResultCode) {
        ResultCode[ResultCode["Error"] = "E"] = "Error";
        ResultCode[ResultCode["InvalidSymbol"] = "I"] = "InvalidSymbol";
        ResultCode[ResultCode["Success"] = "S"] = "Success";
    })(Services.ResultCode || (Services.ResultCode = {}));
    var ResultCode = Services.ResultCode;
    var StockQuoteResponse = (function () {
        function StockQuoteResponse() {
            // E = not implemented, I = invalid account, V = valid account
            this.resultCode = undefined;
            this.current = undefined;
            this.gainOrLoss = undefined;
            this.gainOrLossPercent = undefined;
            this.volume = undefined;
            this.todaysLow = undefined;
            this.todaysHigh = undefined;
            this.previousClose = undefined;
        }
        return StockQuoteResponse;
    }());
    Services.StockQuoteResponse = StockQuoteResponse;
    var StockQuoteService = (function () {
        function StockQuoteService() {
        }
        StockQuoteService.prototype.getQuote = function (symbol) {
            var resp = new StockQuoteResponse();
            resp.resultCode = ResultCode.InvalidSymbol;
            switch (symbol) {
                case "MSFT":
                    resp.current = 52.09;
                    resp.gainOrLoss = 0.04;
                    resp.gainOrLossPercent = 0.07;
                    resp.volume = 15031610;
                    resp.todaysHigh = 52.7299;
                    resp.todaysHigh = 52.03;
                    resp.previousClose = 52.13;
                    resp.resultCode = ResultCode.Success;
                    break;
            }
            return resp;
        };
        return StockQuoteService;
    }());
    Services.StockQuoteService = StockQuoteService;
})(Services = exports.Services || (exports.Services = {}));
//# sourceMappingURL=StockQuoteService.js.map