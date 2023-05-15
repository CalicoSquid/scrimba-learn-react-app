const puzzle = [
    { image: 'image1.jpg', sides: ['Army', 'Navy', 'Navy', 'Airforce'] },
    { image: 'image2.jpg', sides: ['Coast Guard', 'Army', 'Airforce', 'Coast Guard'] },
    { image: 'image3.jpg', sides: ['Coast Guard', 'Army', 'Navy', 'Airforce'] },
    { image: 'image4.jpg', sides: ['Army', 'Airforce', 'Navy', 'Army'] },
    { image: 'image5.jpg', sides: ['Airforce', 'Coast Guard', 'Army', 'Navy'] },
    { image: 'image6.jpg', sides: ['Airforce', 'Army', 'Navy', 'Coast Guard'] },
    { image: 'image7.jpg', sides: ['Navy', 'Coast Guard', 'Airforce', 'Army'] },
    { image: 'image8.jpg', sides: ['Army', 'Coast Guard', 'Airforce', 'Navy'] },
    { image: 'image9.jpg', sides: ['Navy', 'Army', 'Coast Guard', 'Airforce'] },
  ];
  
  function getMatchingSides(square1, square2) {
    const matchingSides = [];
    for (let i = 0; i < square1.sides.length; i++) {
      if (square1.sides[i] === square2.sides[(i + 2) % 4]) {
        matchingSides.push(i);
      }
    }
    return matchingSides;
  }
  
  function isSolutionValid(solution) {
    const services = ['Army', 'Navy', 'Coast Guard', 'Airforce'];
    const usedServices = new Set();
    const usedImages = new Set();
    for (let i = 0; i < solution.length; i++) {
      const square = solution[i];
      if (usedImages.has(square.image)) {
        return false;
      }
      usedImages.add(square.image);
      for (let j = 0; j < square.sides.length; j++) {
        if (!services.includes(square.sides[j])) {
          return false;
        }
        usedServices.add(square.sides[j]);
      }
    }
    return usedServices.size === 4 && usedImages.size === 9;
  }

  function solvePuzzle(solution = [], remaining = puzzle) {
    console.log("started")
  if (solution.length === 9) {
    if (isSolutionValid(solution)) {
      console.log('Solution found:');
      console.log(solution);
    }
    return;
  }

  // Try to place each remaining image
  for (let i = 0; i < remaining.length; i++) {
    const image = remaining[i];

    // Try to place the image next to each existing image in the solution
    for (let j = 0; j < solution.length; j++) {
      console.log('xxx')
      const existingImage = solution[j];

      // Get the matching sides between the two images
      const matchingSides = getMatchingSides(image, existingImage);
      if (matchingSides.length === 0) {
        continue;
      }

      // Try each possible rotation of the image
      for (let k = 0; k < matchingSides.length; k++) {
        const side = matchingSides[k];
        const rotatedImage = rotateImage(image, existingImage, side);
        solution.splice(j + 1, 0, rotatedImage);
        remaining.splice(i, 1);
        solvePuzzle(solution, remaining);
        remaining.splice(i, 0, image);
        solution.splice(j + 1, 1);
      }
    }
  }
}

  solvePuzzle(puzzle)