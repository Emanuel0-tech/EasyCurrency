let apikey = `1c9426a08aa2b29326ccf280`;
let request = `GET https://v6.exchangerate-api.com/v6/${apikey}/quota`;
const fromDropDown = document.querySelector("from-currency-select");
const toDropDown = document.querySelector("to-currency-select");

const currencies = [
    { code: "BRL", name: "Real Brasileiro" },
    { code: "USD", name: "Dólar Americano" },
];


function currencySelect (currency.forEach) {
    const option = document.createElement("option");
    option.text = currency.name;
    option.value = currency.code;
    fromDropDown.add(option);
}