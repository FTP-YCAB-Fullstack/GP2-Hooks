import { useHistory } from "react-router-dom"

function Login(){
    const history = useHistory();

    const AccesToken = () => {
        localStorage.setItem("access", true)
        history.replace("/home")
    }
    
    return (
    <div>     
        <h1>Ini Halaman Login</h1>
        <button onClick={AccesToken}>Get Started</button>
    </div>
)}

export default Login;