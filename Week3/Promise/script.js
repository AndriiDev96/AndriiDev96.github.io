const background = document.getElementsByTagName('body')[0],
      textCenter = document.querySelector(".content");

function setTimeFunc(){
  let promise = new Promise((resolve, reject) => {
   
    setTimeout(() =>{
      background.style.background = "#ccc";
      textCenter.style.display = "block";
      resolve('10s');
    }, 10000);
  });
  return promise;
};

async function showResult(){
  console.log("Почавcя відлік.");

  try{
    const waitFunc = await setTimeFunc();
    console.log(`Пройшло ${waitFunc}`);
    return 'завершено!';
  }catch(error){
    console.error("Arose", error);
  }
}

const resPromise = showResult(); 
resPromise
  .then((result) => console.log("Відлік ", result));