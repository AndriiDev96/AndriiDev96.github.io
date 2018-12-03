const searchButton = document.querySelector('.btn-search'),
      inputSearch = document.querySelector('#search-id'),
      table = document.querySelector('.table'),
      trTable = table.getElementsByTagName('tr'),
      tbody = document.querySelector('tbody'),
      btnCount = document.querySelector('.btn-count');

const items = {
  1: {
    name: "Chees",
    place: "Row 4 shelf 1",
    weight: 1000,
    price: 4
  },

  2: {
    name: "Meat",
    place: "Row 4 shelf 2",
    weight: 1000,
    price: 7
  },

  3: {
    name: "Milk",
    place: "Row 6 shelf 1",
    weight: 1000,
    price: 4.2
  },

  4: {
    name: "Butter",
    place: "Row 6 shelf 1",
    weight: 1000,
    price: 1.8
  },

  5: {
    name: "Fig",
    place: "Row 8 table 4",
    weight: 1000,
    price: 3.5
  },

  6: {
    name: "Buckwheat",
    place: "Row 8 table 4",
    weight: 1000,
    price: 3.5
  },

  7: {
    name: "Potato",
    place: "Row 9 table 2",
    weight: 1000,
    price: 1.5
  },

  8: {
    name: "Tomato",
    place: "Row 9 table 2",
    weight: 1000,
    price: 1.6
  },

  9: {
    name: "Banana",
    place: "Row 13 table 1",
    weight: 1000,
    price: 3.2
  },

  10: {
    name: "Grape",
    place: "Row 13 table 1",
    weight: 1000,
    price: 2.7
  },

  11: {
    name: "Apricot",
    place: "Row 13 table 3",
    weight: 1000,
    price: 3.5
  },

  12: {
    name: "Plum",
    place: "Row 14 table 3",
    weight: 1000,
    price: 2.1
  },

  13: {
    name: "Strawberry",
    place: "Row 14 table 3",
    weight: 1000,
    price: 3.7
  },

  14: {
    name: "Peanuts",
    place: "Row 15 table 2",
    weight: 1000,
    price: 2.7
  },

  15: {
    name: "Crackers",
    place: "Row 15 table 4",
    weight: 1000,
    price: 2.6
  }

}

class Supermarket {
  constructor(options) {
    const {items, btnCount, srchButton, inpSrch, trInTable} = options;
    this.shoppingList = document.querySelector('.buy-items');
    this.array = [];
    this.inpSrch = inpSrch;
    this.trInTable = trInTable;
    this.srchButton = srchButton;
    this.srchButton.addEventListener("click", () => {
      this.getSearchItems();
    });
    this.btnCount = btnCount;
    this.btnCount.addEventListener("click", () => {
      this.getResultPrire();
    });
    this.addItemsInTable(items);
  }

  addItemsInTable(items) {
    Object.keys(items).forEach((key) => {
      const item = items[key];
      let tagTr = document.createElement('tr'),
        tagTh = document.createElement('th');
      tagTh.innerText = key;
      tagTr.append(tagTh);
      for (var val in item) {
        let td = document.createElement('td')
        td.innerHTML = item[val];
        tagTr.append(td);
        tbody.append(tagTr);
      }
    });
    this.addItemsToRec();
  };

  addItemsToRec() {
    let trInTbody = tbody.rows;

    for (let i = 0; i < trInTbody.length; i++) {
      trInTbody[i].addEventListener("click", () => {
        let tagPOrder = document.createElement('p');
        this.array.push(trInTbody[i].lastElementChild.innerText);
        tagPOrder.innerHTML = trInTbody[i].innerText;
        this.shoppingList.prepend(tagPOrder);
        toastr.info(`Added to Receipt `);
      });
    }
  };

  getSearchItems() {
    const filter = this.inpSrch.value.toUpperCase();

    for (let i = 0; i < this.trInTable.length; i++) {
      let tdTable = this.trInTable[i].getElementsByTagName("td")[0];
      if (tdTable) {
        if (tdTable.innerHTML.toUpperCase().indexOf(filter) > -1) {
          this.trInTable[i].style.display = "";
        } else {
          this.trInTable[i].style.display = "none";
        }
      }
    }
  };

  getResultPrire() {
    let sum = 0,
      tagResult = document.createElement('p');
    let arr = this.array.map(function (num) {
      return Number(num);
    });

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    tagResult.innerHTML = `Prise  ${sum}$`;
    this.shoppingList.lastElementChild.append(tagResult);
    this.shoppingList.lastElementChild.style.display = `block`;
  }
};

const supermarket = new Supermarket({
  items: items,
  btnCount: btnCount,
  srchButton: searchButton,
  inpSrch: inputSearch,
  trInTable: trTable
});