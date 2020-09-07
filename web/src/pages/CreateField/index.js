import React, { useState } from 'react';
import api from '../../services/api';

export default function CreateField() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    
    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            latitude: latitude,
            longitude: longitude
        }

        await api.post(`/fields`, data).then((res) => {
            alert(`Successful registration! \n
                Id: ${res.data.id}\n
                Latitude: ${latitude}\n
                Longitude: ${longitude}`)
            }).catch(() => {
                alert('Registration error')
        });

    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Register Field</h1>
                </section>
                <form onSubmit={handleRegister}>              
                    <p>Latitude:</p>   
                    
                    <input 
                        placeholder="Latitude"
                        onChange={e => setLatitude(e.target.value)}
                    />

                    <p>Longitude:</p>
                    <input 
                        placeholder="Longitude"
                        onChange={e => setLongitude(e.target.value)}
                    />
                    
                
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}