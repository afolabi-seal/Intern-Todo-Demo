import {
  completed,
  listOfBooks,
  diet,
  personal,
  work,
  getHomeTask,
  getCompletedTask,
  getPersonalTask,
  getWorkTask,
  getDietTask,
  getListOfBookTasks,
  allTaskList
} from "./javascript/task.js";
import {renderListItem} from './javascript/taskItemUi.js'

const homeUICounter = document.querySelector("#home-counter");
const completedUICounter = document.querySelector("#completed-counter");
const personalUICounter = document.querySelector("#personal-counter");
const workUICounter = document.querySelector("#work-counter");
const dietUICounter = document.querySelector("#diet-counter");
const listOfBooksUICounter = document.querySelector("#list-of-book-counter");

const homeBtn = document.querySelector("#home-btn");
const completedBtn = document.querySelector("#completed-btn");
const personalBtn = document.querySelector("#personal-btn");
const workBtn = document.querySelector("#work-btn");
const dietBtn = document.querySelector("#diet-btn");
const listOfBooksBtn = document.querySelector("#list-of-book-btn");

homeBtn.addEventListener("click",(e)=>{
    // if(!homeBtn.classList.contains('active')){
    //     homeBtn.classList.add('active');
    // }
    getHomeTask()
});
completedBtn.addEventListener("click",(e)=>{
    // if(!completedBtn.classList.contains('active')){
    //     completedBtn.classList.add('active');
    // }
    getCompletedTask()
});
personalBtn.addEventListener("click",getPersonalTask);
workBtn.addEventListener("click",getWorkTask);
dietBtn.addEventListener("click", getDietTask);
listOfBooksBtn.addEventListener("click", getListOfBookTasks);
// console.log(allTaskList)
renderListItem(allTaskList)
document.addEventListener("DOMContentLoaded", () => {
    homeUICounter.setAttribute(
    "style",
    `display : ${allTaskList.length > 0 ? "block" : "none"}`
  );
//   homeBtn.classList.add('active')
  completedUICounter.setAttribute(
    "style",
    `display : ${completed.length > 0 ? "block" : "none"}`
  );
  personalUICounter.setAttribute(
    "style",
    `display : ${personal.length > 0 ? "block" : "none"}`
  );
  workUICounter.setAttribute(
    "style",
    `display : ${work.length > 0 ? "block" : "none"}`
  );
  dietUICounter.setAttribute(
    "style",
    `display : ${diet.length > 0 ? "block" : "none"}`
  );
  listOfBooksUICounter.setAttribute(
    "style",
    `display : ${listOfBooks.length > 0 ? "block" : "none"}`
  );

  homeUICounter.textContent = allTaskList.length > 0 ? allTaskList.length : 0;
  completedUICounter.textContent = completed.length > 0 ? completed.length : 0;
  personalUICounter.textContent = personal.length > 0 ? personal.length : 0;
  workUICounter.textContent = work.length > 0 ? work.length : 0;
  dietUICounter.textContent = diet.length > 0 ? diet.length : 0;
  listOfBooksUICounter.textContent =
    listOfBooks.length > 0 ? listOfBooks.length : 0;
});
