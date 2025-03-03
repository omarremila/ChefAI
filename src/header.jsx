import ReactDOM from 'react-dom/client';
import "./header.css";
//import App from "./App"
function Header() {
  return (
    <div className = "header">
        <img src = "src/assets/Images/chef_icon.png" alt = "Chef Icon" width = "50" heigh = "50" />
        <h1>Chef CulinAIry</h1>
    </div>
  )
}
export default Header;