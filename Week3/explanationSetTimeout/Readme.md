## Explanation setTimeout

_**setTimeout** - це асинхронна функція яка виконується після основного коду. **setTimeout** - це те що прредставляється 
браузером - це **webapis** і його немає в двіжку javascript(V8)._

_**Розберемо приклад роботи сніпета:**_
```javascript
console.log("1"); 

setTimeout(function x(){
console.log("2"); 
}, 0);

console.log("3");
```
_**І так запускаємо код:**_

`console.log("1");` _-> попадає в ctack, виконався, вивів **1**_

`setTimeout(x)` _-> попадає в ctack, а затим в `webapis` - це означає, що браузер почав відлік, 
в той час очищається `stack` для виклику наступної функції в коді._

_`console.log("3");` -> попадає в `ctack`, виконався, вивів **3**_

_Браузер закінчив відлік `(setTimeout(x))`, але `webapis` не може взяти щось і засунути в `stack`, тому на допомогу приходять `task queue(черга завдань)` 
та `event loop` і коли `webapis` закінчив свою роботу запланований `callback` поміщається в `task queue`, тепер робота `event loop` 
він дивиться на `stack` і `task queue`, якщо `stack` пустий він бере першу задачу в `task queue` і поміщає в `stack`, 
що заставляє `console.log("2");` виконатися;_

```javascript
Result: 
	  1
	  3
	  2
```
