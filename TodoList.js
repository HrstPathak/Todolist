let completion = document.getElementById("completion");
let Embedded_task = document.getElementById("Embedded_task");
let TaskInputBox = document.getElementById("TaskInputBox");
display();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function AddTask(e) {
  let time = new Date();
  date = time.getDate();
  month = time.getMonth();
  hours = time.getHours();
  meridieum = "AM";
  minute = time.getMinutes();
  if (hours > 13) {
    hours = hours - 12;
    meridieum = "PM";
  }
  if (TaskInputBox.value != "") {
    let items = localStorage.getItem("AddedTask");
    if (items == null) {
      TaskObj = [];
    } else {
      TaskObj = JSON.parse(items);
    }
    let Taskfile = {
      Task: TaskInputBox.value,
      DayMonth: `${date} ${months[month]}`,
      TimeStamp: `${hours}:${minute}${meridieum}`,
    };
    TaskObj.push(Taskfile);
    localStorage.setItem("AddedTask", JSON.stringify(TaskObj));
    display();
    TaskInputBox.value = "";
  } else {
    alert("Please enter Your Task...");
  }
}
function display() {
  Embedded_task.classList.remove("Embedded_task");
  let TaskInputBox = document.getElementById("TaskInputBox");

  let items = localStorage.getItem("AddedTask");
  if (items == null) {
    TaskObj = [];
  } else {
    TaskObj = JSON.parse(items);
  }
  let html = "";
  TaskObj.forEach((element, index) => {
    html += `<li>
            <div class="tasktable">
            <div class="inner_tasktable">
                    <div>
                <label  class="checkmark_container" onclick="checkbox(${index})">
                <input id="Check_Box" type="checkbox" name="checkbox" value="${element.Task}">
                <span class="checkmark"></span>
                </label></div>
            </div>
            <div class="content" id="${index}" onclick="Edit()">${element.Task}</div>
        
            <div>
                <div class="time">${element.DayMonth}</div>
                <button class="editbutton" onclick="Edit(${index})"><i class="far fa-edit"></i></button>
                <button class="deletebutton" onclick="DeleteButton(${index})"><i class="fas fa-trash"></i></button>
                <div class="time">${element.TimeStamp}</div>
                
                </div>
            </div>
</li>`;
  });
  Embedded_task.innerHTML = html;

  if (Embedded_task.innerText == "") {
    setInterval(function () {
      if (j < 19) {
        Embedded_task.classList.add("Embedded_task");
        Embedded_task.innerText += Absent[j];
        j++;
      }
    }, 50);
  }
}
function Edit(index) {
  let TaskInputBox = document.getElementById("TaskInputBox");
  let items = localStorage.getItem("AddedTask");
  if (items == null) {
    TaskObj = [];
  } else {
    TaskObj = JSON.parse(items);
  }
  TaskInputBox.value = TaskObj[index].Task;
  TaskObj.splice(index, 1);
  localStorage.setItem("AddedTask", JSON.stringify(TaskObj));
  display();
}
function DeleteButton(index) {
  let items = localStorage.getItem("AddedTask");
  if (items == null) {
    TaskObj = [];
  } else {
    TaskObj = JSON.parse(items);
  }
  TaskObj.splice(index, 1);
  localStorage.setItem("AddedTask", JSON.stringify(TaskObj));
  display();
}
function checkbox(index, element) {
  let Check_Box = document.querySelectorAll('input[name="checkbox"]');
  let content = document.getElementById(index);

  let items = localStorage.getItem("AddedTask");
  if (items == null) {
    TaskObj = [];
  } else {
    TaskObj = JSON.parse(items);
  }
  if (Check_Box[index].checked == true) {
    content.style.textDecoration = "line-through";
    completion.innerText = "HURRAY!!!...TASK COMPLETED";
    setInterval(function () {
      if (Check_Box[index].checked == true) {
        TaskObj.splice(index, 1);
        localStorage.setItem("AddedTask", JSON.stringify(TaskObj));
      }
    }, 4000);
    setInterval(function () {
      display();
      completion.innerText = " ";
    }, 4000);
    setTimeout(function () {
      Check_Box[index].checked = false;
    }, 4000);
  } else {
    content.style.textDecoration = "none";
    completion.innerText = " ";
  }
}
i = 0;
j = 0;
const Absent = [
  "T",
  "h",
  "e",
  "r",
  "e ",
  " is ",
  " N",
  "o",
  "t",
  "h",
  "i",
  "n",
  "g ",
  " y",
  "e",
  "t",
  ".",
  ".",
  ".",
];
const letter = ["T", "O", "D", "O", "'", "s", "  ", "L", "I", "S", "T"];

let heading = document.getElementById("heading");
setInterval(function () {
  if (i < 11) {
    heading.innerHTML += letter[i];
    i++;
  }
}, 200);
