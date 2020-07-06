// a = Jumlah baris
// i = Jumlah bintang
var s = '';
var maksbintang = 10;
for (nobaris = 1; nobaris <= maksbintang; nobaris++) {
    for (i = 1; i <= nobaris; i++) {
        s += '*';
    }
    s += '\n';
}
for (nobaris = maksbintang - 1; nobaris >= 1; nobaris--) {
    for (i = nobaris; i >= 1; i--) {
        s += '*';
    }
    s += '\n';
}
console.log(s)