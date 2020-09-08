import React, { useState } from 'react';
import api from '../../services/api';

export default function CreateHarvest() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [farmsIds, setFarmsIds] = useState(['']);

    function addNewId(id){
        setFarmsIds([
            ...farmsIds,
            ''
        ]) ;
    }

    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            start_date: startDate,
            end_date: endDate,
            farms_id: farmsIds
        }

        try {
            const response = await api.post(`/harvests`, data);
            alert(`Successful registration! \n
                Id: ${response.data.id}\n
                Start Date: ${startDate}\n
                End Date: ${endDate}\n
                Farm(s) Id(s): ${farmsIds}`)
        } catch (error) {
            const response = error.response;
            alert(response.data.error);
        }

    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Register Harvests</h1>
                </section>
                <form onSubmit={handleRegister}>  

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

                    <p>Insert farm(s) id(s) below:
                        <span>
                            <button className="button-id" type="button" onClick={addNewId}>
                                + Add id
                            </button> 
                        </span>
                    </p>   


                    {farmsIds.map((farm,index) => {
                        return (
                            <div key= {index}>
                                <input 
                                    type="string" 
                                    placeholder="Farm id"
                                    onChange={(e) => {
                                        farmsIds[index] = e.target.value;
                                        setFarmsIds([...farmsIds]);
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