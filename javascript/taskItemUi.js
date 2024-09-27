class RenderListItemUI {
  constructor() {}
  renderListItem(arg) {
    const listUi = document.querySelector("#task-list");
    let item = "";
    for (let i = 0; i < arg.length; i++) {
      item += ` <li class="main-view-main-list__item">
              <div class="main-view-main-list__item__task__title">
                <div>
                  <span>
                    <i class="ri-checkbox-fill"></i>
                  </span>
                  <input type="checkbox" name="" id="" data-id=${arg[i].id}/>
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
export const { renderListItem } = new RenderListItemUI();
