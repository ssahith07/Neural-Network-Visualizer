export const generateRandomValues = (neurons) => {
    return neurons.map(neuron => ({
        ...neuron,
        value: Math.random(),
        gradient: 0,
        isActive: false
    }));
};

export const generateRandomWeights = (connections) => {
    return connections.map(conn => ({
        ...conn,
        value: Math.random(),
        gradient: 0,
        isActive: false
    }));
};