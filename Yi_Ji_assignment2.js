/*

Question 1

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
const itemsObjectDoubled = itemsObject.map((item) => ({
  quantity: item.quantity * 2,
  price: item.price * 2,
}));

console.log(
  "**** Q1.1 Double the quantity and price ****\n",
  itemsObjectDoubled,
  "\n"
);

// Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
const itemsObjectFiltered = itemsObject.filter(
  (item) => item.quantity > 2 && item.price > 300
);

console.log(
  "**** Q1.2 Show quantity > 2 and price > 300 only ****\n",
  itemsObjectFiltered,
  "\n"
);

// Given the array, implement a function to calculate the total value of the items.
const itemsObjectTotalValue = itemsObject.reduce((total, element) => {
  return (total += element.price);
}, 0);

console.log(
  "**** Q1.3 Calculate total value ****\n",
  itemsObjectTotalValue,
  "\n"
);

/*
  
  Question 2
  
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
  
  */

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const stringLowerLetterOnly = string.toLowerCase().replace(/\s+|[^a-z]/g, " ");
// `\s+` matches multiple whitespace; `[^a-z]` matches all the non-alphabet character; `g` apply globally, not first occcurance.

console.log(
  "**** Q2 Remove non-alphabet characters in string ****\n",
  stringLowerLetterOnly,
  "\n"
);

/*
  
  Question 3
  
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
  
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

let mergedArray = second.map((ele) => ({
  uuid: ele.uuid,
  role: ele.role,
  name: null
}));

first.forEach((ele) => {
  const cur_id = ele.uuid;
  const cur_name = ele.name;
  const existed_ele = mergedArray.find((ele) => ele.uuid === cur_id);
  if (existed_ele) {
    existed_ele.name = cur_name;
  } else {
    mergedArray.push({ uuid: cur_id, role: null, name: cur_name });
  }
});

mergedArray.sort((a, b) => a.uuid - b.uuid);

console.log("**** Q3 Merge two arrays ****\n", mergedArray, "\n");
