import React from 'react'
import "./Card.css"
import Pictures from './Pictures'
import { useEffect,useState } from "react"
import axios from "axios";
import AddUser from './AddUser';

//{ info,fetchCard, loading,whatApp,detailApp }
function Card() {
  const myUrl = "https://randomuser.me/api/"
  const [info, setInfo] = useState([])
  const [what, setWhat] = useState()
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [age, setAge] = useState()
   const [street, setStreet] = useState("")
   const [phone, setPhone] = useState("")
   const [password, setPassword] = useState("")
   const [picture, setPicture] = useState("")
   const [addUsers, setAddUsers] = useState([]);
   
   const handleClick = () => {
       setLoading(false)
       axios.get(myUrl)
    .then((res)=>{
    // console.log(res);
    setInfo(res?.data?.results)
    setWhat("name")
    setDetail(res?.data?.results[0]?.name.first +"  "+ res?.data?.results[0]?.name.last)
    setName(res?.data?.results[0]?.name.first +"  "+ res?.data?.results[0]?.name.last)
    setEmail(res?.data?.results[0]?.email)
    setAge(res?.data?.results[0]?.dob.age)
    setStreet(res?.data?.results[0]?.location.city+"-"+res?.data?.results[0]?.location.country)
    setPhone(res?.data?.results[0]?.phone)
    setPassword(res?.data?.results[0]?.login.password)
    setPicture(res?.data?.results[0]?.picture.large)
    setLoading(true)
    }
    )}


    
    const handleaddUsers = () => {
        const newUser = {
            name:info[0]?.name.first+" "+info[0].name.last,
            email:info[0]?.email,
            age:info[0]?.dob.age,
            phone:info[0]?.phone,
        }

        if (addUsers.length ===0) {
            setAddUsers([...addUsers, newUser]);
        }
        else if (addUsers.length > 0) {
            addUsers[addUsers.length-1].email !== newUser.email  &&
            setAddUsers([...addUsers, newUser]);
        }
      
        
        
        

        }


    useEffect(() => {
        handleClick();
  }, [])



    const handleMove = (e) => {
        if (e.target.id==="man"||e.target.id==="woman") {
           setWhat("name")
           setDetail(name)
        }
        else if (e.target.id==="mail") {
            setWhat("email")
            setDetail(email)
        }
        else if (e.target.id==="gman"||e.target.id==="gwoman") {
            setWhat("age")
            setDetail(age)
        }
        else if (e.target.id==="map") {
            setWhat("street")
            setDetail(street)
        }
        else if (e.target.id==="phone") {
            setWhat("phone")
            setDetail(phone)
        }
        else if (e.target.id==="padlock") {
            setWhat("password")
            setDetail(password)
        }
    }



// const {dob, email, gender, location, name, phone, picture, registered} = {info[0]}
    return (
    <div className='card-container'>
        <div className="card">
            <div className='image'><img className='picture' src={picture}></img></div>
            <div className='myName'> <h3>My {what}  is</h3> </div>
            <div>  <h2>{detail}</h2> </div>
            <div onMouseMove={handleMove} className="pictures"> <Pictures info = {info}/> </div>
            <div className="buttons">
            <button onClick={handleClick}>{loading? "New User" : "Loading"}</button>
             <button onClick={handleaddUsers}>Add User</button>
            </div>
        </div>
        {addUsers.length  > 0 &&
        <div className='addUser'>
          <AddUser addUsers={addUsers}/>
        </div>}
    </div>
    )}
export default Card

