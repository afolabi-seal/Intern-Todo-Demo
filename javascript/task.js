import { renderListItem } from "./taskItemUi.js";

const taskList = [
  {
    id: 0,
    category: "home",
    taskItem: "go to the market",
    startTime: "00.00",
    endTime: "09.00",
    date: "2024-09-27",
    isCompleted: false,
  },
  {
    id: 1,
    category: "completed",
    taskItem: "Build a portfolio website",
    startTime: "21.00",
    endTime: "22.00",
    date: "2024-09-25",
    isCompleted: true,
  },
  {
    id: 3,
    category: "personal",
    taskItem: "Read a book about javascript",
    startTime: "18.00",
    endTime: "22.00",
    date: "2024-09-28",
    isCompleted: false,
  },
  {
    id: 4,
    category: "home",
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
    id: 7,
    category: "personal",
    taskItem: "Be a good samaritan",
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
    id: 7,
    category: "personal",
    taskItem: "Be a good samaritan",
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
    id: 7,
    category: "personal",
    taskItem: "Be a good samaritan",
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
    id: 7,
    category: "personal",
    taskItem: "Be a good samaritan",
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
    id: 7,
    category: "personal",
    taskItem: "Be a good samaritan",
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
    renderListItem(taskList);
  }
  getCompletedTask() {
    renderListItem(completed);
  }
  getPersonalTask() {
    renderListItem(personal);
  }
  getWorkTask() {
    renderListItem(work);
  }
  getListOfBookTasks() {
    renderListItem(listOfBooks);
  }
  getDietTask() {
    renderListItem(diet);
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
