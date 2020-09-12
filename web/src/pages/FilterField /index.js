import React, { useState } from 'react';
import api from '../../services/api';

export default function FilterField() {
    const [id, setId] = useState('');
    const [field, setField] = useState(
        {
            id: '',
            latitude: 0,
            longitude: 0
        }
    );
    const [showItem, setShowItem] = useState(false);
    
    async function handleFilterSubmit(){            
                    
        try {
            const response = await api.get(`/fields?id=${id}`);
            setField(response.data[0]); 
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
                        <h1>Filter Field</h1>
                    </section>
                    
                    <p>Filter id:</p>   
                        
                    <input
                        className="input-id" 
                        placeholder="id"
                        onChange={e => setId(e.target.value)}
                    />
                        
                    <button className="button" onClick={handleFilterSubmit}>Filter</button>
                </div>
                
                <div className={showItem ? "item-container" : "hidden"}>

                    <div className="item">    
                        <strong>ID: </strong>
                        <p className="result-id">{field.id}</p>    
                        <strong>LATITUDE:</strong>
                        <p>{field.latitude}</p>    
                        <strong>LONGITUDE: </strong>
                        <p>{field.longitude}</p>                                
                    </div>                

                </div>
            </div>
        </div>
    );
}