const getCurrencyOptions = async () => {
    const response = await fetch('https://api.exchangerate.host/symbols');
    const json = await response.json();
    return json.symbols;
};

const getCurrencyRate = async (fromCurrency, toCurrency) => {
    const currencyConvertUrl = new URL('https://api.exchangerate.host/convert');
    currencyConvertUrl.searchParams.append('from', fromCurrency);
    currencyConvertUrl.searchParams.append('to', toCurrency);
    const response = await fetch(currencyConvertUrl);
    const json = await response.json();
    return json.result;
};

const appendOptionToSelect = (selectElement, optionItem) => {
    const optionElement = document.createElement('option');
    optionElement.value = optionItem.code;
    optionElement.textContent = optionItem.description;
    selectElement.appendChild(optionElement)
};

const populateSelectElement = (selectElement, optionList) => {
    optionList.forEach(optionItem => {
        appendOptionToSelect(selectElement, optionItem);
    })
};

const setupCurrencies = async () => {
    const fromCurrencyElem = document.querySelector('#fromCurrency')
    const toCurrencyElem = document.querySelector('#toCurrency')
    const CurrencyOptions = await getCurrencyOptions();
    const currencies = Object.keys(CurrencyOptions).map(currencyKey => CurrencyOptions[currencyKey]);
    
    populateSelectElement(fromCurrencyElem, currencies);
    populateSelectElement(toCurrencyElem, currencies);
};

const setUpEventListner = () => {
    const formElement = document.getElementById('convertForm');
    formElement.addEventListener('submit', async event => {
        event.preventDefault();

        const fromCurrency = document.getElementById('fromCurrency');
        const toCurrency = document.getElementById('toCurrency');
        const amount = document.getElementById('amount');
        const convertResultElement = document.getElementById('convertResults');

        try {
            const rate = await getCurrencyRate(fromCurrency.value, toCurrency.value);
            const amountValue = Number(amount.value);
            const conversionResult = Number(amountValue * rate).toFixed(2);
            convertResultElement.textContent = `${amountValue} ${fromCurrency.value} = ${conversionResult} ${toCurrency.value} `
        } catch (error) {
            convertResultElement.textContent = 'There was an error fetching the data'
        }
    });
};

setupCurrencies();
setUpEventListner();