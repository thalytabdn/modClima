import React from 'react';
import * as TiIcons from 'react-icons/ti';

import './styles.css';

function Home() {
    return (
        <div className="home page">
            <h1 className="home-title">
                modClima
                <span>
                    <TiIcons.TiWeatherWindyCloudy/>
                </span>
            </h1>
        </div>
    )
}

export default Home;