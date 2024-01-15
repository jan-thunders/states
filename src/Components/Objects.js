
import React,{useState} from "react";

const Objects = () => {
   const [coins, setCoins] = useState({gold:0, silver:0, bronze:0})
   
   console.log("coins",coins)
   // coins = {gold:0, silver:0, bronze:0} => {gold:1, silver:0, bronze:0}
   

  function incGold(){
    //   setCoins({gold:coins.gold+1, silver:coins.silver, bronze:coins.bronze}) 
    setCoins({...coins, gold:coins.gold+1 })

    setCoins(coins.gold+1)
  }

    return(
        <div>
            <h1> Gold: {coins.gold} | Silver: {coins.silver} | Bronze: {coins.bronze} </h1>

            <button onClick={incGold}> Increase Gold </button>
            <button onClick={()=> setCoins({...coins, silver:coins.silver+1 })}> Increase Silver </button>
            <button
                onClick={()=> setCoins({...coins, bronze:coins.bronze+1 })}
            > Increase Bronze </button>
        </div>
    )
}

export default Objects;


// spread Operator & Rest Opterator


// count = {a:11, b:20}

// setcount(11) // count = 500


