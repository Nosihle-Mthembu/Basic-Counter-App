function Decrement(props){
    
    // this decreases the value
    const decrement = () => {
        // alert(" We dropping")
        props.setCounter(props.counter -1)
       };
        return (
            <button
             style={{
                background:"Red",
                color:"white",
                font:"bold",
                marginLeft:"0.5cm",
                borderRadius:"8px",
                width:"90px",
                height:"30px",  
            }}
            onClick={decrement}>Decrement</button>
        )
    } export default Decrement;  