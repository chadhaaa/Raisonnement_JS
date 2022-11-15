// test technique artify: Chadha Hajji

function maxOnesIndex(array, array_len) {
  let max_numb_ones = 0;

  let max_index_found = 0;

  let index_old_prev_zero = -1;
  let index_prev_zero = -1;

  for (let i = 0; i < array_len; ++i) {
    if (array[i] == 0) {
      if (i - index_old_prev_zero > max_numb_ones) {
        max_numb_ones = i - index_old_prev_zero;
        max_index_found = index_prev_zero;
      }

      index_old_prev_zero = index_prev_zero;
      index_prev_zero = i;
    }
  }

  if (array_len - index_old_prev_zero > max_numb_ones)
    max_index_found = index_prev_zero;

  return max_index_found;
}

// let array = [1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1];
// let array = [1, 1, 0, 1, 1, 0, 1, 1];
let array = prompt("Enter your sequence").split(",");
let array_len = array.length;
console.log("Result is " + maxOnesIndex(array, array_len));
