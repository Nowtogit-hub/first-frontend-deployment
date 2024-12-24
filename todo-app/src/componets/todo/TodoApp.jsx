import { useState } from "react";
import "./TodoApp.css"

export default function TodoApp(){
    return (
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent></LoginComponent>
        </div>
    );
}

function LoginComponent(){

    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    
    
    return(
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" 
                        name="username" onChange={(event)=>setUsername(event.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <div>
                    <button type="button">login</button>
                </div>
            </div>
        </div>
    );
}

function WelcomeComponent(){
    return(
        <div className="Welcome">
            Welcome Component
        </div>
    )
} 