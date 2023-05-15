import React, {useState, useEffect} from 'react';
// @ts-ignore
import * as axios from "axios";
import Config from 'react-native-config';


function UseFetch(){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData =  async () =>{

      try{

          const {data:response} = await axios.get(Config.API_URL);
          setData(data);
          setLoading(false);


      }
      catch (err){
           // @ts-ignore
          setError(err.message);
          setLoading(false)

      }

    }

    useEffect(() => {

        fetchData();

    }, []);

      return { data, loading, error};
}


export default UseFetch;
