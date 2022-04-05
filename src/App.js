import React from "react";
import { Main } from "./if_else";
import { ShowAfterClick } from "./onClick";
import { ShowHelloName } from "./ShowHelloName";
import { OnClickCallBack } from "./onClickCallBack";
import { FirstEvent } from "./first_event";
import { SecondEvent } from "./second_event";
// import { ArrayRender } from "./array_render";
import { ArrPush } from "./arrays/array_for";
import { ArrayList } from "./arrays/array_map";
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
import { ArrayCities } from "./arrays/array_cities";
import { YourAge } from "./your_age";
import { Radio } from "./radio";
import { RadioChooseLanguage } from "./radio_choose_lang";
import { IncreaseArray } from "./increase_array";
import { DefaultInput } from "./default_value_input";
import { DefaultCkeckBox } from "./default_check_box";
import { ReduceArray } from "./reduce_array";
import { ChangeElement } from "./arrays/change_element_in_array";
import { SortArray } from "./sort_array";
import { AddValueToArray } from "./arrays/add_value_to_array";
import { OnBlur } from "./onBlur";
import { DeleteElementByIndex } from "./delete_element_by_index";
import { BindingInputsToArray } from "./arrays/binding_inputs_to_array";
import { EditArray } from "./edit_array";
import { EditLettersArray } from "./edit_letters_array";
import { GenericFormToModifyArray } from "./arrays/generic_form_to_modify_array";
import { GenericFormToModifyArray2 } from "./arrays/generic_form_to_modify_array2";
import { GenericFormToModifyLettersArray } from "./arrays/generic_form_to_modify_letters_array";
import { ChangeObject } from "./change_object";
import { BindingInputToObject } from "./binding_input_to_object";
import {
  BindingInputsToObject,
  BindingInputsToObject2,
} from "./binding_inputs_to_object2";
import { ObjectArrayReactivity } from "./object_array_reactivity";
import { DeleteElementFromObjetsArray } from "./delete_element_from_objects_array";
import { ChangeElementFromObjectsArray } from "./change_element_from_objects_array";
import { ChangePropertyOfObject } from "./change_property_of_object";
import { GetPropertysValue } from "./get_property's _value";

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
      {/* <Main />
      <hr></hr>
      <ShowAfterClick />
      <hr></hr>
      <ShowHelloName />
      <hr></hr>
      <OnClickCallBack />
      <hr></hr>
      <FirstEvent />
      <hr></hr>
      <SecondEvent />
      <hr></hr>
      <ArrPush />
      <hr></hr>
      <ArrayList />
      <hr></hr>
      <Users />
      <hr></hr>
      <Table />
      <hr></hr>
      <SomeFun />
      <hr></hr>
      <State />
      <hr></hr>
      <Product />
      <hr></hr>
      <InCart />
      <hr></hr>
      <User />
      <hr></hr>
      <Input />
      <hr></hr>
      <Input2 />
      <hr></hr>
      <CountSymbols />
      <hr></hr>
      <YearOfBirth />
      <hr></hr>
      <CountTemperature />
      <hr></hr>
      <Avarage />
      <hr></hr>
      <Counter />
      <hr></hr>
      <CreateDate />
      <hr></hr>
      <Translit />
      <hr></hr>
      <CountSum />
      <hr></hr>
      <CheckBox />
      <hr></hr>
      <Languages />
      <hr></hr>
      <Question />
      <hr></hr>
      <ActiveElemetn />
      <hr></hr>
      <SelectCity />
      <hr></hr>
      <ArrayCities />
      <hr></hr>
      <YourAge />
      <hr></hr>
      <Radio />
      <hr></hr>
      <RadioChooseLanguage />
      <hr></hr>
      <IncreaseArray />
      <hr></hr>
      <DefaultInput />
      <hr></hr>
      <DefaultCkeckBox />
      <hr></hr>
      <ReduceArray />
      <hr></hr>
      <ChangeElement />
      <hr></hr>
      <SortArray />
      <hr></hr>
      <AddValueToArray />
      <hr></hr>
      <OnBlur />
      <hr></hr>
      <DeleteElementByIndex />
      <hr></hr>
      <BindingInputsToArray />
      <hr></hr>
      <EditArray />
      <hr></hr>
      <EditLettersArray />
      <hr></hr>
      <GenericFormToModifyArray />
      <hr></hr>
      <GenericFormToModifyArray2 />
      <hr></hr>
      <GenericFormToModifyLettersArray />
      <hr></hr>
      <ChangeObject />
      <hr></hr>
      <BindingInputToObject />
      <hr></hr>
      <BindingInputsToObject2 />
      <hr></hr>
      <ObjectArrayReactivity />
      <hr></hr>
      <DeleteElementFromObjetsArray />
      <hr></hr>
      <ChangeElementFromObjectsArray />
      <hr></hr>
      <ChangePropertyOfObject />
      <hr></hr>*/}
      <GetPropertysValue />
    </div>
  );
}

export default App;
