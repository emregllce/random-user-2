

import "./AddUser.css"
import React from 'react'

const AddUser = ({addUsers}) => {
  return (
    <div className="allItems">
        <div className="itemHeader">
            <h4 className="addHeader">Firstname</h4>
            <h4 className="addHeader email">Email</h4>
            <h4 className="addHeader">Phone</h4>
            <h4 className="addHeader">Age</h4>
        </div>

        <div className="itemInfo">
            {addUsers?.map((user,index)=>
                <div className="userAdded" key={index}>
                  <h4 className="nameUser">{user.name}</h4>
                  <div className="emailUser"> <h4 className="p">{user.email}</h4> </div>
                    <h4 className="phoneUser">{user.phone}</h4>
                    <h4 className="ageUser">{user.age}</h4>
                </div>
            )}
        </div>

        
    </div>
  )
}

export default AddUser