import React, { useEffect, useState } from 'react'
import { fetchUserDeleteRequest, fetchUserGetRequest, fetchUserPutRequest } from '../thunks/thunk'
import { useDispatch, useSelector } from 'react-redux'
import Adduser from './Adduser'
import Edituser from './Edituser'

function GetApiData() {

    const [deleted,setDeleted] = useState(false)
    
    const [edited,setEdited] = useState(false)
    const [editId,setEditId] = useState()
    const [editToggle,setEditToggle] = useState(false)

    const dispatch = useDispatch()
    const apiData = useSelector(state => state.axios)


    useEffect(() => {
        //----------------- get request
        dispatch(fetchUserGetRequest())

    }, [deleted,edited])

    // ---------------------------------for deleting

    function deleteData(id) {
        dispatch(fetchUserDeleteRequest(id)).then((data)=>{

            setDeleted(!deleted)
        })
    }

    // -------------------------------for editing 

    function openModal(uId){
        setEditId(uId)
        setEditToggle(true)
    }

    function hideModal(value){
        setEditToggle(value)
    }

    function editUser(data){

        console.log(editId)
        dispatch(fetchUserPutRequest( { editId, data } ) ).then((data)=>{
            setEdited(!edited)

        })
        // debugger;

    }

    return (
        <div class="container mt-2">


               {/* Adding Users */}
               <Adduser/>

               {/* editing Users */}
               <Edituser editUser={editUser} hideModal={hideModal} editToggle={editToggle} />

            <h1 class="text-center">Redux Thunk</h1>
            <table class="table table-hover bg-light">
                <thead className="bg-warning">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                        {/* <th scope="col">Email</th> */}

                    </tr>
                </thead>
                <tbody>

                    {
                        apiData.getData.map((element, index) => (

                            <tr>
                                <th scope="row">{element.id}</th>
                                <td>{element.name}</td>
                                <td>{element.username}</td>
                                <td>{element.email}</td>
                                <td>{element.phone}</td>
                                <td><button onClick={()=>openModal(element.id)} type="button" className="btn btn-info">Edit</button>
                                    <button type="button" onClick={()=>deleteData(element.id)} className="ms-2 btn btn-danger">Delete</button></td>
                                {/* <td>{element.email}</td> */}
                            </tr>

                        ))
                    }

                </tbody>

            </table>


         

        </div>
    )
}

export default GetApiData
