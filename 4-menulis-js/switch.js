// var number = parseInt(prompt('Please entry your number below:'));

// if(number === 1) {
//     alert('You entry the number 1.');
// } else if(number === 2) {
//     alert('You entry the number 2.');
// } else if (number === 3) {
//     alert('You entry the number 3.');
// } else {
//     alert('You entry the wrong number!');
// }

// var number = parseInt(prompt('Please entry your number:'));

// switch(number) {
//     case 1:
//         alert('You entry the number 1.');
//         break;
//     case 2:
//         alert('You entry the number 2.');
//         break;
//     case 3:
//         alert('You entry the number 3.');
//         break;
//     default:
//         alert('You entry the wrong number!');
//         break; 
// }

// var number = prompt('Please entry your number:');

// switch(number) {
//     case '1':
//         alert('You entry the number 1.');
//         break;
//     case '2':
//         alert('You entry the number 2.');
//         break;
//     case '3':
//         alert('You entry the number 3.');
//         break;
//     default:
//         alert('You entry the wrong number!');
//         break; 
// }

var item = prompt('Please entry your food or drink: \n (Example: rice, meat, milk, hamburger, softdrink)');

switch(item) {
    case 'rice': 
    case 'meat': 
    case 'milk':
        alert('Food or Drink was healthy.');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('Food or Drink was not healthy.');
        break;
    default:
        alert('You entry the wrong food or drink!');
        break;
}