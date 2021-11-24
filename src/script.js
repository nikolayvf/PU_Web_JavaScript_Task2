let monthNumber = 1;

function tax() {
    let valueTaxElement = document.getElementsByClassName('valueTax')[0];
    let valueProfitElement = document.getElementsByClassName('valueProfit')[0];
    let taxButton = document.getElementsByClassName('tax btn')[0];
    let profitButton = document.getElementsByClassName('Profit btn')[0];

    taxButton.addEventListener('click', calculateTax);
    profitButton.addEventListener('click', calculateProfit);
    generateMonth.addEventListener('click', addMonth);
    
    let taxResult = 0;

    function calculateTax() {
        // let income = Number(incomeElement.value);
        // let secondIncome = Number(incomeSecondElement.value);
        // let expense = Number(expenseElement.value);
        // let secondExpense = Number(expenseSecondElement.value);
        // 
        // if (income == '' || secondIncome == '' || expense == '' || secondExpense == '') {
        //     return alert('All fields are required.');
        // }
        // if (income < 0 || secondIncome < 0 || expense < 0 || secondExpense < 0) {
        //     return alert('Values should be above zero.');
        // }
        // let taxResult = (income + secondIncome - expense - secondExpense) * 0.2;
        // valueTaxElement.textContent = taxResult + 'лв';
        taxResult = 0;
        for(let i = 1; i <= monthNumber; i++){

            let incomeId = 'income' + i;
            let expenseId = 'expense' + i;

            let income = document.getElementById(incomeId).value;
            let expense = document.getElementById(expenseId).value;


            if (income == '' || expense == '') {
                return alert('All fields are required.');
            }
            if (income < 0 || expense < 0) {
                return alert('Values should be above zero.');
            }

            taxResult += (income - expense) * 0.2

            
        }
        valueTaxElement.textContent = taxResult.toFixed(2) + 'лв';
    }
    function calculateProfit() {
        // let income = Number(incomeElement.value);
        // let secondIncome = Number(incomeSecondElement.value);
        // let expense = Number(expenseElement.value);
        // let secondExpense = Number(expenseSecondElement.value);
        // if (income == '' || secondIncome == '' || expense == '' || secondExpense == '') {
        //     return alert('All fields are required.');
        // }
        // if (income < 0 || secondIncome < 0 || expense < 0 || secondExpense < 0) {
        //     return alert('Values should be above zero.');
        // }
        // let taxResult = (income + secondIncome - expense - secondExpense) * 0.2;
        // let profitResult = (income + secondIncome - expense - secondExpense) - taxResult;
        // valueProfitElement.textContent = profitResult + 'лв';
        let profitResult = 0;
        for(let i = 1; i <= monthNumber; i++){
            let incomeId = 'income' + i;
            let expenseId = 'expense' + i;
            console.log('for ' + i);
            let income = document.getElementById(incomeId).value;
            let expense = document.getElementById(expenseId).value;

            if (income == '' || expense == '') {
                return alert('All fields are required.');
            }
            if (income < 0|| expense < 0) {
                return alert('Values should be above zero.');
            }

            profitResult += (income - expense);

        }
        profitResult = profitResult - taxResult;   
        valueProfitElement.textContent = profitResult.toFixed(2) + 'лв';
       
    }
}

function addMonth(){
    console.log('hi');
    monthNumber++;

    monthHtml = generateMonthHTML(monthNumber);

    document.getElementById('monthContainer').insertAdjacentHTML('beforeend', monthHtml)

}


function generateMonthHTML(monthNumber){

    let incomeId = 'income' + monthNumber;
    let expenseId = 'expense' + monthNumber
           let fullString = '     <div class="col-6">';
           fullString+= '<label for="income">Приход месец №' + monthNumber + '</label>';
           fullString+= ' <input type="number" id="'+ incomeId + '" name="income" class="form-control" min="0" placeholder="0 лв" required>';
          fullString+=  ' </div>';
          fullString+=  ' <div class="col-6">';
          fullString+=  ' <label for="expense' + monthNumber + '">Разход месец №' + monthNumber + '</label>';
          fullString+=  '  <input type="number" id="' + expenseId + '" name="expense" class="form-control" min="0" placeholder="0 лв" required>';
          fullString+=  '</div>';

  return fullString;
}

