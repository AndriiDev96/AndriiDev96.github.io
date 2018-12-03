'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var inputName = document.querySelector('#inputName'),
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

var arrayUsers = [];
var getUser = function getUser() {
  if (inputName.value == "" || inputAdress.value == "" || inputBirthday.value == "" || inputPhone.value == "" || inputEmail.value == "") {
    toastr.error('Error! Fill in all fields.');
  } else {
    var users = {
      name: inputName.value,
      sex: inputsSex.value,
      birthday: inputBirthday.value,
      adress: inputAdress.value,
      phoneNumber: inputPhone.value,
      email: inputEmail.value
    };
    arrayUsers.push(users);
  }
};

var formatPhone = function formatPhone(obj) {
  var num = obj.value.replace(/\D/g, ''),
      char = {
    0: '+380 ',
    2: ' ',
    5: '-',
    7: '-'
  };
  obj.value = '';
  for (var i = 0; i < num.length; i++) {
    obj.value += (char[i] || '') + num[i];
  }
};

var SuperUser = function () {
  function SuperUser() {
    _classCallCheck(this, SuperUser);

    this.isVisible = null;
  }

  _createClass(SuperUser, [{
    key: 'changeDateVisibility',
    value: function changeDateVisibility() {
      var _this = this;

      this.isVisible = tagTbody.rows;

      var _loop = function _loop(i) {
        var allChildrentr = _this.isVisible[i].children;
        _this.isVisible[i].addEventListener("click", function () {
          for (var _i = 2; _i < allChildrentr.length; _i++) {
            allChildrentr[_i].style.display = allChildrentr[_i].style.display == 'none' ? '' : 'none';
          }
        });
      };

      for (var i = 0; i < this.isVisible.length; i++) {
        _loop(i);
      }
    }
  }]);

  return SuperUser;
}();

var User = function (_SuperUser) {
  _inherits(User, _SuperUser);

  function User(arrayUsers) {
    _classCallCheck(this, User);

    var _this2 = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this));

    _this2.arrayUsers = arrayUsers;
    _this2.addUserInTable(_this2.arrayUsers);
    btnSearch.addEventListener("click", function () {
      _this2.getSearchUsers();
    });
    return _this2;
  }

  _createClass(User, [{
    key: 'addUserInTable',
    value: function addUserInTable(arrayUsers) {
      tagTbody.innerHTML = "";
      Object.keys(arrayUsers).forEach(function (key) {
        var user = arrayUsers[key];
        var tagTr = document.createElement('tr'),
            tagTh = document.createElement('th');
        tagTh.innerText = +key + 1;
        tagTr.append(tagTh);
        for (var val in user) {
          var td = document.createElement('td');
          td.innerHTML = user[val];
          tagTr.append(td);
          tagTbody.append(tagTr);
        }
      });
      this.changeDateVisibility();
    }
  }, {
    key: 'getSearchUsers',
    value: function getSearchUsers() {
      var filter = inputSearch.value.toUpperCase(),
          trTable = tagTable.getElementsByTagName('tr');
      for (var i = 0; i < trTable.length; i++) {
        var tdInTable = trTable[i].getElementsByTagName('td')[0];
        if (tdInTable) {
          if (tdInTable.innerHTML.toUpperCase().indexOf(filter) > -1) {
            trTable[i].style.display = '';
          } else {
            trTable[i].style.display = 'none';
          }
        }
      }
    }
  }, {
    key: 'changeDateVisibility',
    value: function changeDateVisibility() {
      return _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), 'changeDateVisibility', this).call(this);
    }
  }]);

  return User;
}(SuperUser);

btnSave.addEventListener("click", function () {
  getUser();
  new SuperUser();
  new User(arrayUsers);
});

// Material Select
$('.mdb-select').materialSelect();