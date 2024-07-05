import Heading from "./Components/heading";
import Counter from "./Components/counter";
import Increment from "./Components/increment";
import Decrement from "./Components/decrement";
import { useState } from "react";


function App() {
  const[counter, setCounter] = useState(0)
  let num = 26
  // console.log ("this is the counter value;", counter)
  // console.log("This is the length:", num)
  return(
    <div
      id="main"
      style={{
        border:" solid 1px purple",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
        }}
      >
        <section>
          <Heading/>
        </section>
        <section>
          <Counter setCounter={setCounter} counter={counter}/>
        </section>
        <section>
        <Increment setCounter={setCounter} counter={counter}/>
        <Decrement setCounter={setCounter} counter={counter}/>
      </section>
    </div>
    )
};

export default App
