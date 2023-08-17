// dilakukan pengulangan
var ask = true;
while(ask) {

// menangkap pilihan player
var p = prompt('choose: elephant, ant, human');

// menangkap pilihan computer 
// membangkitkan bilangan random 
var comp = Math.random();

if(comp < 0.34) {
    comp = 'elephant';
} else if (comp >= 0.34 && comp < 0.67) {
    comp = 'human';
} else {
    comp = 'ant';
}

var result = '';

// menentukan rules 
if(p == comp) {
    result = 'SAME!';
} else if(p == 'elephant') {
    // if(comp == 'human') {
    //     result = 'WIN!';
    // } else {
    //     result = 'LOOSE!';
    // }
    result = (comp == 'human') ? 'WIN!' : 'LOOSE!';
} else if(p == 'human') {
    result = (comp == 'elephant') ? 'LOOSE!' : 'WIN!';
} else if(p == 'ant') {
    result = (comp == 'human') ? 'LOOSE!' : 'WIN!';
} else {
    result = 'You entry the wrong choice!';
}

// tampilkan hasilnya
alert('You choose: ' + p + ' and Computer choose: ' + comp + '\nThe result is: You ' + result);

// konfirmasi pop up
ask = confirm('play again?');

}
alert('Thank You for Play The Game!😁');