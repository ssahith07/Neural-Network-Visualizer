import './App.css';
import React, { useState ,useRef } from 'react';
import { NetworkForm } from './components/NetworkForm';
import DatasetForm from './components/DatasetForm';
import NetworkVisualization from './components/NetworkVisualization';
import axios from 'axios';
import LossHistory from './components/LossHistory';
// import { Sidebar } from './components/Sidebar';
function App() {
  const [dataset, setDataset] = useState({ name: "spiral", inputLayer: 2, outputLayer: 3 });

  const[isDatasetSelected , setIsDatasetSelected] = useState(false);

  const [layers, setLayers] = useState([]);

  const [networkConfig, setNetworkConfig] = useState({ layers });
  
  const [data , setData] = useState({dataset , networkConfig});

  const [lossResponse , setLossResponse] = useState("")
  
  
  const visulizationRef = useRef(null);


  const handleGenerateNetwork = async () => {
    await setNetworkConfig({ layers });
    
    if(visulizationRef.current){
      visulizationRef.current.scrollIntoView({behavior: "smooth"})
    }
    setData({dataset , layers});
  }

  const handleTrainNetwork = async () => {
    const response = await axios.post('http://localhost:5000/train', data)
    setLossResponse(response.data.loss)
    console.log(response.data.loss);
  }


  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-8">
            {/* <Sidebar /> */}
            <DatasetForm onDatasetChange={setDataset}
              onLayerChange={setLayers} 
              isDatasetSelected={setIsDatasetSelected}/>
            <NetworkForm
              layers={layers}
              onLayersChange={setLayers}
              onGenerateNetwork={handleGenerateNetwork}
              onDatasetChange={setDataset}
              isDatasetSelected={isDatasetSelected}
              onTrainNetwork={handleTrainNetwork}

            />
            <LossHistory lossResponse={lossResponse}/>
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ height: '600px' }} ref={visulizationRef}>
              <NetworkVisualization config={networkConfig } />
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
