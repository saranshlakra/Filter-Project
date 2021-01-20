"use strict";
// Please check read me for example data.
let marraigeData = prompt("Add all the data here").split("#"); // copy paste any data seperated by # (Example in readme)
let filterData = []; // data filtered based on community or any preference
let birthYear = []; // data filteration on years range basis
let gender = prompt("Male or Female");
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
      !marraigeData[i].includes("Community1") &&
      !marraigeData[i].includes("Community2") &&
      !marraigeData[i].includes("Community3") &&
      marraigeData[i].includes(gender); // gender filter and data filteration on years (range basis)

    if (marraigeData[i].includes(birthYear[j]) && community) {
      let c = `Match ${marraigeData.indexOf(marraigeData[i])}`;
      filterData = filterData + ("\n" + c + marraigeData[i]);
    }
  }
}
if (filterData.length === 0) {
  console.log("No match found");
} else {
  console.log("Correct Match for you " + "\n" + filterData);
}
alert(
  "You have choosen " + birthYear.length + " birth years" + "\n" + birthYear
);
console.log(gender);
