import axios from 'axios'
import React , {useEffect , useState} from 'react'
import '../currency.css'

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
        <div class="body">
        <div class="main">
        <div class="current">
            <div class="container">
                <h1>Currency Exchange</h1>
                <div class="">
                    <p class="hasil">{third} {first}= {rate * +third} {second}</p>
                </div>      
                <div >
                    <div class="contInput">
                        <div>
                            <input  type="number" value={third} onChange={e => setThird(e.target.value)} placeholder="Input number "></input>
                        </div>
                    </div>
                        <div class="container2">
                            <div class="container3">
                                <span>From </span>
                                <select class="select" value={first} onChange={e => setFirst(e.target.value)} >
                                {useData.map(data =>(
                                    <option key={data} value={data} >{data}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="container3">
                                <span> To </span>
                                <select class="select" value={second} onChange={e => setSecond(e.target.value)} >
                                {useData.map(data =>(
                                    <option key={data} value={data} >{data}</option>
                                    ))}
                                </select>
                            </div>                   
                        </div>
             </div>
                </div>
            <button class="button button1" onClick={()=> {getRate(first,second)}}> Convert </button>
        </div>
        </div>
        </div>
    )
}

export default Api
