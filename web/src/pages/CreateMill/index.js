import React from 'react';
import api from '../../services/api';


export default function CreateMIll() {
    return(
        <div className="container" id="create-mill">
          <form>
            <fieldset>
              <legend>Register Mill</legend>
              <input type='string' placeholder="Name"/>
            </fieldset>

            <fieldset>
              <legend>Insert Field(s) id(s) below:</legend>
              <input type='string' placeholder="Field id"/>
            </fieldset>

          </form>
        </div>
    );
}