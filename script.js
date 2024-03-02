let expenseCount = 1;

function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.classList.add('active-tab');
        } else {
            tab.classList.remove('active-tab');
        }
    });
}

function toggleInterestType() {
    const checkbox = document.getElementById('calculationType');
    const label = document.querySelector('label[for="calculationType"]');
    label.innerText = checkbox.checked ? 'Compound Interest' : 'Simple Interest';
}

function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const isCompoundInterest = document.getElementById('calculationType').checked;

    let interest;
    if (isCompoundInterest) {
        interest = principal * Math.pow((1 + rate / 100), time) - principal;
    } else {
        interest = (principal * rate * time) / 100;
    }

    document.getElementById('interestResult').innerText = `Interest: $${interest.toFixed(2)}`;
}

function addExpenseInput() {
    expenseCount++;
    const container = document.getElementById('expenseInputs');
    const newInput = document.createElement('div');
    newInput.innerHTML = `
        <label for="expense${expenseCount}">Expense ${expenseCount}:</label>
        <input type="number" class="expense-input" id="expense${expenseCount}">
    `;
    container.appendChild(newInput);
}

function calculateExpenses() {
    let totalExpenses = 0;
    for (let i = 1; i <= expenseCount; i++) {
        const expenseValue = parseFloat(document.getElementById(`expense${i}`).value);
        if (!isNaN(expenseValue)) {
            totalExpenses += expenseValue;
        }
    }
    document.getElementById('expensesResult').innerText = `Total Expenses: $${totalExpenses.toFixed(2)}`;
}

// Currency Converter functions
function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const fromAmount = parseFloat(document.getElementById('fromAmount').value);
    const toAmount = fromAmount * getExchangeRate(fromCurrency, toCurrency);
    document.getElementById('toAmount').value = toAmount.toFixed(2);
}

function getExchangeRate(fromCurrency, toCurrency) {
    return fromCurrency === toCurrency ? 1 : 0.85; // Replace with actual exchange rates
}

// Appreciation/Depreciation calculator function
function calculateAppreciationDepreciation() {
    const initialValue = parseFloat(document.getElementById('initialValue').value);
    const finalValue = parseFloat(document.getElementById('finalValue').value);
    const change = finalValue - initialValue;
    const percentChange = (change / initialValue) * 100;

    if (percentChange > 0) {
        document.getElementById('appreciationDepreciationResult').innerText = `Appreciation: $${change.toFixed(2)} (${percentChange.toFixed(2)}%)`;
    } else if (percentChange < 0) {
        document.getElementById('appreciationDepreciationResult').innerText = `Depreciation: $${Math.abs(change).toFixed(2)} (${Math.abs(percentChange).toFixed(2)}%)`;
    } else {
        document.getElementById('appreciationDepreciationResult').innerText = `No change`;
    }
}

// Tax Planning calculator function
function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    const taxableIncome = income - deductions;
    const taxAmount = (taxableIncome * taxRate) / 100;
    document.getElementById('taxResult').innerText = `Tax Owed: $${taxAmount.toFixed(2)}`;
}