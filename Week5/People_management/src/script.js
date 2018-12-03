const inputName = document.querySelector('#inputName'),
      inputsSex = document.querySelector('.mdb-select'),
      inputBirthday = document.querySelector('#inputBirthday'),
      inputAdress = document.querySelector('#inputAddress'),
      inputPhone = document.querySelector('#inputPhone'),
      inputEmail = document.querySelector('#inputEmail'),
      inputSearch = document.querySelector('#search-id'),
      tagTable = document.querySelector('table'),
      tagTbody = document.querySelector('tbody'),
      btnSave = document.querySelector('.btn-save'),
      btnSearch = document.querySelector('.btn-search');

let arrayUsers = [];
const getUser = function () {
  if ((inputName.value == "") ||
      (inputAdress.value == "") ||
      (inputBirthday.value == "") ||
      (inputPhone.value == "") ||
      (inputEmail.value == "")) {
    toastr.error('Error! Fill in all fields.');
  } else {
    const users = {
      name: inputName.value,
      sex: inputsSex.value,
      birthday: inputBirthday.value,
      adress: inputAdress.value,
      phoneNumber: inputPhone.value,
      email: inputEmail.value
    };
    arrayUsers.push(users);
  }
}

const formatPhone = function (obj) {
  let num = obj.value.replace(/\D/g, ''),
    char = {
      0: '+380 ',
      2: ' ',
      5: '-',
      7: '-'
    };
  obj.value = '';
  for (let i = 0; i < num.length; i++) {
    obj.value += (char[i] || '') + num[i];
  }
}

class SuperUser {
  constructor() {
    this.isVisible = null;
  }

  changeDateVisibility() {
    this.isVisible = tagTbody.rows;

    for (let i = 0; i < this.isVisible.length; i++) {
      let allChildrentr = this.isVisible[i].children;
      this.isVisible[i].addEventListener("click", () => {
        for (let i = 2; i < allChildrentr.length; i++) {
          allChildrentr[i].style.display = (allChildrentr[i].style.display == 'none') ? '' : 'none';
        }
      });
    }
  }
}

class User extends SuperUser {
  constructor(arrayUsers) {
    super();
    this.arrayUsers = arrayUsers;
    this.addUserInTable(this.arrayUsers);
    btnSearch.addEventListener("click", () => {
      this.getSearchUsers();
    });
  }

  addUserInTable(arrayUsers) {
    tagTbody.innerHTML = "";
    Object.keys(arrayUsers).forEach((key) => {
      const user = arrayUsers[key];
      let tagTr = document.createElement('tr'),
          tagTh = document.createElement('th');
      tagTh.innerText = +key + 1;
      tagTr.append(tagTh);
      for (let val in user) {
        let td = document.createElement('td');
        td.innerHTML = user[val];
        tagTr.append(td);
        tagTbody.append(tagTr);
      }
    });
    this.changeDateVisibility();
  };

  getSearchUsers() {
    const filter = inputSearch.value.toUpperCase(),
          trTable = tagTable.getElementsByTagName('tr');
    for (let i = 0; i < trTable.length; i++) {
      let tdInTable = trTable[i].getElementsByTagName('td')[0];
      if (tdInTable) {
        if (tdInTable.innerHTML.toUpperCase().indexOf(filter) > -1) {
          trTable[i].style.display = '';
        } else {
          trTable[i].style.display = 'none';
        }
      }
    }
  }

  changeDateVisibility() {
    return super.changeDateVisibility();
  };
}

btnSave.addEventListener("click", function () {
  getUser();
  new SuperUser();
  new User(arrayUsers);
})

// Material Select
$('.mdb-select').materialSelect();