import React from "react";
import { Main } from "./if_else";
import { ShowAfterClick } from "./onClick";
import { ShowHelloName } from "./ShowHelloName";
import { OnClickCallBack } from "./onClickCallBack";
import { FirstEvent } from "./first_event";
import { SecondEvent } from "./second_event";
// import { ArrayRender } from "./array_render";
import { ArrPush } from "./array_for";
import { ArrayList } from "./array_map";
import { Users } from "./array_of_objects";
import { Table } from "./create_table";
import "react-native-get-random-values";
import { SomeFun } from "./function_id";
import { State } from "./use_state";
import { Product } from "./product";
import { InCart } from "./tenar_operator";
import { User } from "./user";
import "./App.css";

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
  return (
    <div>
      <Main />
      <ShowAfterClick />
      <ShowHelloName />
      <OnClickCallBack />
      <FirstEvent />
      <SecondEvent />
      <ArrPush />
      <ArrayList />
      <Users />
      <Table />
      <SomeFun />
      <State />
      <Product />
      <InCart />
      <User />
    </div>
  );
}

export default App;
