console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
What do you want to do?
1-Convert currencies 2-Exit program`);

const input = require('sync-input');

const converter = () => {
    const availableCurrencies = ["JPY", 113.5, "EUR", 0.89, "RUB", 74.36, "USD", 1, "GBP", 0.75];

    console.log("What do you want to convert?");

    let fromCurrency = input("From:").toUpperCase();

    while (!availableCurrencies.includes(fromCurrency)) {
        console.log(`Unknown currency
    What do you want to convert?`);
        fromCurrency = input("From:").toUpperCase();
    }

    let toCurrency = input("To:").toUpperCase();

    while (!availableCurrencies.includes(toCurrency)) {
        console.log(`Unknown currency
    What do you want to convert?`);
        toCurrency = input("To:").toUpperCase();
    }

    const amount = input("Amount:");

    if (isNaN(amount)) return console.log("The amount has to be a number");
    else if (amount < 1) return console.log("The amount can not be less than 1");

    const result = (availableCurrencies[availableCurrencies.indexOf(toCurrency) + 1] / availableCurrencies[availableCurrencies.indexOf(fromCurrency) + 1] * amount).toFixed(4);
    console.log(`Result: ${amount} ${fromCurrency} equals ${result} ${toCurrency}`);
}

const loopConventer = () => {
    let whatDo = input();

    while(whatDo != 2) {
        if (whatDo != 1) {
            console.log("Unknown input");
        }
        else {
            converter();
        }
        console.log(`What do you want to do?
1-Convert currencies 2-Exit program`)
        whatDo = input();
    }
    console.log("Have a nice day!");
}

loopConventer();
