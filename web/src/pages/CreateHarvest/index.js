import React, { useState } from 'react';
import api from '../../services/api';

export default function CreateHarvest() {
    const [farmsIds, setFarmsIds] = useState([
        {id: ''}
    ]);

    function addNewId(){
        setFarmsIds([...farmsIds, {}])
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Register Harvest</h1>
                </section>
                <form>                 
                    <p>Start Date</p>
                    <input type="date" placeholder="Name" /> 

                    <p>End Date</p>
                    <input type="date" placeholder="Name" /> 

                    <p>Insert farm(s) id(s) below:
                        <span>
                            <button className="button-id" type="button" onClick={addNewId}>
                                + Add id
                            </button> 
                        </span>
                    </p>      

                    {farmsIds.map(() => {
                        return (
                            <div>
                                <input key={farmsIds.id} type="string" placeholder="Farm id"/>
                            </div>
                        );
                    })}

                   

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}