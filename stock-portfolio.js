function totalPortfolioValue(stockTicker, portfolio) {
	var portfolioVal = 0,
      indexTracker;

  for (var i = 0; i < portfolio.length; i++) {
  	indexTracker = stockTicker.indexOf(portfolio[i][0]);
    if (indexTracker > -1) {
    	portfolioVal += stockTicker[indexTracker+1] * portfolio[i][1];
    }
  }
  return portfolioVal;
}














//EXAMPLE TESTS

var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio = [['XYZ', 20], ['BBB', 10]];

console.log(totalPortfolioValue(ticker, portfolio));
//OUTPUT: 4050
