import { useEffect } from 'react';
import h337 from 'heatmap.js';
import heatmapData from './HeatmapData';


export default function ReactHeatmap() {
  useEffect(() => {
    var heatmapInstance = h337.create({
      container: document.querySelector('#heatmap'),

    });
    
   heatmapInstance.addData(heatmapData.data);
    
  }, []);

  return (
    <>
      <div id="heatmap" style={{ width: "1349px", height: "1000px", margin: "100px", padding: "30px" }}>

      </div>

    </>
  );
}