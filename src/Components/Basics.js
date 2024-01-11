
import React, { useState } from "react";

// let x = useState(0)  // [number, functions]

        // console.log(x[0])
        // console.log(x[1])


// let [y,z]  = useState(0) // [y,z] = [0, f]

let a = 0  // variable  in JS



const Basics = () => { 
    let [count, setCount] = useState(0) // count = 8
 
    function incCount(){
        setCount(count+1) // setCount(1)
    }


    function inc(){
        a = a+1 
        console.log(a) // 6
    }
  
    return(
        <div>
                
                <h1> {a} </h1>
                <button onClick={inc}> Increase A </button>

                <h1> {count} </h1>
                <button onClick={incCount}> Increase C</button>
        </div>
    )


}

export default Basics;



// let a = 10  // variable  in JS

//     function inc(){
//         a = a+1 
//         console.log(a)
//     }

// <h1> {a} </h1>

// <button onClick={inc}> Increase </button>
