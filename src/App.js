import './App.css';
import axios from "axios";
import Card from "./Card"
import { useState, useEffect} from "react"
import cw from "./assets/cw.svg"

function App() {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState([])
  const [whatApp, setWhatApp] = useState();
  const [detailApp, setDetailApp] = useState()
  const myUrl = "https://randomuser.me/api/"

  // const fetchCard = async() => {
  //   setLoading(false) 
  //   await axios.get(myUrl)
  //   .then((res)=>setInfo(res.data.results))
  //   .catch((err)=>console.log(err))
  //   setWhatApp("name")
  //   setDetailApp(info[0]?.name.first +" "+ info[0]?.name.last)
  //   setLoading(true) 
  //   }
  //   useEffect(() => {
  //     fetchCard();
  // }, [])


  return (
    <div className="container">
      <div className="cway"> <img className='iconcw' src={cw} alt="" /></div>
      <Card />
      
    </div>
  );
}

export default App;





{/* <button onClick={()=>fetchCard()}>Random User</button> */}

//whatApp={whatApp} detailApp={detailApp} loading={loading} fetchCard= {fetchCard} info = {info}