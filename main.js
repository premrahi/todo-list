const addbutton = document.querySelector("#addbtn");
const list = document.querySelector("#list");
// const taskname = document.forms["in-text"];
const taskvalue = document.querySelector("#add-task");


// console.log(taskvalue.value) ;  just for checking

addbutton.addEventListener("click", function (e) {
  if (taskvalue.value == "") {
    return
  } else {
    //creating list
    const li = document.createElement("li");
    li.classList.add("task-list");

    //creating checkbox
    const check = document.createElement("input");
    check.classList.add("task-checkbox");
    check.type = "checkbox";
    //checkbox functionality
    check.addEventListener("change", (e) => {
      if (e.target.checked) {
        li.classList.add("done");
        counter() ;
        storingTasks();
      } else {
        li.classList.remove("done");
        counter() ;
        storingTasks();
      }
    });

    //creating span which will store task_value
    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = taskvalue.value;

    //creating delete button
    const dltbtn = document.createElement("button");
    dltbtn.classList.add("task-delete-btn");
    dltbtn.textContent = "Delete";

    dltbtn.addEventListener("click", (e) => {
      li.remove();
      counter() ;
      storingTasks();
    });

    //appending everything
    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(dltbtn);
    list.appendChild(li);
    counter() ;
    storingTasks();

    taskvalue.value = "";
  }
});

// enter key logic 
// taskvalue.addEventListener("keydown", function (e) {
//     if (e.key === "Enter") {
//         addbutton.click();
//     }
// });

const totalTaskCount = document.querySelector('#totalcount');
const completedTaskCount = document.querySelector('#completedcount') ;

function counter() {
    const totalTask = document.querySelectorAll('.task-list').length ;
    const completedTask = document.querySelectorAll('.done').length ;

    totalTaskCount.textContent = totalTask ;
    completedTaskCount.textContent = completedTask ;
}


const clearCompleted = document.querySelector('#clearbtn') ;

clearCompleted.addEventListener('click' ,e =>{
    const completedtask = document.querySelectorAll('.done') ;

    Array.from(completedtask).forEach(e =>{
        e.remove();
    })

    counter() ;
    storingTasks() ;
})

function storingTasks(){
    const allTasks=[];
    const taskItem = document.querySelectorAll(".task-list");
    taskItem.forEach(function(element){
        const text = element.querySelector(".task-text").textContent;
        // const stateCompleted = element.classList.contains("completed");
        const completed = element.classList.contains("done");

        allTasks.push({text , completed});
    })

    localStorage.setItem("allTasks",JSON.stringify(allTasks));
}


