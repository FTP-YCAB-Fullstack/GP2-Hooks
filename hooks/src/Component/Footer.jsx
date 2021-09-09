import GitHub from "../assets/github.png"
import "../styles/footer.css"

function Footer (){
    return(
        <div className="footers">
            <a href="https://github.com/FTP-YCAB-Fullstack/GP2-Hooks"><img src={GitHub} alt="" /></a>
            <span>©Copyright : Currency.id</span>
        </div>
    )
}

export default Footer;