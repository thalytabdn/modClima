import React, { useState } from 'react';
import api from '../../services/api';

export default function FilterFarm() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [farm, setFarm] = useState(
        {
            id: '',
            name: '',
            fields_id: ''
        }
    );

    const [showItem, setShowItem] = useState(false);
    
    async function handleFilterSubmit(){            
                    
        try {
            const response = await api.get(`/farms?id=${id}&name=${name}`);
            setFarm(response.data[0]); 

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
                        <h1>Filter Farm</h1>
                    </section>
                    
                    <p>Name:</p>   
                        
                    <input 
                        placeholder="name"
                        onChange={e => setName(e.target.value)}
                    />

                    <p>Id:</p> 

                    <input 
                        placeholder="id"
                        onChange={e => setId(e.target.value)}
                    />
                        
                    <button className="button" onClick={handleFilterSubmit}>Filter</button>
                </div>

                <div className={showItem ? "item-container" : "hidden"}>

                    <div className="item">    
                    
                        <strong>ID: </strong>
                        <p>{farm.id}</p>    
                        <strong>NAME:</strong>
                        <p>{farm.name}</p>    
                        <strong>Field(s) Id(s): </strong>
                        <p className="ids">{farm.fields_id}</p>    
                            
                    </div>
                </div>
               
            </div>
        </div>
    );
}