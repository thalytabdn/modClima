import React, { useState } from 'react';
import api from '../../services/api';

export default function FilterFarm() {
    const [name, setName] = useState('');
    const [mill, setMill] = useState([
        {
            id: '',
            name: '',
            harvests_id: ''
        }
    ]);

    const [showItem, setShowItem] = useState(false);
    
    async function handleFilterSubmit(){            
        try {
            const response = await api.get(`/mills?name=${name}`);
            setMill(response.data[0]); 

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
                        <h1>Filter mill</h1>
                    </section>
                    
                    <p>Name:</p>   
                        
                    <input 
                        type="text"
                        placeholder="name"
                        onChange={e => setName(e.target.value)}
                    />
                        
                    <button className="button" onClick={handleFilterSubmit}>Filter</button>
                </div>

                <div className={showItem ? "item-container" : "hidden"}>

                
                        
                    <div className="item">    
                        
                        <strong>ID: </strong>
                        <p>{mill.id}</p>    
                        <strong>NAME:</strong>
                        <p>{mill.name}</p>   
                        <strong>Harvest(s) Id(s): </strong>
                        <p className="ids">{mill.harvests_id}</p>    
        
                    </div> 
             

                </div>
               
            </div>
        </div>
    );
}