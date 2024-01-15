import React,{useState} from "react";


const FormBasics = () => {
    
    const [name, setName] = useState("") 

    function handleInput(e){
        setName(e.target.value)
    }

    

    return(
        <div>
           <form>
                 <input type="text" placeholder="Enter Name" 
                  onChange={handleInput}
                 />
           </form>

           <p>{name}</p>
        </div>
    )
}

export default FormBasics;