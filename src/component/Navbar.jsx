import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'
import { Button } from '@mui/material';
const Navbar = () => {
    const home = useRef(null)
    const customers = useRef(null)
    const transactions = useRef(null)
    const modalRef = useRef(null);
    const [logOutBox, setLogout] = useState(false)
    const handleClick = (e) => {
        home.current.classList.remove('activeTab')
        customers.current.classList.remove('activeTab')
        transactions.current.classList.remove('activeTab')
        if (e.target.innerText === "Home") { home.current.classList.add('activeTab') }
        if (e.target.innerText === "Customers Details") { customers.current.classList.add('activeTab') }
        if (e.target.innerText === "Transactions") { transactions.current.classList.add('activeTab') }
    }
    const handleLogOut = () => {
        localStorage.clear(); window.location.replace('/')
    }
    const handleClickOutsideModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setLogout(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideModal);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideModal);
        };
    }, []);
    return (<div className="navbar">
        <div className="logoContainer">CityBank</div>
        <div className="pagesLink">
            <Link to={'/home'} onClick={handleClick} ref={home}><p className='colorStyle'>Home</p></Link>
            <Link to={'/customers'} onClick={handleClick} ref={customers} className='inactive-element' title='go premium to see customers details'><p className='colorStyle'>Customers Details</p></Link>
            <Link to={'/transactions'} onClick={handleClick} ref={transactions}><p className='colorStyle'>Transactions</p></Link>
            <Button onClick={() => { setLogout(true) }} title='logout'>{`👤 ${localStorage.getItem('name')}`}</Button>
            {logOutBox && <div ref={modalRef} className='logOutModal'>👤<br />{`${localStorage.getItem('name')}`}<br /><Button onClick={handleLogOut}>Logout</Button></div>}
        </div>
    </div>);
}

export default Navbar;