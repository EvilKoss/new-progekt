import React from 'react';
import style from './Users.module.css';

let Users = (props) => {
    if (props.Users.length === 0){
        props.setUsers (
            [
                {id: 1,photoURL: 'https://sun9-20.userapi.com/c629305/v629305300/44cda/_Cz_0blUsiY.jpg',
                followed: true, fullName: 'Kostya', status: 'I am a BOSS', location:{city:'Kiyv',country:'Ukraine'}},
                {id: 2,photoURL: 'https://i.pinimg.com/originals/88/00/76/8800768b99a0148df9c9491fb01a068d.jpg', 
                followed: false, fullName: 'Jenya', status: 'lover', location:{city:'Kiyv',country:'Ukraine'}},
                {id: 3,photoURL: 'https://i.pinimg.com/originals/29/2c/54/292c54ae1d1db8460a2848c9e7b511d5.png',
                followed: true, fullName: 'Pasha', status: 'I am a BIGBOSS', location:{city:'Kiyv',country:'Ukraine'}},
                {id: 4,photoURL: 'https://i.pinimg.com/originals/86/4f/fc/864ffc3dee1fd8359ab768c8f7b5ae80.png', 
                followed: false, fullName: 'Dima', status: 'I am a littleBOSS', location:{city:'Minsk',country:'Belarus'}},
                {id: 5,photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDSEPvZj4iYxZYw9V-FT1CnxrT8NlWrHpsK5EoHpSxuMRXJpf', 
                followed: true, fullName: 'Vova', status: 'I am a junior', location:{city:'Kiyv',country:'Ukraine'}},
                {id: 6,photoURL: 'https://vignette.wikia.nocookie.net/volfs/images/5/50/Wiki-background/revision/latest?cb=20161223104028&path-prefix=ru', 
                followed: false, fullName: 'Sergey', status: 'I am a courier', location:{city:'Kiyv',country:'Ukraine'}},
                {id: 7,photoURL: 'https://sun9-20.userapi.com/c629305/v629305300/44cda/_Cz_0blUsiY.jpg', 
                followed: true, fullName: 'Lexa', status: 'I am a BIGcourier', location:{city:'Kiyv',country:'Ukraine'}}
            ]
        )
    }

    return <div>
        {
            props.Users.map(u => <div key = {u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={style.usersPhoto}/>
                    </div>
                    <div>
                        { u.followed 
                            ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> 
                            : <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users;