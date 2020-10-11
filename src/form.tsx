import React, {useState} from "react";

import "./form.scss";

const defaultState = {
  FirstName: "",
  LastName: "",
  Email: ""
};

export default function Form() {
  const [info, setInfo] = useState(defaultState);

  return (
    <div id="UserDetailsForm">
      <form>
        <div className="row">
          <div className='inset-shadow'>
            <input
              id="FirstName"
              placeholder='first name'
              value={info.FirstName}
              onChange={(e) =>
                setInfo({...info, FirstName: e.currentTarget.value})
              }
            />
          </div>
          <div className='inset-shadow'>
            <input
              id="LastName"
              placeholder='last name'
              value={info.LastName}
              onChange={(e) =>
                setInfo({...info, LastName: e.currentTarget.value})
              }
            />
          </div>
          <div className='inset-shadow'>
            <input
              id="Email"
              placeholder='email'
              value={info.Email}
              onChange={(e) =>
                setInfo({...info, Email: e.currentTarget.value})
              }
            />
          </div>
          <label htmlFor="selections" className="select-label">
            <select id="selections">
              <option>First</option>
              <option>Second</option>
              <option>Third</option>
            </select>
          </label>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}
