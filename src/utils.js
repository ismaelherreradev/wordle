export const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const range = (start, end, step = 1) => {
  // Create an array to store the numbers in
  let output = [];

  // If the end value is not provided, assume 0 as the start value
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  // Iterate from start to end, adding step each time
  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  // Return the array
  return output;
};
