//getting all required elements
const inputField = document.querySelector(".input-field textarea"),
todoList = document.querySelector(".todoList"),
pendingNum = document.querySelector(".pending-num"),
clear = document.querySelector(".clear");

//we will call this function while adding, deletting and checking-unchecking the task
function allTasks(){
    let tasks = document.querySelectorAll(".pending");
    //if tasks' length is 0 then pending num text content will be no, if not then pending num value will be 
    pendingNum.textContent = tasks.length === 0? "no" : tasks.length;

    let allList = document.querySelectorAll(".list");
    if(allList.length > 0){
        todoList.style.marginTop = "20px" ;
        clear.style.pointerEvents = "auto";
        return;
    }
    todoList.style.marginTop = "0px" ;
    clear.style.pointerEvents = "none";
}

//add task while we put value in text area and press enter
inputField.addEventListener("keyup", (e) => {
    let inputVal= inputField.value.trim(); //trim function removes space of front and back of the input value
    
    //if enter button is clicked and inputed value length is grated than 0;
    if(e.key ==="Enter" && inputVal.length > 0){
       let liTag =  ` <li class="list pending" onclick="handleStatus(this)">
                <input type="checkbox"/>
                <span class="task">${inputVal}</span>
                <i class="fa-solid fa-trash-can" onclick="deleteTask(this)"></i>
                </li>`;

                todoList.insertAdjacentHTML("beforeend", liTag);//inserting li tag inside the todolist div
                inputField.value = ""; //removing value from input field
                allTasks();
    }
})
//checking and unchecking the checkbox whilw we clik on the task
function handleStatus(e){
    const checkbox = e.querySelector("input"); //getting checkbox
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}
//deleting task while we click on the delete icon
 function deleteTask(e){
    e.parentElement.remove ();//geting parent element and remove it
    allTasks();
 }

//deleting all the tasks while we click on the clear button
clear.addEventListener("click", () => {
    todoList.innerHTML = "" ;
    allTasks();
})