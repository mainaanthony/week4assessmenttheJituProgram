
  

  ///week 9 test assessment

  
  //question one
function setCallBackInvokeAfter2seconds(callback){

setTimeout(callback, 2000)

}

function callbackToBeCalled(){
   console.log("Call this")

}

setCallBackInvokeAfter2seconds(callbackToBeCalled)

//question two


  class Employee {
    constructor(name , salary) {
      this.name = name;
      this.salary = salary;
     }
  


     calculateSalary(){
           
      let annualSalary = (this.salary  * 12)

     console.log(` ${this.name} is to be paid ${annualSalary}`)

     }
    
  }
  
  // Creating an instance of the Employee 
  const myEmployee = new Employee("Anthony Maina", 1000);
  
  calculate_sum_of_numbers(salary)


  class Manager extends Employee{
     constructor(name, salary, department){
      super(name, salary)
      this.department = department

     }

     calculateAnnualSalary(bonus){
       const originalSalary = super.calculateSalary()

       managerAnnualSalary = (bonus * originalSalary) + originalSalary
       
    return managerAnnualSalary

     }
    


  }

  //creating instances of the managers

const manager1 = new Manager("Carlos Gambino", 5000, "Quality Assurance")
const annualSalary1 = manager1.calculateAnnualSalary(0.2)


console.log(`${manager1.name} in the ${manager1.department} is paid an Annual salary of ${annualSalary1}`)

const manager2 = new Manager("Macy price", 5000, "Human Resource")
const annualSalary2 = manager2.calculateAnnualSalary(0.2)

console.log(`${manager2.name} in the ${manager2.department} is paid an Annual salary of ${annualSalary2}`)


  //question three

function year_range_to_calculate_from(start_year, end_year){

  let year_range = []

  for (let i = start_year; i<= end_year; i++){

        year_range.push(i)
  }

  let the_new_array = []

  year_range.forEach(
    function(year){
    if(look_for_Leap_year(year)){

      the_new_array.push(year)
    }


    });
    return the_new_array


}

function look_for_Leap_year(year){
  if((year % 4 === 0 && year % 100 !==0 ) || (year % 100 === 0 && year % 400 === 0)){
    return year;
  }else{
    return false
  }
}


console.log(year_range_to_calculate_from(2001, 2023))



//question four
function calculate_sum_of_numbers(array_of_mixed_data_types){
   let total = 0;


   for (let i=0; i<= array_of_mixed_data_types.length; i++){
       if (typeof array_of_mixed_data_types[i] === "number"){
          total += array_of_mixed_data_types[i];

       }
   }
   return total
}

array_of_mixed_data_types = [2, "11", 3, "a2", false, 5, 7, 1]
console.log(`Original array: ${array_of_mixed_data_types}`)
console.log(`Sum of all the numbers of the said array: ${calculate_sum_of_numbers(array_of_mixed_data_types)}`)





