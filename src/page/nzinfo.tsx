import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialState = {};

export default function NZInfo() {
  const [payload, setPayload] = useState<any>(initialState);

  useEffect(() => {
    async function getNzInfo() {
      let payload = await axios.get('https://restcountries.eu/rest/v2/alpha/nz');
      setPayload(payload);
    }

    if (payload === initialState) {
      getNzInfo().catch(e => setPayload(e));
    }
  }, []);

  return (
    <div>
      This page fetches and displays data from a remote api every time it loads.
      <br />
      <pre>
        {JSON.stringify(payload, null, 2)}
      </pre>
    </div>
  )

};
