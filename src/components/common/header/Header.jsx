import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link ,useNavigate} from "react-router-dom"
import Web3 from "web3";
const Header = () => {
  const [navList, setNavList] = useState(false);
  const navigate = useNavigate();
  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        console.log("MetaMask connected. Current account:", accounts[0]);
      } catch (error) {
        console.error("Error connecting MetaMask:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
      console.error("MetaMask not detected. Please install MetaMask.");
    }
  };
  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo' onClick={()=>navigate("/")}>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mylist'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1' onClick={connectMetaMask}>
              <i className='fa fa-sign-out'></i> Connect MetaMask
            </button>
          </div>

          {/* <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div> */}
        </div>
      </header>
    </>
  )
}

export default Header
