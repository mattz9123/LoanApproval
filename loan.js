$(document).ready(function(){
    $("button").on("click", approveLoan);
    $("form").on("submit", calculation);
})

function calculation(event){
    event.preventDefault();
}

function approveLoan(){
    let numSalary = $("input[name=salary]").val();
    let numCreditScore = $("input[name=creditScore]").val();
    let numMonthsAtJob = $("input[name=monthsAtJob]").val();

    numSalary = parseInt(numSalary);
    numCreditScore = parseInt(numCreditScore);
    numMonthsAtJob = parseInt(numMonthsAtJob);



    if (numSalary >= 40000) {
        if (numCreditScore >= 600) {
            $("p#approval").text(`Loan approved!`);
        } else {
            if (numMonthsAtJob > 12) {
                $("p#approval").text(`Loan approved!`);
            } else if (numMonthsAtJob < 0) {
                $("p#approval").text(`Months at job cannot be negative`)
            } else {
                $("p#approval").text(`Loan denied`);
            }
        }
    }
    else if (numSalary < 0) {
        $("p#approval").text(`Salary cannot be negative`)
    }
    else {
        if (numCreditScore >= 600) {
            if (numMonthsAtJob > 12) {
                $("p#approval").text(`Loan approved!`);
            } else if (numMonthsAtJob < 0) {
                $("p#approval").text(`Months at job cannot be negative`);
            } else {
                $("p#approval").text(`Loan denied`)
            }
        } else {
            $("p#approval").text(`Loan denied`);
        }
    }
}




































