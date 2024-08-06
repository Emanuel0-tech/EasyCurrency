let apikey = `858afe60d546df84710c40e8`;
let request = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

const currencies = [
    { code: "BRL", name: "Real Brasileiro" },
    { code: "USD", name: "Dólar Americano" },
    { code: "EUR", name: "Euro" },
    { code: "JPY", name: "Iene japonês" },
    { code: "CNY", name: "Renminbi chinês" },
    { code: "GBP", name: "Libra esterlina" },
];

currencies.forEach(coin => {
    const option = document.createElement("option");
    option.text = coin.name;
    option.value = coin.code;
    fromDropDown.appendChild(option);
    
});

currencies.forEach(coin => {
    const option = document.createElement("option");
    option.text = coin.name;
    option.value = coin.code;
    toDropDown.appendChild(option);
});

let convertCurrency = () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;
    
    if (!isNaN(amount) && amount.value !== 0) {
        fetch(request)
        .then(response => response.json())
        .then((data) => {
            let fromExchangeRate = data.conversion_rates[fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount/fromExchangeRate) * toExchangeRate;
            result.innerHTML = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
    } else {
        alert("Digite um valor válido")
    }
};

const convertButton = document.getElementById("convert-button");
convertButton.addEventListener("click", convertCurrency);
