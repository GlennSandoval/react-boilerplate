import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function NZInfo() {
  const [payload, setPayload] = useState<any>({});

  useEffect(() => {
    async function getNzInfo() {
      let payload = await axios.get('https://restcountries.eu/rest/v2/alpha/nz');
      setPayload(payload);
    }

    getNzInfo().catch(e => setPayload(e));
  });

  return (
    <div>
      <pre>
        {JSON.stringify(payload, null, 2)}
      </pre>
    </div>
  )

};
