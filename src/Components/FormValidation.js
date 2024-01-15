
import React,{useState} from "react";

const FormValidation = () => {
    const [user, setUser] = useState({name:"",email:"",password:"",confirmPassword:""})
    const {name,email,password,confirmPassword} = user


    function updateUser(e){
         console.log(e.target.name, e.target.value)
        //  setUser({...user, email:e.target.value})
        let key = e.target.name
        setUser({...user, [key]:e.target.value})
    }

    

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={updateUser}
                    name="name"
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={updateUser}
                    name="email"
                    
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={updateUser}
                    name="password"
                    
                />
                <br />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={updateUser}
                    name="confirmPassword"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormValidation;