import React, { useState } from "react"
import ImageInputList from "./app/components/ImageInput/ImageInputList";

import Screen from './app/components/Screen';
import ListEditScreen from "./app/screen/ListEditScreen";


//safeAreaView is only works in IOS so for android we must use padding
// so we use Platform in this case.




export default function App() {

  return (
    <ListEditScreen />
  );
}


