// For Loop example

const forLoop = () => {

    let snacks = ['pudding', 'cake', 'chips', 'cookies']

    for ( let i = 0; i < snacks.length; i++) {
        console.log('yummy in my tummy!')
    }

}

// console.log(forLoop())


// conditionals mixed with for loops
// Let's make a For Loop that will print out the even numbers between 1 and 10.
const evens = () => {

    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log("this number is divisible by 2 " + i)
        }
    }

}

// console.log(evens())

// CHECK FOR UNDERSTANDING

const snackTime = () => {
    const fridgeContents = ['leftovers', 'condiments', 'mystery tupperware', 'chocolate cake']

    for (let check = 1; check <= 1; check++) {
        if (fridgeContents.includes('rice krispies')) {
            console.log('Hooray! Found cake!')
        } else {
            console.log('no treats for me!')
        }
    }

}
// console.log(snackTime())



// write a while loop that will print out "even" or "odd" for each number between 1-10.
const whileLoop = () => {
    let i = 1;

    while (i < 10) {
        if (i % 2 == 0) {
            console.log('even ' + i)
        } else {
            console.log('odd ' + i)
        }
        i++
    }
}
// console.log(whileLoop())

const sheep = () => {
    let sheepCounted = 0;

    while (sheepCounted < 10) {
        console.log("I have counted " + sheepCounted + " sheep");
        
    }
    
}

console.log(sheep())









// const awesomeAnimals = () => {

//     let animals = ['cat', 'dog', 'fish', 'sloth']

//     for (let i = 0; i < animals.length; i++) {
//        console.log(animals[i] = "Awesome " + animals[i])
//     }
// }

// console.log(awesomeAnimals())