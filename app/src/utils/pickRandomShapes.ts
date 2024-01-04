interface Array {
  name: string;
  source: string;
}

const pickRandomShapes = (array: Array[]) => {
  if (array.length <= 9) {
    return;
  }

  const copyArray = [...array];

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = copyArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
  }

  return copyArray.slice(0, 9);
}

export default pickRandomShapes
