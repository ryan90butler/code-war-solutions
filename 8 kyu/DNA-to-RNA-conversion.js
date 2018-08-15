// Create a function which translates a given DNA string into RNA

function DNAtoRNA(dna) {
  return dna.replace(/t/ig, "U");
}

console.log(DNAtoRNA('gCauttu'))