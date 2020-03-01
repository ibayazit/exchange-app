class Currency{
    constructor(firstCurrency, secondCurrency){
        this.firstCurrency = firstCurrency
        this.secondCurrency = secondCurrency
        this.url = 'https://api.exchangeratesapi.io/latest?base='
        this.amount = null
    }

    exchange(){
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)
            .then(res => res.json())
            .then(res => {
                resolve(res.rates[this.secondCurrency] * Number(this.amount))
            })
            .catch(err => reject(err))
        })
    }

    changeAmount(newAmount){
        this.amount = newAmount
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency
    }
}