import React  from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import style from './sideNav.css'

const SideNav_Items = () => {

    const items = [
        {
            type:'option',
            icon:'home',
            text:'Home',
            link: '/'
        },
        {
            type:'option',
            icon:'play',
            text:'Videos',
            link: '/videos'
        },
        {
            type:'option',
            icon:'file-text-o',
            text:'News',
            link: '/news'
        },
        {
            type:'option',
            icon:'sign-in',
            text:'Sign In',
            link: '/signin'
        },
        {
            type:'option',
            icon:'sign-out',
            text:'Sign Out',
            link: '/signout'
        },

    ]

    const showitems = items.map((item , i) => {
        return (
            <div className = {style.option}>
                <FontAwesome name = {item.icon}/>  
                <Link to={item.link}>{item.text}</Link>              
            </div>
        )
    })

        return (
            <div>
                {showitems}
            </div>
        )

}

export default SideNav_Items;