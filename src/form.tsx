import React, { useState } from "react";

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
        <div className='row'>
          <input
            id="FirstName"
            placeholder='first name'
            value={info.FirstName}
            onChange={(e) =>
              setInfo({ ...info, FirstName: e.currentTarget.value })
            }
          />
        </div>
        <div className='row'>
          <input
            id="LastName"
            placeholder='last name'
            value={info.LastName}
            onChange={(e) =>
              setInfo({ ...info, LastName: e.currentTarget.value })
            }
          />
        </div>
        <div className='row'>
          <input
            id="Email"
            placeholder='email'
            value={info.Email}
            onChange={(e) =>
              setInfo({ ...info, Email: e.currentTarget.value })
            }
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
