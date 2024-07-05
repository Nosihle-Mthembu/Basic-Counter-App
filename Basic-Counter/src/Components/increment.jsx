

function Increment(props){
    // this increases the value
  const increment = () => {
      // alert(" We rising")
      props.setCounter(props.counter +1)
     };
      return (
          <button
           style={{
            background:"green",
            color:"white",
            font:"bold",
            margin: "10px",
            borderRadius:"8px",
            width:"90px",
            height:"30px",
        }}
          onClick={increment}
          >Increment</button>
      )
  }
  export default Increment;