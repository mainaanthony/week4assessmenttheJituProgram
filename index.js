// const balance = document.querySelector("#balance");
// const inc_amt = document.querySelector("#inc-amt");
// const exp_amt = document.querySelector("#exp-amt");
// const trans = document.querySelector("#trans");
// const form = document.querySelector("#form");
// const description = document.querySelector("#desc");
// const amount = document.querySelector("#amount")


// const listings = document.querySelector('.trans')


// const list = (transaction)=>{


// const sign = transaction.amount < 0 ? "-" : "+"    
// const item = document.createElement('li')
// item.classList.add(transaction.amount < 0 ?  "exp" : "inc")
// item.innerHTML =  `${transaction.description} <span> ${sign} ${Math.abs(transaction.amount)} </span>
//  <button class="btn-del" onclick="removeTrans(${transaction.id})"> del</button>`
 
 
//  trans.appendChild(item)
//  console.log(transaction)
// }


// const localStorageTrans = JSON.parse(localStorage.getItem("trans"));
// let transactions = localStorage.getItem("trans") !== null ? localStorageTrans : [];




// function addTransaction(e){
//   e.preventDefault();
//   if(description.value.trim() == "" || amount.value.trim() == ""){
//     alert("Please enter a description and amount")

//   }else{
//     const transaction = {
//         id : uniqueId(),
//         description: description.value,
//         amount: +amount.value
//     };
//     transactions.unshift(transaction)
//     list (transaction)
//     description.value = "";
//     amount.value = "";
//     updateLocalStorage()
    

//   }
// }


// function removeTrans(id) {
//   if (confirm("Are you sure you want to delete this Transaction?")) {
//     transactions = transactions.filter((transaction) => transaction.id != id);
//     config();
//     updateLocalStorage();
//   } else {
//     return;
//   }
// }

// form.addEventListener("submit" , addTransaction)



// function uniqueId(){
//     return Math.floor(Math.random()  * 100000)

// }





// function updateLocalStorage() {
//   localStorage.setItem("trans", JSON.stringify(transactions));
// }


// function config() {
//   trans.innerHTML = "";
//   transactions.forEach(list);
 
// }



class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
    } else {
      console.log(`Insufficient funds in account ${this.accountNumber}. Current balance: ${this.balance}`);
    }
  }

  getAccountNo() {
    console.log(`Account Information:
      Account Number: ${this.accountNumber}
      Account Holder: ${this.accountHolder}
      Balance: ${this.balance}`);
  }
}

// Creating an instance of the BankAccount class
const myAccount = new BankAccount("20000", "Anthony Maina", 1000);

// Accessing the properties in the Bank Account
console.log(myAccount.accountNumber);  
console.log(myAccount.accountHolder);  
console.log(myAccount.balance);        

// Calling methods in the Bank Account
myAccount.deposit(500);                
myAccount.withdraw(200);
myAccount.getAccountNo();


class SavingsAccount extends BankAccount{

constructor(accountNumber, accountHolder, balance, interestRate){
   super(accountNumber, accountHolder, balance)
   this.interestRate = interestRate;

}


calculateInterest(){
      const interest = (this.balance *this.interestRate)/ 100;
      console.log(`The interest rate for your account is ${interest} `)

}


}


const theSpecifiedAccountSavings = new SavingsAccount("10000", "John Mwaniki", 7000, 5)

theSpecifiedAccountSavings.deposit(500);                
theSpecifiedAccountSavings.withdraw(200);
theSpecifiedAccountSavings.getAccountNo();



class checkingAccount extends BankAccount{

  constructor(accountNumber, accountHolder, balance, overdraft){
    //we use the superClass to ensure that we get the inherited properties
     super(accountNumber, accountHolder, balance)
     
     this.overdraft = overdraft;
  
  }
  
  
  withdrawOverdraft(amount) {

    const overdraftAdd = (this.balance - amount)>= -this.overdraft
    if (this.balance >= amount || overdraftAdd) {
      this.balance -= amount;
      console.log (`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
    } else {
      console.log (`Insufficient funds in account ${this.accountNumber}. Current balance: ${this.balance}`);
    }
   
    console.log(`Withdrawn amount${amount}`)
  
  }
  
  
  }
  
  
  const theCheckingAccounts = new checkingAccount("10000", "John Mwaniki", 7000, 200)
  


  theCheckingAccounts.withdrawOverdraft(500)
  theCheckingAccounts.deposit(5000)
  theCheckingAccounts.getAccountNo()


  
  
  
  





