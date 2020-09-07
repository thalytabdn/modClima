import React from 'react';
import { Link } from 'react-router-dom';
import * as TiIcons from 'react-icons/ti';

import { SideBarData } from './SideBarData';

import './styles.css';

export const SideBar = () => {

    return (
        <>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    <h1 className="sidebar-title">modClima
                        <span>
                            <TiIcons.TiWeatherWindyCloudy/>
                        </span>
                    </h1>

                    {SideBarData.map((item, index) => {
                        return (
                            <Link key={index} to={item.path} style={{textDecoration: 'none'}}>
                                <li className="nav-item">        
                                    <span className="nav-text">{item.title}</span>                        
                                </li>
                            </Link>                  
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}
