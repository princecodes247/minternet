let selectTrait = (data, weightPos = 1) => {
  let total = 0;
  for (let i = 0; i < data.length; ++i) {
    total += data[i][weightPos];
  }

  const threshold = Math.random() * total;

  total = 0;
  let selectedVariant;
  for (let i = 0; i < data.length - 1; ++i) {
    total += data[i][weightPos];

    if (total >= threshold) {
      selectedVariant = data[i][0];
      return selectedVariant;
    }
  }

  selectedVariant = data[data.length - 1][0];
  return selectedVariant
};

export default selectTrait;