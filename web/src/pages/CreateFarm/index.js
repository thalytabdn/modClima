import React, { useState } from 'react';
import api from '../../services/api';

export default function CreateFarm() {
    const [name, setName] = useState('');
    const [fieldsIds, setFieldsIds] = useState(['']);

    function addNewId(id){
        setFieldsIds([
            ...fieldsIds,
            ''
        ]) ;
    }

    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            name: name,
            fields_id: fieldsIds
        }

        try {
            const response = await api.post(`/farms`, data);
            alert(`Successful registration! \n
                Id: ${response.data.id}\n
                Name: ${name}\n
                Fields Ids: ${fieldsIds}`)
        } catch (error) {
            const response = error.response;
            alert(response.data.error);
        }

    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Register Farm</h1>
                </section>
                <form onSubmit={handleRegister}>                 
                    <p>Name:</p>
                    <input 
                        className="input-name"
                        type="string" 
                        placeholder="Name" 
                        onChange={e => setName(e.target.value.trim())}        
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
                            <div key= {index}>
                                <input 
                                    className='input-id'
                                    type="string" 
                                    placeholder="Field id"
                                    onChange={(e) => {
                                        fieldsIds[index] = e.target.value.trim();
                                        setFieldsIds([...fieldsIds]);
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