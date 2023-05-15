import React, {useState} from 'react';
// @ts-ignore
import * as axios from "axios";
import Config from 'react-native-config';

function UsePost(){
    const[data,setData] = useState(null);
    const[loading,setLoading] = useState(true);
    const[error, setError] = useState(null);


    const post = async (apiData:any) =>{


        try {

            const {data: responseDAta} = await axios.post(Config.API_USERS , apiData);
            setData(data);
            setLoading(false);


        }
        catch (err){
            // @ts-ignore
            setError(err.message);
            setLoading(false);
        }

    };
        return {data, loading, error, post};
}


export default UsePost;
