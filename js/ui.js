class UI{
    constructor(firstSelect, secondSelect){
        this.firstSelect = firstSelect
        this.secondSelect = secondSelect

        this.outputFirst = document.getElementById('outputFirst')
        this.outputSecond = document.getElementById('outputSecond')
        this.outputResult = document.getElementById('outputResult')
    }

    changeFirst(){
        this.outputFirst.textContent = this.firstSelect.value
    }

    changeSecond(){
        this.outputSecond.textContent = this.secondSelect.value
    }

    displayResult(result){
        this.outputResult.value = result
    }
}