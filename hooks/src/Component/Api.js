import axios from 'axios'
import React , {useEffect , useState} from 'react'

function Api() {
    const [useData,setData] = useState([])
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [third , setThird] = useState("")
    const [rate,setRate]= useState([])
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
                setRate(response.data)
        })
        .catch ((error)=>{
            console.log(error)
        })
    }

    return (
        
        <div>
            <p>Currency Exchange</p>
            <input type="number" value={third} onChange={e => setThird(e.target.value)} ></input>
            <select value={first} onChange={e => setFirst(e.target.value)} >
            {useData.map(data =>(
                <option key={data} value={data} >{data}</option>
            ))}
             </select><span> to </span>
             <select value={second} onChange={e => setSecond(e.target.value)} >
            {useData.map(data =>(
                <option key={data} value={data} >{data}</option>
            ))}
             </select>
            <button onClick={()=> {getRate(first,second)}}> Convert </button>
            <p>{third} {first}= {rate[`${first}_${second}`] * +third } {second}</p>
        </div>
    )
}

export default Api
