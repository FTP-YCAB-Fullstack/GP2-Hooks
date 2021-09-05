import { useHistory } from "react-router-dom"

function Login(){
    const history = useHistory();

    const AccesToken = () => {
        localStorage.setItem("access", true)
        history.push("/home")
    }
    
    return (
    <>
    <h1>Ini Halaman Login</h1>
    <button onClick={AccesToken}>Get Started</button>
    </>
)}

export default Login;