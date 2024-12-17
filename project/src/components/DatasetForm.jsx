import React from 'react'
import { Database } from 'lucide-react';

export default function DatasetForm({ onLayerChange, onDatasetChange, isDatasetSelected }) {
  const selectDataset = (dataset) => {
    onDatasetChange(dataset);
    onLayerChange([
      { id: crypto.randomUUID(), neurons: dataset.inputLayer }, // Input layer
      { id: crypto.randomUUID(), neurons: 4 }, // Hidden layer
      { id: crypto.randomUUID(), neurons: dataset.outputLayer } // Output Layer
    ])
    isDatasetSelected(true);
  }
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg max-w-2xl'>
      <div className='flex items-center gap-2 mb-6'>
        <Database className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-800">Select Dataset</h2>
      </div>
      <div className='mt-6 flex gap-4'>
        <button className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' onClick={() => { selectDataset({ name: "spiral", inputLayer: 2, outputLayer: 3 }) }}>Spiral</button>
        <button className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' onClick={() => { selectDataset({ name: "iris", inputLayer: 4, outputLayer: 1 }) }}>Iris</button>
        <button className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' onClick={() => { selectDataset({ name: "xor", inputLayer: 2, outputLayer: 1 }) }}>XOR</button>
        <button className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' onClick={() => { selectDataset({ name: "sin", inputLayer: 1, outputLayer: 1 }) }}>Sin</button>
      </div>
    </div>
  )
}

