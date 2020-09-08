import React, { useState } from 'react';
import api from '../../services/api';

import { FiTrash2 } from 'react-icons/fi';

export default function FilterFarm() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [harvest, setHarvest] = useState([
        {
            id: 0,
            start_date: '',
            end_date: '',
            end_date: ''
        }
    ]);

    const [showItem, setShowItem] = useState(false);
    
    async function handleFilterSubmit(){            
        try {
            const response = await api.get(`/harvests?start_date=${startDate}&end_date=${endDate}`);
            setHarvest(response.data[0]); 

            if(showItem === false){
                setShowItem(!showItem);
            }
        } catch (error) {
                const response= error.response;
                alert(response.data.error);
        }
    }  

    return(
        <div className="register-container">
            <div className="content">

                <div className="input-section">
                    <section>
                        <h1>Filter Harvest</h1>
                    </section>
                    
                    <p>Start Date:</p>   
                        
                    <input 
                        type="date"
                        onChange={e => setStartDate(e.target.value)}
                    />

                    <p>End Date:</p>   

                    <input 
                        type="date"
                        onChange={e => setEndDate(e.target.value)}
                    />
                        
                    <button className="button" onClick={handleFilterSubmit}>Filter</button>
                </div>

                <div className={showItem ? "item-container" : "hidden"}>

                
                        
                    <div className="item">    
                        
                        <strong>ID: </strong>
                        <p>{harvest.id}</p>    
                        <strong>START DATE:</strong>
                        <p>{harvest.start_date}</p>   
                        <strong>END DATE:</strong>
                        <p>{harvest.end_date}</p>   
                        <strong>Farm(s) Id(s): </strong>
                        <p className="ids">{harvest.farms_id}</p>    
        
                        <button type="button">
                            <FiTrash2 size={20}  color="#a8a8b3"></FiTrash2>
                        </button>
                                
                    </div> 
             

                </div>
               
            </div>
        </div>
    );
}