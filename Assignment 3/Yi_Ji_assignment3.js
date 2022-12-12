function createElementHelper(type, className = "", textContent = "") {
  const ele = document.createElement(type);
  ele.className = className;
  ele.textContent = textContent;
  return ele;
}

const allElements = [];

const topic = createElementHelper("h1", "topic", "HW 3");
allElements.push(topic);

const myName = createElementHelper("h2", "topic", "Yi (Zoe) Ji");
allElements.push(myName);

/*

Question 1

Given the following array and implement the table dynamically

*/

const qustionOneTopic = createElementHelper(
  "h3",
  "question",
  "Question 1. Table with your styles"
);
allElements.push(qustionOneTopic);

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

function buildTableHeader(tableHeader) {
  const tr = document.createElement("tr");
  tr.id = "head";
  tableHeader.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    tr.appendChild(th);
  });
  return tr;
}

function buildTableData(tableInfo) {
  tableRows = [];
  tableInfo.tableContent.forEach((student) => {
    const tr = document.createElement("tr");
    tableRows.push(tr);
    tableInfo.tableHeader.forEach((header) => {
      const td = document.createElement("td");
      td.textContent = student[header];
      tr.appendChild(td);
    });
  });
  return tableRows;
}

function buildTable(tableInfo) {
  const myTable = document.createElement("table");
  const tableHeader = buildTableHeader(tableInfo.tableHeader);
  const tableData = buildTableData(tableInfo);
  myTable.append(tableHeader, ...tableData);
  return myTable;
}

const studentTable = buildTable(tableInfo);
allElements.push(studentTable);

/*
  
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  
  */
const qustionTwoTopic = createElementHelper(
  "h3",
  "question",
  "Question 2. Ordered and unordered list"
);
allElements.push(qustionTwoTopic);

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function createList(list, type, className) {
  div = document.createElement("div");
  text = `An ${className} technologies list`;
  div.appendChild(createElementHelper("h4", className, text));

  const myList = document.createElement(type);
  myList.className = className;
  div.appendChild(myList);
  list.forEach((ele) => {
    const li = document.createElement("li");
    li.textContent = ele;
    myList.appendChild(li);
  });
  return div;
}

const orderedList = createList(list, "ol", "ordered");
allElements.push(orderedList);

const unorderedList = createList(list, "ul", "unordered");
allElements.push(unorderedList);

/*
  
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  
  */
const qustionThreeTopic = createElementHelper(
  "h3",
  "question",
  "Question 3. Dropdown list"
);
allElements.push(qustionThreeTopic);

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
  dropDownList.forEach((ele) => {
    const option = document.createElement("option");
    option.value = ele.value;
    option.textContent = ele.content;
    select.appendChild(option);
  });
  return select;
}

const selectCity = createSelect(dropDownList);
allElements.push(selectCity);

document.body.append(...allElements);
