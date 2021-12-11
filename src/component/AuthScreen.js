import React, { useState } from 'react'
import "./../assest/style/login.css"

function AuthScreen() {
    let [logIn,setLogin] = useState(true)
    let [userName,setUserName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [confirmPassword,setConfirmPassword] = useState("")

    function onchange(e){
            console.log(e.target)
        switch(e.target.placeholder){
            case "username" : setUserName(e.target.value);break;
            case "password" : setPassword(e.target.value);break;
            case "email" : setEmail(e.target.value);break;
            case "confirm password" : setConfirmPassword(e.target.value);break;
        }
    }   

    return (
        <div className="box"> 
                {logIn?
                    (
                        <form class="" onSubmit={()=>console.log("submit")}>
                            <h1>LOG IN</h1>
                            <input class="text" type="text" value={userName} onChange={onchange} placeholder="username" required={true}/>
                            <input class="pass" type="password" value={password} onChange={onchange} placeholder="password" required={true}/>
                            <input class="sumbit" type="submit" value="submit" />
                            <div>go to <span onClick={()=>setLogin(false)}>Sing up</span></div>
                        </form>
                    ):
                    (
                        <form class="box">
                            <h1>Sign Up</h1>
                            <input class="text"   type="text"     value={userName} onChange={onchange} placeholder="username" required={true}/>
                            <input class="pass"   type="email"    value={email} onChange={onchange} placeholder="email" required={true}/>
                            <input class="pass"   type="password" value={password} onChange={onchange} placeholder="password" required={true}/>
                            <input class="pass"   type="password" value={confirmPassword} onChange={onchange} placeholder="confirm password" required={true} />
                            <input class="sumbit" type="submit"   value="submit" />
                            <div>go to <span onClick={()=>setLogin(true)}>Sing up</span></div>
                        </form>
                    )
                }
        </div>
    )
}

export default AuthScreen
