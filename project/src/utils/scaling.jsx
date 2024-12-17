

export const calculateNetworkDimensions = (
  totalLayers,
  maxNeuronsInLayer,
  containerWidth,
  containerHeight
) => {
  const aspectRatio = containerWidth / containerHeight;
  const minSpacing = 80; // Minimum spacing between layers
  const minNeuronSpacing = 40; // Minimum vertical spacing between neurons

  const networkWidth = Math.max(minSpacing * (totalLayers - 1), containerWidth * 0.8);
  const networkHeight = Math.max(minNeuronSpacing * maxNeuronsInLayer, containerHeight * 0.8);

  return {
    width: networkWidth,
    height: networkHeight
  };
};

export const calculateInitialScale = (
  networkDimensions,
  containerDimensions
) => {
  const scaleX = containerDimensions.width / networkDimensions.width;
  const scaleY = containerDimensions.height / networkDimensions.height;
  return Math.min(scaleX, scaleY) * 0.9; // 90% of the maximum possible scale
};

export const clampScale = (scale, min = 0.5, max = 3) => {
  return Math.min(Math.max(scale, min), max);
};