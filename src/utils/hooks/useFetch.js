import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (endpoint, initial) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    let getData = axios.get(endpoint);

    getData.then((res) => setData(res.data)).catch((err) => console.log(err));
  }, [endpoint]);

  return { data };
};

export default useFetch;

/* 
const PruebaFetch = ()=>{

  const {data} = useFetch( "url" , []);

  return (

    <div>
      {
        data?.map( album => <h3 key={album.id}>{album.title}</h3> )
      }
    </div>

  )
}

export default PruebaFetch
*/
