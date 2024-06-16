// #1
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne();
// #1.2 What will happen if the variable is declared
// with const instead of let ?

//#2
let b = 0;
function funcTwo() {
  b = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${b}`);
}

// #2.1 - run in the console:
funcThree();
funcTwo();
funcThree();
// #2.2 What will happen if the variable is declared
// with const instead of let ?

//#3
function funcFour() {
  window.c = "hello";
}

function funcFive() {
  alert(`inside the funcFive function ${c}`);
}

// #3.1 - run in the console:
funcFour();
funcFive();

//#4
let d = 1;
function funcSix() {
  let d = "test";
  alert(`inside the funcSix function ${d}`);
}

// #4.1 - run in the console:
funcSix();
// #4.2 What will happen if the variable is declared
// with const instead of let ?

//#5
let f = 2;
if (true) {
  let f = 5;
  alert(`in the if block ${f}`);
}
alert(`outside of the if block ${f}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// with const instead of let ?
