
import React, { useState, useEffect } from 'react';

export default function FetchData() {
  
  useEffect(() => {
    const url = 'http://13.212.186.151:4200/heatmap/getHeatmap';
    const requestOption = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXJpYSBCIiwiaWF0IjoxNjA5Nzc3NTY5LCJleHAiOjE2NDA4ODE1Njl9.pv-lteC3SMGjcdBacFRHLhrf8EABgpY99jzzdVW-FpA",
      },
      body: JSON.stringify({ title: 'Heatmap Data' })
    };
    fetch(url, requestOption)
      .then(async response => {
        const data = await response.json();
        
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log(data);
      })
      .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      });
  });
  return (
    <>
    </>
  )
}