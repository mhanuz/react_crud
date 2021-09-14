import React from 'react';
import { createContext,useState } from 'react';

export const UserContext=createContext();

export const UserProvider = (props)=>{
    const[user,setUser]=useState([
        {id:1, name:"salman", position:"fornt end dev", salary:28000},
        {id:2, name:"shuvo", position:"react dev", salary:26000},
        {id:3, name:"atik", position:"full stack", salary:27000}
    ])
    return(
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}