var numbers = {
  *[Symbol.iterator](){
    for(let i = 0; i <= 100; i++){
        yield i
    }
  }
};

// should print 0..100 by step 1
// 0 1 2 … 100
for (let num of numbers) {
  console.log(num);
}

function* range(start, end, step) {
    for(let i = start; i <= end; i+= step){
        yield i
    }
}

// should print 6..30 by step 4
// 6 10 14 … 30
for (let num of range(6, 30, 4)) {
  console.log(num);
}
