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
import { InCart } from "./ternar_operator";
import { User } from "./user";
import "./App.css";
import { Input } from "./input_value";
import { Input2 } from "./input2";
import { CountSymbols } from "./count_symbols";
import { YearOfBirth } from "./date_of_birth";
import { CountTemperature } from "./fahren_to_celsius";
import { Avarage } from "./avarage";
import { Counter } from "./counter";
import { CreateDate, Date } from "./date";
import { CountSum, Translit } from "./translit";
import { CheckBox } from "./checkBox";
import { Languages } from "./check_box_languages";
import { Question } from "./question";
import { ActiveElemetn } from "./active_element";
import { SelectCity } from "./select_city";

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
      <Input />
      <Input2 />
      <CountSymbols />
      <YearOfBirth />
      <CountTemperature />
      <Avarage />
      <Counter />
      <CreateDate />
      <Translit />
      <CountSum />
      <CheckBox />
      <Languages />
      <Question />
      <ActiveElemetn />
      <SelectCity />
    </div>
  );
}

export default App;
