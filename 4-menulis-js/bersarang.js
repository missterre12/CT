// membuat perubahan nilai yang sama antara baris dan kolom
// var s = '';
// for(var i = 0; i <6; i++) {
//     for(var j = 0; j <10; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// membuat urutan dari nilai kecil ke besar
// var s = '';
// for(var i = 0; i < 15; i++) {
//     for(var j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// membuat urutan dari nilai besar ke kecil 
var s = '';
for(var i = 10; i > 0; i--) {
    for(var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);