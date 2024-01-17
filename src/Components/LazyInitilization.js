
import React, {useState} from "react";

function hello(){
    console.log("Hello");
    return 10;
}

const LazyInitilization = () => {

   const [count, setCount] = useState(
    ()=>{
    console.log("Hello"); 
    return 100
   })



    return(
        <div>
             <h1>{count}</h1>
             <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default LazyInitilization;


// for(let i = 0; i < 100; i++){
//     console.log(i)
// }