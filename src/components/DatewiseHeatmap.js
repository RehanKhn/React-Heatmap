import React, { useState, useEffect } from 'react';


export default function DatewiseHeatmap() {
  const [data, setData] = useState([]);
  async function getData(data) {
    const response = await fetch('http://13.212.186.151:4200/heatmap/getHeatmap',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXJpYSBCIiwiaWF0IjoxNjA5Nzc3NTY5LCJleHAiOjE2NDA4ODE1Njl9.pv-lteC3SMGjcdBacFRHLhrf8EABgpY99jzzdVW-FpA'
        },
        body: JSON.stringify(data)
      }
    );
    return await response.json();
  }
  useEffect(() => {
    getData()
  }, [])
  getData()
    .then(data => {
      console.log(data);
    });
  return (
    <>

    </>
  );
}
