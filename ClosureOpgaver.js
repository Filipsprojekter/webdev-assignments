function buildFunctions() {
    var arr = [];

    for (i = 0; i < 3; i++)
    {
        let local = i;
        arr.push(()=> {console.log(local)});
    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// Opgave ( Closures - 2, function factories)

function makeGreeting(language){
    return function(firstname,lastname){
        if (language==='en'){console.log('Hello ' + firstname + ' ' + lastname)};
        if (language==='dk'){console.log('Hej ' + firstname + ' ' + lastname)};
        if (language==='es'){console.log('Hola ' + firstname + ' ' + lastname)};
    }
}

var greetEnglish = makeGreeting('en');
var greetDanish = makeGreeting('dk');
var greetSpanish = makeGreeting('es');

greetEnglish('John','Doe');
greetDanish('Henrik','Høltzer');
greetSpanish('Pablo','Fuentes');

// Løsning med ES6 Arrow function

function makeGreeting(language){
    return (firstname,lastname) => {
        if (language==='en'){console.log('Hello ' + firstname + ' ' + lastname)};
        if (language==='dk'){console.log('Hej ' + firstname + ' ' + lastname)};
        if (language==='es'){console.log('Hola ' + firstname + ' ' + lastname)};
    }
}

var greetEnglish = makeGreeting('en');
var greetDanish = makeGreeting('dk');
var greetSpanish = makeGreeting('es');

greetEnglish('John','Doe');
greetDanish('Henrik','Høltzer');
greetSpanish('Pablo','Fuentes');

// Opgave ( closures - 3, function factories)

function makeAdder(x){
    return (y) => {
        return x + y;
    };
};

var add5 = makeAdder(5);
var add10 = makeAdder(10);
var addHello = makeAdder('Hello ')

console.log(add5(2));
console.log(add10(2));
console.log(addHello('Filip'));

// Opgave (Callback Function)

function tellMeWhenDone(callback){
    let udenForFunction = "Jeg er en kartoffel"
    setTimeout(() => {console.log(udenForFunction)},3000);
}

tellMeWhenDone();
