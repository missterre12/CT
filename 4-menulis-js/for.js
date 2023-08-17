var sumAngkot = 10;
var angkotOperated = 6;
var noAngkot = 1;

while(noAngkot <= angkotOperated) {
    console.log('Angkot No. ' + noAngkot + ' well operated.');
noAngkot++;
}

for(noAngkot = angkotOperated + 1; noAngkot <= sumAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' can\'t operated.');
} 