import Logo from "../assets/react.png"
import "./header.css";

const Header = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="" />
    </div>
  )
}

export default Header