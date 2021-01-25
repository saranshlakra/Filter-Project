"use strict";
// Please check read me for example data.
let marraigeData = prompt("Add all the data here").split(
  prompt("Add your spliter") // here you can add anything that seperates your data
); // copy paste any data seperated by # (Example in readme)
let filterData = []; // data filtered based on community or any preference
let birthYear = []; // data filteration on years range basis
let gender = prompt("Male or Female");
if (gender == "Male") {
  gender = "Female";
} else if (gender == "Female") {
  gender = "Male";
} // this is because some time people forgot to write male or female in their data.
range(
  parseInt(prompt("Minimum Year of birth")),
  prompt("Maximum Year of birth")
);

function range(start, end) {
  for (let i = start; i <= end; i++) {
    birthYear.push(i);
  }
}
for (let i = 0; i <= marraigeData.length - 1; i++) {
  for (let j = 0; j <= birthYear.length - 1; j++) {
    let community =
      !marraigeData[i].includes("caste1") &&
      !marraigeData[i].includes("caste2") &&
      !marraigeData[i].includes("caste3") &&
      !marraigeData[i].includes(gender); // gender filter and data filteration on years (range basis)

    if (marraigeData[i].includes(birthYear[j]) && community) {
      let c = `Match ${marraigeData.indexOf(marraigeData[i])}`;
      filterData.push("\n" + c + marraigeData[i]);
    }
  }
}
if (filterData.length === 0) {
  console.log("No match found");
} else {
  console.log(filterData.length, " Correct Match for you " + "\n" + filterData);
}
alert(
  "You have choosen " + birthYear.length + " birth years" + "\n" + birthYear
);

console.log(gender);
