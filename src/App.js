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
import { Users } from "./structures_with_objects/array_of_objects";
import { Table } from "./structures_with_objects/create_table";
import "react-native-get-random-values";
import { SomeFun } from "./structures_with_objects/function_id";
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
import { CountSum, Translit } from "./structures_with_objects/translit";
import { CheckBox } from "./checkBox";
import { Languages } from "./check_box_languages";
import { Question } from "./question";
import { ActiveElemetn } from "./active_element";
import { SelectCity } from "./select_city";
import { ArrayCities } from "./arrays/array_cities";
import { YourAge } from "./your_age";
import { Radio } from "./radio";
import { RadioChooseLanguage } from "./radio_choose_lang";
import { IncreaseArray } from "./arrays/increase_array";
import { DefaultInput } from "./default_value_input";
import { DefaultCkeckBox } from "./default_check_box";
import { ReduceArray } from "./arrays/reduce_array";
import { ChangeElement } from "./arrays/change_element_in_array";
import { SortArray } from "./arrays/sort_array";
import { AddValueToArray } from "./arrays/add_value_to_array";
import { OnBlur } from "./arrays/onBlur";
import { DeleteElementByIndex } from "./arrays/delete_element_by_index";
import { BindingInputsToArray } from "./arrays/binding_inputs_to_array";
import { EditArray } from "./arrays/edit_array";
import { EditLettersArray } from "./arrays/edit_letters_array";
import { GenericFormToModifyArray } from "./arrays/generic_form_to_modify_array";
import { GenericFormToModifyArray2 } from "./arrays/generic_form_to_modify_array2";
import { GenericFormToModifyLettersArray } from "./arrays/generic_form_to_modify_letters_array";
import { ChangeObject } from "./structures_with_objects/change_object";
import { BindingInputToObject } from "./structures_with_objects/binding_input_to_object";
import {
  BindingInputsToObject,
  BindingInputsToObject2,
} from "./structures_with_objects/binding_inputs_to_object2";
import { ObjectArrayReactivity } from "./structures_with_objects/object_array_reactivity";
import { DeleteElementFromObjetsArray } from "./structures_with_objects/delete_element_from_objects_array";
import { ChangeElementFromObjectsArray } from "./structures_with_objects/change_element_from_objects_array";
import { ChangePropertyOfObject } from "./structures_with_objects/change_property_of_object";
import { GetPropertysValue } from "./structures_with_objects/get_propertys_value";
import { RenderInitProds } from "./structures_with_objects/render_init_prods";
import { DeleteElementFromObjetsArray2 } from "./structures_with_objects/delete_element_from_objects_array2";
import { FormToAddingElements } from "./structures_with_objects/form_to_adding_elements_to_objects_array";
import { FormToAddingElements2 } from "./structures_with_objects/form_to_adding_elements_to_objects_array2";
import { FormToAddingElements3 } from "./structures_with_objects/form_to_adding_elements_to_objects_array3";
import { FormToAddingElements4 } from "./structures_with_objects/form_to_adding_elements_to_objects_array4";
import { EditObjectArray } from "./structures_with_objects/edit_objects_array";
import { EditObjectArray2 } from "./structures_with_objects/edit_objects_array2";
import { GenericFormToModifyObjectsArray } from "./structures_with_objects/generic_form_to_modify_objecs_array";
import { GenericFormToModifyObjectsArray2 } from "./structures_with_objects/generic_form_to_modify_objecs_array2";
import { ShowTextInParagraphs } from "./editing/show_text_in_paragraphs";
import { ShowArrayInParagraph } from "./editing/show_array_in_paragraph";
import { ShowArrayInList } from "./editing/show_array_in_list";
import { ReplaceParagraphToInput } from "./editing/replace_paragraph_to_input";
import { ReplaceParagraphToInput2 } from "./editing/replace_paragraph_to_input2";
import { EditListElementsWithInput } from "./editing/edit_list_elements_with_input";
import { EditListElementsWithInput2 } from "./editing/edit_list_elements_with_input2";
import { EditTableWithInput } from "./editing/edit_table_wiith_input";
import { SimpleUser } from "./components/simple_user";
import { NewProduct } from "./components/new_product";
import { Employee } from "./employee";
import { ParentComponennt } from "./components/parent_compotent";
import { Products } from "./components/products_parent";
import { UsersParent } from "./components/users_parent";
import { ProductsParent2 } from "./components/products_parent2";
import { UsersParent2 } from "./components/user_parent2";
import { ProductsParent3 } from "./components/ProductsParent3";
import { UserChild3 } from "./components/UserChild3";
import { UserParent3 } from "./components/UserParent3";
import { Calculator } from "./Calculator";
import { MetricConversion } from "./components/MetricConversion";
import { CurrencyConvert } from "./components/CurrencyConvert";
import { MetricConversionTwoStates } from "./components/MetricConversionTwoStates";
import { MetricConversionOneState } from "./components/MetricConversionOneState";

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
      <hr></hr>
      <GetPropertysValue />
      <hr></hr> 
      <RenderInitProds />
    <hr></hr> 
      <DeleteElementFromObjetsArray2 />
      <hr></hr> 
      <FormToAddingElements />
    <hr></hr> 
      <FormToAddingElements2 />
    <hr></hr>
      <FormToAddingElements3 />
    <hr></hr> 
      <FormToAddingElements4 />
    <hr></hr> 
      <EditObjectArray />
      <hr></hr>
      <EditObjectArray2 />
    <hr></hr> 
      <GenericFormToModifyObjectsArray />
    <hr></hr> 
      <GenericFormToModifyObjectsArray2 />
    <hr></hr> 
      <p>EDITING</p>
      <ShowTextInParagraphs />
    <hr></hr> 
      <ShowTextInParagraphs />
    <hr></hr>
      <ShowArrayInParagraph />
    <hr></hr> 
      <ShowArrayInList />
      <hr></hr>
      <ReplaceParagraphToInput />
      <hr></hr>
      <ReplaceParagraphToInput2 />
    <hr></hr> 
      <EditListElementsWithInput />
    <hr></hr> 
      <EditListElementsWithInput2 />
    <hr></hr> 
      <EditTableWithInput />
    <hr></hr> 
    <p>COMPONENTS</p> 
      <SimpleUser />
      <SimpleUser />
      <SimpleUser />
      <hr></hr> 
      <NewProduct name="product1" cost="100" />
      <NewProduct name="product2" cost="200" />
      <NewProduct name="product3" cost="300" />
    <hr></hr> 
      <Employee
        name="Nicolas"
        surname="Kaminski"
        position="Developer"
        salary="3000"
      />
      <Employee
        name="Joan"
        surname="Petterson"
        position="Designer"
        salary="2000"
      />
      <Employee
        name="Ioakim"
        surname="Karlson"
        position="Manager"
        salary="4000"
      />
       <hr></hr> 
      <ParentComponennt />
    <hr></hr> 
      <Products />
      <hr></hr>
      <UsersParent />
          <hr></hr>
      <ProductsParent2 />
      <hr></hr>
      <UsersParent2 />
    <hr></hr>
      <ProductsParent3 />
    <hr></hr>
      <UserParent3 />
    <hr></hr>
      <Calculator />
    <hr></hr>
      <MetricConversion />
    <hr></hr>
      <CurrencyConvert />
    <hr></hr>
      <MetricConversionTwoStates />
    <hr></hr>*/}
      <MetricConversionOneState />
    </div>
  );
}

export default App;
