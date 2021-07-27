class Tabs {
  constructor(tab, tabContent) {
    this.tab = Array.from(tab);
    this.tabContent = Array.from(tabContent);
    this.init(this.tab, this.tabContent);
  }

  init(tabLocal, tabLocalContent) {
    tabLocal.forEach(function (element, i) {

      element.onclick = () => {
        let index = tabLocal.findIndex(element => element.classList.contains('tab_active'));

        tabLocal[index].classList.remove('tab_active');
        tabLocal[i].classList.add('tab_active');

        tabLocalContent[index].classList.remove('tab__content_active');
        tabLocalContent[i].classList.add('tab__content_active');
      }
    });
  }
}

const tab = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tab__content');

new Tabs(tab, tabContent);