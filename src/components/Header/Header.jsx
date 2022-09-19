import { Link } from "react-router-dom";
import '../../assets/styles/header/header.css'
import apple from "../../assets/images/apple.png"


const Header = () =>{

    return(
        <header>
                <h1>MARCELO <img src={apple} /> IPHONES</h1>
        </header>
    )
        

}

export default Header