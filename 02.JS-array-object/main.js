let numbers = [12, 7, 3, 9, 6, 15, 8];

//#Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.
// let square= numbers.map(num=> num*num)
// console.log(square);

//#Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin.
// let min= Math.min(...numbers)
// let max= Math.max(...numbers)
// let minIndex=numbers.indexOf(min)
// let maxIndex=numbers.indexOf(max)
// numbers[minIndex]=max
// numbers[maxIndex]=min
// console.log(numbers);
//#Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.

// let min = numbers[0];
// let minIndex=0;
// for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i]<min) {
//     min=numbers[i]
//     minIndex=i
//    }

// }
// console.log(minIndex);

const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

// #ortalama maaşı 65000-dən çox olan departamentləri çapa verən program tərtib edin.

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].salary > 65000) {
//     console.log(employees[i]);
//   }
// }
//#ortalama maaşı 65000-dən çox olan və departamenti "IT" olanları çapa verən program tərtib edin.

// for (let i = 0; i < employees.length; i++) {
//   if ( employees[i].salary>65000 && employees[i].department === "IT") {
//     console.log(employees[i]);
//   }
// }

//#sadecə department "HR" olanları yeni array'a yığıb, həmin arrayı console edin

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].department==="HR") {
//     console.log(employees[i]);
//   }

// }

//--------------------------------------------------------------------------------------------------------------------------------

//BONUS-------------------------------------------------------

let countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
];

//# Ölkələrin neçə hərfdən ibarət olduğunu çap edən proqram yazırsınız. Cavab konsolda bu şəkildə olmalıdır:
//Məsələn:
//Afghanistan - 11
//Albania - 7
//Algeria -7
//Andorra -7
//və s.

// for (let i = 0; i< countries.length; i++) {
//   console.log( `${countries[i]} ${countries[i].length}`);

// }

//#Baş hərfi ilə son hərfi A olan  ölkələrin adını çap edən proqram yazırsınız.

// let letterA=[]
// for (let i = 0; i < countries.length; i++) {
// if (countries[i].toLocaleLowerCase()[0]=== "a" && countries[i].toLocaleLowerCase()[countries[i].length-1]=== "a" ) {
//   letterA.push(countries[i]);
// }

// }
// console.log(letterA);
let samplaNews = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ut nemo veniam
nihil error in, minima consectetur perspiciatis consequatur deserunt.
`;
let number = 0;
for (let i = 0; i < samplaNews.length; i++) {
  if (samplaNews[i] === " ") {
    number++;
  }
}
console.log(number);
