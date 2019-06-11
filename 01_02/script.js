// 01 Using Functions as objects

// var calc = {
//     status: 'Awesome',
//     plus: function (a, b) {
//         return (
//             //The 'this' argument points to the object
//             console.log(this),
//             console.log(a + b),
//             console.log(arguments),
//             console.log(this.status)
//         )
//     }
// }
//invoke the function using dot notation
//calc.plus(2, 3);

//---------------

//02 Invoking instances through the constructor

/**
 * function can construct objects
 * Using the 'new' keyword
 * */

const Dog = function () {
    var name, breed;
    //console.log('this', this);
    // return console.dir(this);
}

/**
 *'new' creates a new instance of the object
 * Each new instance has it's own set of properties
 * 'this' argument points to the instance
 * Contructor names are capitalized
 */

firstdog = new Dog;
// console.log('firstdog:', firstdog);
firstdog.name = "Rover";
firstdog.breed = "Doberman"

//
secondDog = new Dog;
secondDog.name = "Fluffy";
secondDog.breed = "German Shepherd"

// console.log('name:', firstdog.name);
// console.log('breed:', firstdog.breed);
//
// console.log('name:', secondDog.name);
// console.log('breed:', secondDog.breed);


//---------------------

//03 Expanding functionality through prototype

/**
 * Prototypal Inheritance
 * Every object can be based on another
 * linking 'prototype' object gives you access
 * Multiple objects can inherit
 * All objects inherit properties
 * Declaration inherit from Function
 *  */

//speak method
const speak = function (saywhat) {
    //console.log('speak:', saywhat);
}
//Horse class
const Horse = function () {
    let name, breed;
}
//Cat class
const Cat = function () {
    let name, breed;
}

//extend my Horse class with method speak
Horse.prototype.speak = speak;

//extend my Cat class with method speak
Cat.prototype.speak = speak;

//horse
firstHorse = new Horse;
firstHorse.name = 'Rover';
firstHorse.breed = 'Arabian Horse';
firstHorse.speak('herrrrer!');
//cat
firstCat = new Cat;
firstCat.name = 'Mr Wiz';
firstCat.breed = 'none';
firstCat.speak('meow!');

// console.log('name:', firstHorse.name);
// console.log('breed:', firstHorse.breed);


// console.log('name:', firstCat.name);
// console.log('breed:', firstCat.breed);

//----------------------

//04. Understanding call - and - apply invocation

/**INVOKING THROUGH CALL AND APPLY
 * 
 * indirect invocation
 * Define the value of 'this' argument
 * Control: 'this' and arguments
 * 'Call' passes a value, Apply an array
 */

const speech = function (what) {
    console.log(what);
    console.log('this:', this.love);
    console.log('this:', this.normal);
}

var saySomething = {
    normal: 'meow',
    love: 'purr'
}

//using call on speech and parsing 'saySomething'
//speech.call(saySomething, saySomething.normal);

//apply allows for parsing of arrays ontop of objects
//speech.apply(saySomething, ['meouff']);

//-----------------------

//05 Using the arguments parameter

/**
 * allows for a list of elements passed into a function
 * An array like object
 * Numerical index arguments[x]
 * We can get the arguments.length
 * We can loop through arguments
 * Can't use all array methods like (push/pop..) 
 *  */

var plus = function () {
    var sum = 0;
    for (var i = arguments.length - 1; i >= 0; i--) {
        // console.log('i', i);
        // console.log('argument', i, ':', arguments[i]);
        sum += arguments[i];
    }
    return sum;
}
//takes in multiple input
//console.log(plus(2, 3, 2, 5, 1));

//---------------------

//06 Returning values

/**
 * returns an expression
 * Sort of optional
 * Only in function body
 * return sends something back to the caller
 * last statement: Stoping execution of the function
 * Careful with auto semicolon insertion
 *  */


//----------------

//07 Challenge: Social media navigation

/**
 * Create a self-executing function
 * locates one or more DOM elements
 * Replace DOM elements
 * 
 *  */

var socialMedia = {
    facebook: 'http://facebook.com/viewsource',
    twitter: 'http://twitter.com/planetoftheweb',
    flickr: 'http://flickr.com/planetotheweb',
    youtube: 'http://youtube.com/planetoftheweb'
};


var socialIcons = function () {
    var output = '<ul>',
        myList = document.querySelectorAll('.socialmediaicons');

    for (var key in arguments[0]) {

        output += '<li><a href="' + socialMedia[key] + '">' + '<img src="images/' + key + '.png" alt="icon for ' + key + '">' + '</a></li>';
    }

    output += '</ul>';

    for (var i = myList.length - 1; i >= 0; i--) {
        myList[i].innerHTML = output;
    }

}(socialMedia);