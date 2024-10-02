import { allTaskList } from "./task.js";
class RenderListItemUI {
  constructor() {
    this.renderListItem;
  }
  setIsCompleted() {
    const targetElement = document.querySelector(".main-view-main-list");
    const listItemChildren = targetElement.children;
    // console.log(listItemChildren)
    Array.from(listItemChildren).forEach((item) => {
      const checkbox = item.children[0].children[0].children[1];
      const taskId = +checkbox.dataset.id;
      checkbox.addEventListener("click", (e) => {
        allTaskList.forEach((task) => {
          if (task.id === taskId) {
            const spanEl = checkbox.parentElement.children[0];
            if (e.target.checked) {
              const newUI = allTaskList.filter((allTsk) => allTsk.category === task.category);
              // this.renderListItem(newUI)
              task.isCompleted = true
              spanEl.classList.remove("display-invisible");
            }
            // console.log(spanEl)
            // spanEl.setAttribute("style", `display:${e.target.checkbox ? 'block' : 'none'} `)
          }
        });
      });
    });
  }
  renderListItem(arg) {
    const listUi = document.querySelector("#task-list");
    let item = "";
    for (let i = 0; i < arg.length ; i++) {
      item += ` <li class="main-view-main-list__item">
              <div class="main-view-main-list__item__task__title">
              <div>
              <span class='display-invisible'>
                 <i class='ri-checkbox-fill'></i>
                    </span>
                  <input type="checkbox" name="" id="" data-id=${arg[i].id} />
                </div>
                <p>${arg[i].taskItem}</p>
              </div>
              <div class="main-view-main-list__item__task__time">
                <span>
                  <i class="ri-filter-3-line"></i>
                  <p>${arg[i].startTime} - ${arg[i].endTime}</p>
                </span>

                <div>
                  <i class="ri-more-2-fill"></i>
                </div>
              </div>
            </li>`;
    }
    if (arg.length <= 0) {
      listUi.innerHTML = "<div><h1>No task available </h1></div>";
    } else {
      listUi.innerHTML = item;
    }
  }
}

export const { renderListItem, setIsCompleted } = new RenderListItemUI();
