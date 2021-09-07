import axios from 'axios'
import React , {useEffect , useState} from 'react'
import '../currency.css'
import Logoconvert from "../assets/logoconverts.png"
import Footer from "./Footer"
import back2 from "../assets/bck2.png"

function Api() {
    const [useData,setData] = useState([])
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [third , setThird] = useState("")
    const [rate,setRate]= useState("")
    const [hasil,setHasil] = useState("")
    useEffect(() => 
    {
        axios ({
            method : "GET",
            url : "https://free.currconv.com/api/v7/currencies?apiKey=d4284863b553b14d5089"
        })
        .then ((response) => {
           setData([...Object.keys(response.data.results)]) 
        })
        .catch ((error)=>{
            console.log(error)
        })
    }, [])

    const getRate = (first,second,third) =>{
        
        axios ({
            method : "GET",
            url : `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=d4284863b553b14d5089`
        })
        .then ((response) => {
            // console.log(response)
                setRate(response.data[`${first}_${second}`])
        })
        .catch ((error)=>{
            console.log(error)
        })
    }

    return (
        <div className="bodyconverter">
        <div class="body">
                <div className="titleconvert">
                    <h1>Currency Exchange</h1>       
                </div>
            <div className="mainconvert">
                <div className="inputform">
                    <div class="contInput">
                        <input  type="number" value={third} onChange={e => setThird(e.target.value)} placeholder="Input number "></input>
                   </div>
                 <div className="option">
                   <div class="optionmenu1">
                        <span>From </span>
                        <select class="select" value={first} onChange={e => setFirst(e.target.value)} >
                             {useData.map(data =>( <option key={data} value={data} >{data}</option>))}
                        </select>
                   </div>
                   <div class="optionmenu2">
                        <span> To </span>
                        <select class="select" value={second} onChange={e => setSecond(e.target.value)} >
                            {useData.map(data =>(<option key={data} value={data} >{data}</option>))}         
                        </select>
                    </div>
                 </div>
                </div>
                    <div className="panah">
                        <img src={Logoconvert} alt=""/>
                    </div>
                    <div className="formresult">
                        <div className="note">
                            <h6>Result Exchange</h6>
                            <span>note : </span>
                        </div>
                        <div className="pembungkus">
                            <div className="boxresult">
                                <p class="hasil">{third} {first}= {rate * +third} {second}</p>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="buttonsub">
                    <button class="btn1" onClick={()=> {getRate(first,second)}}> Convert </button>
                </div>
        </div>
        
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d3d3d3" fill-opacity="1" d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,218.7C672,256,768,256,864,240C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            <div className="body2">
                <h1>Start learning about digital money maturity</h1>
                <p>Are you looking for the price of a crypto? You can see the crypto list on the next page</p>
                <img src={back2} alt="" width="350px"/> 
            </div>
        <Footer />
    </div>
    )
}

export default Api
