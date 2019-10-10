

class App {
  constructor() {
  }
  itemHeight() {
    let item = document.querySelectorAll('.news-item__title'),
        initHeight = 0;
    for(let i = 0; i < item.length; i++) {
      if(item[i].clientHeight > initHeight) {
        initHeight = item[i].clientHeight;
      }
      item[i].style.height = initHeight + 'px';
    }
  };
  init () {
    this.itemHeight();
  }
}

let app = new  App();
app.init();



