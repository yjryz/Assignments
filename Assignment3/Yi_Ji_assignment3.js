function insertMyElement(type, className, textContent) {
  const ele = document.createElement(type);
  ele.className = className;
  ele.textContent = textContent;
  document.body.appendChild(ele);
}

insertMyElement("h1", "topic", "HW 3");
insertMyElement("h2", "topic", "Yi (Zoe) Ji");

/*

Question 1

Given the following array and implement the table dynamically

*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

function buildTableHeader(tableHeader, table) {
  let tr = document.createElement("tr");
  tr.id = "head";
  table.appendChild(tr);
  tableHeader.forEach((header) => {
    let th = document.createElement("th");
    th.textContent = header;
    tr.appendChild(th);
  });
}

function buildTableData(tableInfo, table) {
  tableInfo.tableContent.forEach((student) => {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    tableInfo.tableHeader.forEach((header) => {
      let td = document.createElement("td");
      td.textContent = student[header];
      tr.appendChild(td);
    });
  });
}

function buildTable(tableInfo) {
  const myTable = document.createElement("table");
  document.body.appendChild(myTable);
  buildTableHeader(tableInfo.tableHeader, myTable);
  buildTableData(tableInfo, myTable);
}

insertMyElement("h3", "question", "Question 1. Table with your styles");
buildTable(tableInfo);

/*
  
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function createList(list, type, className) {
  text = `An ${className} technologies list`;
  insertMyElement("h4", className, text);

  const myList = document.createElement(type);
  myList.className = className;
  document.body.appendChild(myList);
  list.forEach((ele) => {
    let li = document.createElement("li");
    li.textContent = ele;
    myList.appendChild(li);
  });
}

insertMyElement("h3", "question", "Question 2. Ordered and unordered list");
createList(list, "ol", "ordered");
createList(list, "ul", "unordered");

/*
  
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  
  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

function createSelect(dropDownList) {
  const select = document.createElement("select");
  document.body.appendChild(select);
  dropDownList.forEach((ele) => {
    let option = document.createElement("option");
    option.value = ele.value;
    option.textContent = ele.content;
    console.log(option);
    select.appendChild(option);
  });
}

insertMyElement("h3", "question", "Question 3. Dropdown list");
createSelect(dropDownList);
