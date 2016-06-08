
export module Services {

    export enum ResultCode {
        Error = <any>"E",
        InvalidSymbol = <any>"I",
        Success = <any>"S",
    }

    export class StockQuoteResponse {

        // E = not implemented, I = invalid account, V = valid account
        public resultCode: ResultCode = undefined;

        public current: number = undefined;
        public gainOrLoss: number = undefined;
        public gainOrLossPercent: number = undefined;
        public volume: number = undefined;
        public todaysLow: number = undefined;
        public todaysHigh: number = undefined;
        public previousClose: number = undefined;
    }


    export class StockQuoteService {

        public getQuote(symbol: string): StockQuoteResponse {

            var resp: StockQuoteResponse = new StockQuoteResponse();
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
        }
    }
}