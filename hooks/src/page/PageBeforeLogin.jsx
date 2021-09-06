import { Link } from 'react-router-dom'

function PageBeforeLogin(){
    return (
        <div>
            <h1>Halaman SebelumLogin</h1>
            <Link to="/Home">Home</Link>
        </div>          
    )
}
export default PageBeforeLogin;