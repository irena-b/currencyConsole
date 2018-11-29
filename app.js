
//require https request module!!!
const https = require('https');
const api = require('./api.json')
const querystring = require('querystring');
//require http module for status code
const http = require('http')

//function to print message to console
// function printMessage() {
//     const message = `${from.this} has ${to.this} rate`;
//     console.log(message);
// }

function exchange(from, to, amount) {
     const request = https.get(`https://www.amdoren.com/api/currency.php?api_key=${api.key}&from=${from}&to=${to}&amount=${amount}`,
        response => {
            let body = "";
            //read the data
            console.log(response.statusCode)
            response.on('data', data => {
                body += data.toString();
              //  console.log(body)
              
            });
            response.on('end', () => {
                const currency = JSON.parse(body);
                 console.log(currency)
            })
        })
     
};
//extract currencies from process object
const enterCurrency = process.argv.slice(2);
console.log(enterCurrency);//[EUR, USD]

exchange(enterCurrency[0], enterCurrency[1], enterCurrency[2])



//не сделаны ошибки и возможность задавать курсы через консоль