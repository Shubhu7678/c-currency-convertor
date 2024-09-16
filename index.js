import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_TmrAEODCgUM4CSryAByS3GoIxiFNFAjZmwII53dF');


export const convertCurrency = async(fromCurrency,toCurrency,amount) => { 
    try {
        
        const response = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        });
        
        const data = response.data[toCurrency];
        console.log(data*amount);

    } catch (err) { 
        
        console.log(err.message);

    }
    
}

convertCurrency('USD', 'INR', 30);

