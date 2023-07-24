//-------------------------------------

const add = function (a, b) {
    const result = a + b;
    return result;
};
console.log(add(5, 10));

//-------------------------------------

const fnA = function () {
    console.log('fnA working on');
    fnB();
};

const fnB = function () {
    console.log('fnB working on');
    console.log(value);
};

const fnC = function () {
    console.log('fnC working on');
};
