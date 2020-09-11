import React, { useState } from 'react';
import api from '../../services/api';

export default function FilterFarm() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [harvest, setHarvest] = useState([
        {
            id: '',
            start_date: '',
            end_date: '',
            farms_id: ''
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
        
                    </div> 
             

                </div>
               
            </div>
        </div>
    );
}