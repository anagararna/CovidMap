import {useState, useEffect } from "react";

const ApiConsum = (endPoint) => {
  const apiURL= `https://disease.sh/v3/covid-19/${endPoint}`;
  console.log(endPoint);
  const [data, setData] = useState([]);
      
  useEffect(() => {
    fetch(apiURL)
      .then(async (response) => {
       if (response.ok) setData(await response.json());
    });
  },[apiURL]);
  console.log(data);
  return data;
}

export default ApiConsum;

  