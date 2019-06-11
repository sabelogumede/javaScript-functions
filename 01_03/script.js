//01. anonymous closures

// (function () {
//     var a = 1;
//     console.log('foo');
// })();


//----------------

//02. Understanding hoisting and variable scope

/**
 * Scope: life and death of a variable
 * Block scope: variable live within {brackets}
 * Function scope: variables live in functions
 * JS has a 'Scope chain'
 * Dangerous 'global' variables
 * Variable definitions are 'hoisted'
 *  */



function myDog() {
    var dogName = 'Fido';
    console.log(dogName + ' says woof!');
}


// function myDog() {
//     let dogName = 'Fido';
//     //nested function
//     function otherDog() {
//         //dogName = 'Rover';
//         console.log(dogName + ' says woof!');
//     }
//     //
//     otherDog();
// }

//myDog();

//------------

// 03. Creating and namespacing modules
// 04. Passing arguments and setting module defaults

/* 'Modules' let you reuse code across apps
/* 'Namespacing' protects variables
/*  'Return' statement communicates back
* */

// var ray = (function () {
//     var DEFAULTS = {
//         say: 'hello'
//     }

//     return {
//         speak: function () {
//             var myArguments = arguments[0] || '';
//             var statement = myArguments.say || DEFAULTS.say;
//             console.log(statement);
//         }
//     }
// })();

//------------------

// 05. Chaining module method calls

var ray = (function () {
    var DEFAULTS = {
        say: 'hello',
        speed: 'normal'
    }

    return {
        speak: function () {
            var myArguments = arguments[0] || '';
            var statement = myArguments.say || DEFAULTS.say;
            console.log(statement);
            return this;
        },
        run: function () {
            var myArguments = arguments[0] || '';
            var running = myArguments.speed || DEFAULTS.speed;
            console.log('running... ' + running);
            return this;
        }
    };
})();