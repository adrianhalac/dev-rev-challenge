function findDataEdges({ data }) {
  let minimums = {};
  let maximums = {};

  // function that iterates through the data and finds the min and max for each axis

  data.forEach((dataPoint) => {
    for (const property in dataPoint) {
      if (property === 'title') continue;

      // ignores 'title' property

      if (!minimums[property] || dataPoint[property] < minimums[property]) {
        minimums[property] = dataPoint[property];
      }

      if (!maximums[property] || dataPoint[property] > maximums[property]) {
        maximums[property] = dataPoint[property];
      }
    }
  });

  return { minimums, maximums };
}

export default findDataEdges;
