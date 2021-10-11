import React, { useEffect } from "react";
import PolicySection from "./PolicySection";
import axios from "axios";

export default function Policy() {
  
  useEffect(()=>{
    axios.get()
  })
  
  return (
    <>
      <h2>My Policy</h2>
      <PolicySection label={'Policy reference:'} text={''}/>
      <PolicySection label={'Cover type:'} text={''}/>
      <PolicySection label={'Car:'} text={''}/>
      <PolicySection label={'Name:'} text={''}/>
      <PolicySection label={'Address:'} text={''}/>
      <button>Sign out</button>
    </>
  );
}
