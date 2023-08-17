var sumAngkot = 10;
var angkotOperated = 6;
var noAngkot = 1;

for(var noAngkot = 1; noAngkot <= sumAngkot; noAngkot++) {

    if(noAngkot <= 6) {
        console.log('Angkot No. ' + noAngkot + ' well operated.');
    } else if(noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + ' still maintenance.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' can\'t operated.');
    }
}