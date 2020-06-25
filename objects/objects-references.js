let myAccount = {
  name: "Andrew Mead",
  expenses: 0,
  income: 0,
}

// let otherAccount = myAccount
// otherAccount.income = 1000
// otherAccount = {}

function addExpense(account, amount) {
  //   account = {} // can not do like this to clear the objects
  account.expenses = account.expenses + amount
  //   console.log(account)
}

// addIncome

// resetAccount

//getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses

// addExpenses(myAccount, 50)
// console.log(myAccount)

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

function addIncome(account, amount) {
  account.income = account.income + amount
}

function getAccountSummary(account) {
  console.log(
    `Account for ${account.name} has $${account.income - account.expenses}. $${
      account.income
    } in income. $${account.expenses} in expenses`
  )
}

function resetAccount(account) {
  account.income = 0
  account.expenses = 0
}

addIncome(myAccount, 10)
addExpense(myAccount, 50)
addExpense(myAccount, 50)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
