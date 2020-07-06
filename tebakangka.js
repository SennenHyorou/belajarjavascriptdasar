var angkamin = 1,
    angkamax = 100;

var main = true;
while (main) {
    // Menentukan angka input player
    var nyawa = 10;
    // Generate angka random untuk computer (1-100)
    var angkaComm = Math.round(Math.random() * (angkamax - angkamin) + angkamin);

    // Rules
    while (nyawa != 0) {
        var hasil = '';
        if (nyawa < 10) {
            var angkaPlayer = prompt('Silahkan memilih angka dari 1-100');
        } else {
            var angkaPlayer = prompt('Selamat datang, \n  Silahkan memilih angka dari 1-100');
        }

        // Menentukan apakah inputannya nomor atau bukan
        if (isNaN(angkaPlayer) || !angkaPlayer) {
            if (nyawa == 1) {
                hasil = "Maaf, anda salah input lagi, kesempatan anda habis, angka yang benar ialah " + angkaComm;
                nyawa = 0;
            } else {
                nyawa--;
                hasil = 'Anda salah input,tolong masukkan angka, ayo tebak lagi, kesempatan anda sisa ' + nyawa;
            }
        } else {
            if (angkaPlayer == angkaComm) {
                hasil = 'Selamat, anda menebak dengan benar, yaitu angka ' + angkaComm;
                nyawa = 0;
            } else if (angkaPlayer > angkaComm) {
                if (nyawa == 1) {
                    hasil = "Maaf, kesempatan anda habis, angka yang benar ialah " + angkaComm;
                    nyawa = 0;
                } else {
                    nyawa--;
                    hasil = 'Angka tebakanmu ketinggian, ayo tebak lagi, kesempatan anda sisa ' + nyawa;
                }
            } else if (angkaPlayer < angkaComm) {
                if (nyawa == 1) {
                    hasil = "Maaf, kesempatan anda habis, angka yang benar ialah " + angkaComm;
                    nyawa = 0;
                } else {
                    nyawa--;
                    hasil = 'Angka tebakanmu kerendahan, ayo tebak lagi, kesempatan anda sisa ' + nyawa;
                }
            }
        }
        alert(hasil);
    }
    main = confirm('Apakah anda ingin ulang bermain?');
}
alert('Terima kasih telah bermain');