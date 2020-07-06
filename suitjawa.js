var tanya = true;
while (tanya) {



    // menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');
    // menangkap pilihan pc 
    // membangkitkan bilangan random
    var comp = Math.random();
    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp <= 0.66) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    // menentukan rules
    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
        // Mengecek, apabila comp sama dengan string orang, jika iya, maka variabel hasil diisi menang, jika tidak, variabel hasil diisi kalah
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'memasukkan pilihan yang salah!!'
    }

    // tampilkan hasilnya
    alert('Anda memilih ' + p + '\n' + 'Computer memilih ' + comp + '\n' + 'Maka hasillnya : Kamu ' + hasil);
    tanya = confirm('Apakah anda ingin bermain lagi?');
}
alert('Terima kasih telah memainkan permainan ini');