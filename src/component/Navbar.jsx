import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const home = useRef(null)
    const customers = useRef(null)
    const transactions = useRef(null)
    const handleClick = (e)=>{
        home.current.classList.remove('activeTab')
        customers.current.classList.remove('activeTab')
        transactions.current.classList.remove('activeTab')
        if(e.target.innerText==="Home"){home.current.classList.add('activeTab')}
        if(e.target.innerText==="Customers Details"){customers.current.classList.add('activeTab')}
        if(e.target.innerText==="Transactions"){transactions.current.classList.add('activeTab')}
    }
    return ( <div className="navbar">
            <div className="logoContainer">CityBank</div>
            <div className="pagesLink">
                <Link to={'/home'} onClick={handleClick} ref={home}><p className='colorStyle'>Home</p></Link>
                <Link to={'/customers'} onClick={handleClick} ref={customers}><p className='colorStyle'>Customers Details</p></Link>
                <Link to={'/transactions'} onClick={handleClick} ref={transactions}><p className='colorStyle'>Transactions</p></Link>    
            </div>
    </div> );
}
 
export default Navbar;