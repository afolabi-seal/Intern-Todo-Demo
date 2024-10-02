import { renderListItem } from "./taskItemUi.js";

const taskList = [
  {
    id: 0,
    category: "personal",
    taskItem: "go to the market",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 1,
    category: "list of books",
    taskItem: "Build a portfolio website",
    startTime: "21.00",
    endTime: "22.00",
    date: "2024-09-25",
    isCompleted: false,
  },
  {
    id: 3,
    category: "diet",
    taskItem: "Read a book about javascript",
    startTime: "18.00",
    endTime: "22.00",
    date: "2024-09-28",
    isCompleted: false,
  },
  {
    id: 4,
    category: "work",
    taskItem: "Clean the living room",
    startTime: "09.00",
    endTime: "14.00",
    date: "2024-09-24",
    isCompleted: false,
  },
  {
    id: 2,
    category: "work",
    taskItem: "Teach javascript",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 7,
    category: "personal",
    taskItem: "Be a good samaritan",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 45,
    category: "diet",
    taskItem: "Be a good samaritan",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 56,
    category: "personal",
    taskItem: "Be a good samaritan",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 57,
    category: "personal",
    taskItem: "Be a good samaritan",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 68,
    category: "personal",
    taskItem: "Be a good samaritan",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 97,
    category: "list of books",
    taskItem: "Be a good samaritan",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 100,
    category: "work",
    taskItem: "Be a good samaritan",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 70,
    category: "diet",
    taskItem: "Be a good samaritan",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 71,
    category: "work",
    taskItem: "Be a good samaritan",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 72,
    category: "list of books",
    taskItem: "Be a good samaritan",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 73,
    category: "personal",
    taskItem: "Be a good samaritan",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
];

const completed = taskList.filter((item) => item.isCompleted);
const personal = taskList.filter((item) => item.category === "personal");
const work = taskList.filter((item) => item.category === "work");
const diet = taskList.filter((item) => item.category === "diet");
const listOfBooks = taskList.filter(
  (item) => item.category === "list of books"
);

class TaskList {
  constructor(taskList) {
    this.taskList = taskList;
  }

  getHomeTask() {
    renderListItem(taskList.filter(item => !item.isCompleted));
  }
  getCompletedTask() {
    renderListItem(completed.filter(item => item.isCompleted));
  }
  getPersonalTask() {
    renderListItem(personal.filter(item => !item.isCompleted));
  }
  getWorkTask() {
    renderListItem(work.filter(item => !item.isCompleted));
  }
  getListOfBookTasks() {
    renderListItem(listOfBooks.filter(item => !item.isCompleted));
  }
  getDietTask() {
    renderListItem(diet.filter(item => !item.isCompleted));
  }
}

export const {
  getCompletedTask,
  getHomeTask,
  getListOfBookTasks,
  getPersonalTask,
  getWorkTask,
  getDietTask,
  taskList: allTaskList,
} = new TaskList(taskList);

export { completed, personal, work, diet, listOfBooks };
