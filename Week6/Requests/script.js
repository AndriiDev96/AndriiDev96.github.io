const btnXhr = document.querySelector("#btn-xhr"),
      btnFetch = document.querySelector("#btn-promise"),
      btnAscAwte = document.querySelector("#btn-AsynAwai"),
      btnPost = document.querySelector("#btn-post"),
      tagTbodyInTab = document.querySelector("tbody");

const URL = 'https://test-users-api.herokuapp.com/users/';

const getDataInTable = (json) => {
  let data = json.data;
  for (let i = 0; i < data.length; i++) {
    let tagTr = document.createElement('tr');
    let value = data[i];
    for (let key in value) {
      let tagTd = document.createElement('td');
      tagTd.innerHTML = value[key];
      tagTr.append(tagTd);
    }
    tagTbodyInTab.append(tagTr);
  }
}

btnXhr.addEventListener("click", () => {
  tagTbodyInTab.innerHTML = '';
  const xhr = new XMLHttpRequest();
  method = 'GET';
  xhr.open(method, URL);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      try {
        const json = JSON.parse(xhr.responseText);
        getDataInTable(json);
      } catch (err) {
        console.log(err);
      }
    };
  }
});

btnFetch.addEventListener("click", () => {
  tagTbodyInTab.innerHTML = '';
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      getDataInTable(json);
    })
    .catch((err) => {
      console.log("Error");
    })
});

btnAscAwte.addEventListener("click", () => {
  tagTbodyInTab.innerHTML = '';
  (async () => {
    try {
      const asyncXhr = await fetch(URL);
      const json = await asyncXhr.json();
      getDataInTable(json);
    } catch (err) {
      console.log(err);
    }
  })();
});

/* Post request */
btnPost.addEventListener("click", () => {
  const enterName = prompt('Enter your name:'),
        enterAge = prompt('Enter ypur age:');
  fetch(`https://test-users-api.herokuapp.com/users/`, {
    method: 'POST',
    body: JSON.stringify({ name: enterName, age: enterAge }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });
  alert('Successful request!')
});

document.querySelector('#btn-info').addEventListener("click", () => {
  swal({
    title: "Інструкція",
    text: `Для того щоб протестувати запит Вам необхідно його обрати, для тедальнішого тесту Вам неодхідно: CTRL+SHIFT+J обрати 
           Network, і сповільнити інтернет до slow 3G і нажати комбінацію клавіш CTRL+R для перезавантаження сторінки, 
           після цього ви можете обирати запити і спостерігати за результатами.`,
    icon: "info",
    button: "Ok",
  });
})
