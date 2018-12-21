const btnGetUsers = document.querySelector('#getUsers'),
      btnGetName = document.querySelector('#getNames'),
      fieldResult = document.querySelector('.result-request');

const URL = 'https://test-users-api.herokuapp.com';
let arrUsers = [];

const getUsers = async () => {
  try {
    const users = await axios.get(`${URL}/users/`);
    const listUsers = users.data.data;
    listUsers.forEach((user) => {
      arrUsers.push(user.id);
    });
  } catch (err) {
    alert(err);
  }
}

btnGetUsers.addEventListener("click", () => {
  getUsers();
  alert("The request is successful. You got users.")
});

const getRequest = async () => {
  const userOne = _.sample(arrUsers),
        userTwo = _.sample(arrUsers),
        userThree = _.sample(arrUsers);

  request = axios.create({
    baseURL: URL
  });

  fieldResult.innerText = '';

  try {
    const usersName = await Promise.all([
      request.get(`/users/${userOne}`),
      request.get(`/users/${userTwo}`),
      request.get(`/users/${userThree}`)
    ]);
    usersName.forEach((user) => {
      let nameUser = user.data.data.name,
          userId = user.data.data.id;

      fieldResult.innerText += `User ID :  ${userId}
                                Name: ${nameUser} \n
                                `;
    });
  } catch (err) {
    console.log(err);
  }
}

btnGetName.addEventListener("click", () => {
  getRequest();
});