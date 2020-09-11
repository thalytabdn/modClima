import React, { useState } from 'react';
import api from '../../services/api';

export default function CreateHarvest() {
    const [name, setName] = useState('');
    const [harvestsIds, setHarvestsIds] = useState(['']);

    function addNewId(id){
        setHarvestsIds([
            ...harvestsIds,
            ''
        ]) ;
    }

    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            name: name,
            harvests_id: harvestsIds
        }

        try {
            const response = await api.post(`/mills`, data);
            alert(`Successful registration! \n
                Id: ${response.data.id}\n
                Name: ${name}\n
                Harvest(s) Id(s): ${harvestsIds}`)
        } catch (error) {
            const response = error.response;
            alert(response.data.error);
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Register Mill</h1>
                </section>
                <form onSubmit={handleRegister}>  

                    <p>Name:</p>
                    <input 
                        type="text" 
                        onChange={e => setName(e.target.value)}        
                    /> 

                    <p>Insert Harvest(s) id(s) below:
                        <span>
                            <button className="button-id" type="button" onClick={addNewId}>
                                + Add id
                            </button> 
                        </span>
                    </p>   


                    {harvestsIds.map((farm,index) => {
                        return (
                            <div key= {index}>
                                <input 
                                    type="string" 
                                    placeholder="Harvest id"
                                    onChange={(e) => {
                                        harvestsIds[index] = e.target.value;
                                        setHarvestsIds([...harvestsIds]);
                                    }}
                                />
                            </div>
                        );
                    })}                   

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}