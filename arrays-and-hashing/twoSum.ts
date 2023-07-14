interface Memory {
  [num: number]: number;
}

function twoSum(nums: number[], target: number): [number, number] {
  let mem: Memory = {};

  for (let index = 0; index < nums.length; index++) {
    let current = nums[index];
    let needed = target - current;
    if (mem[needed] || mem[needed] === 0) return [index, mem[needed]];

    mem[current] = index;
  }

  return [-1, -1];
}
