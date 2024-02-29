import {useState, useEffect} from "react";
import { orders } from "../Types/Types";


const useFetch = () => {
    const [data, setData] = useState<Array<orders>>([]);

    useEffect(() => {
        fetch("http://localhost:3001/cleaningInfo")
          .then((result) => {
            return result.json();
          })
          .then((data) => {
            //console.log(data);
            setData((prevData) => {
              return [...prevData, data.data];
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

     return data;
}

export default useFetch;