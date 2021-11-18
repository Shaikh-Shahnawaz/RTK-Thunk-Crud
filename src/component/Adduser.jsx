import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {fetchUserPostRequest} from '../thunks/thunk'
function Adduser() {

    const dispatch = useDispatch();

    const [input,setInput] = useState({
        name:'',
        username:'',
        email:'',
        phone:''
    })

    const handleChange = (e)=>{

        setInput({
            ...input, [e.target.name]:e.target.value
        })

    }


    const addUser = ()=>{

        console.log(input)
        dispatch(fetchUserPostRequest(input))
    }

    return (

        <div className="container mt-3">

            <h3>Adding Users</h3>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input name="name" onChange={handleChange} type="text" class="form-control" aria-describedby="emailHelp" />
            </div>
            
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input name="username" onChange={handleChange} type="text" class="form-control" aria-describedby="emailHelp" />
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input name="email" onChange={handleChange} type="email" class="form-control" aria-describedby="emailHelp" />
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Phone </label>
                <input name="phone" onChange={handleChange} type="tel" class="form-control"  aria-describedby="emailHelp" />
            </div>

        <button onClick={addUser} className="btn btn-dark ">Add User</button>

        </div>
    )
}

export default Adduser
