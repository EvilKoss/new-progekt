import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to ="/news" activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
        </div>
        <div className={classes.item}>
            <h1>
                <NavLink to="/settings" activeClassName={classes.active}>Friends</NavLink>
            </h1>
            <div className={classes.friend}><img src='https://sun9-20.userapi.com/c629305/v629305300/44cda/_Cz_0blUsiY.jpg' /><br /><span>andrew</span></div>
            <div className={classes.friend}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRfX1YWJUCni6_g4QzdoxnQ8GxM8xuALW3ufX8X4Jmew0RDCI' /><br /><span>sasha</span></div>
            <div className={classes.friend}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdB-FEkneVuhT0be5jCSfToG_QhuXCO8ntKsrxuuqf_Cf6Eq9' /><br /><span>sveta</span></div>
        </div>
    </nav>
    )
}
export default Navbar;