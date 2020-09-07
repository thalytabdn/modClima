import React, { useState } from 'react';
import api from '../../services/api';

export default function CreateFarm() {
    const [name, setName] = useState(['']);
    const [fieldsIds, setFieldsIds] = useState([{id: ''}]);

    console.log(fieldsIds);

    function addNewId(id){
        const fieldsCopy = Array.from(fieldsIds);
        fieldsCopy.push({id: id});
        setFieldsIds(fieldsCopy);        
    }

    function updateIds({target}, index){
        const fieldsCopy = Array.from(fieldsIds);
        fieldsCopy.splice(index,1, {id: target.value});
        setFieldsIds(fieldsCopy);
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Register Farm</h1>
                </section>
                <form>                 
                    <p>Name:</p>
                    <input 
                        type="string" 
                        placeholder="Name" 
                        onChange={e => setName(e.target.value)}        
                    /> 
                    <p>Insert field(s) id(s) below:
                        <span>
                            <button className="button-id" type="button" onClick={addNewId}>
                                + Add id
                            </button> 
                        </span>
                    </p>   


                    {fieldsIds.map((field,index) => {
                        return (
                            
                            <input 
                                key= {index}
                                type="string" 
                                placeholder="Field id"
                                onChange={e => 
                                    setFieldsIds(index, 'id', e.target.value)
                                }
                            />
                        
                        );
                    })}                   

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}