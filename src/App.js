import React from "react";

// function App() {
//   const str1 = "label";
//   const str2 = "block";
//   const str3 = "elem";

//   return (
//     <div>
//       <label id={str1} htmlFor={str2} className={str3}>
//         text
//       </label>{" "}
//       <br />
//       <input id={str2} />
//     </div>
//   );
// }

// function App() {
//   const isAdult = true;
//   let user;
//   if (isAdult) {
//     user = "You are adult";
//   } else {
//     user = "You are not adult";
//   }
//   return user;
// }

// function App() {
//   const isAdmin = true;
//   let user;
//   if (isAdmin) {
//     user = (
//       <div>
//         <p>welcome</p>
//       </div>
//     );
//   }
//   return user;
// }

// function App() {
//   const age = 1;

//   return (
//     <div>{age > 18 ? <p>You are adult</p> : <p>You are not adult</p>}</div>
//   );
// }

// function App() {
//   const isAdmin = true;
//   return <div>{isAdmin && <p>you are logged in</p>}</div>;
// }
// function App() {
//   const isAuth = false;
//   return <div>{!isAuth && <p>please login</p>}</div>;
// }

// function App() {
//   let sum = 0;
//   function getDigitsSum(num) {
//     num = String(num);
//     console.log(num);
//     for (let i = 0; i < num.length; i++) {
//       sum = sum + +num[i];
//     }
//     return sum;
//   }
//   return <li>{getDigitsSum(12345)} </li>;
// }

// function App() {
//   function showMess() {
//     alert("hello");
//   }

//   return (
//     <div>
//       <button onClick={showMess}>show</button>
//     </div>
//   );
// }

function App() {
  function show1() {
    alert(1);
  }
  function show2() {
    alert(2);
  }
  return (
    <div>
      <button onClick={show1}>act1</button>
      <button onClick={show2}>act2</button>
    </div>
  );
}

export default App;
