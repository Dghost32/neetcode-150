interface Characters {
  [character: string]: number;
}

function countCharacters(s: string): Characters {
  let count: Characters = {};

  for (let char of s) {
    count = {
      ...count,
      [char]: (count[char] || 0) + 1
    }
  }

  return count;
}

function areEqualCharacters(c1: Characters, c2: Characters): boolean {
  for (let [key, value] of Object.entries(c1)) {
    if (!c2[key] || c2[key] !== value) return false
  }
  return true

}

function isAnagramWtf(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let sCount: Characters = countCharacters(s);
  let tCount: Characters = countCharacters(t);

  return areEqualCharacters(sCount, tCount);
};


function isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join() === t.split("").sort().join()
}
