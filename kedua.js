let angka = 5;


function cetak_gambar(number) {
    let star1 = "--- panjang ---";
    let star2 = "*  =   =   =   *";
    let star3 = "*  *   *   *   *";

    for (i = 0; i <= 5; i++) {
        if(i === 0) {
            console.log(star1);
        } else  if(i ===1) {
            console.log(star2);
        } else if(i === 2) {
            console.log(star2);
        } else if(i === 4) {
            console.log(star2);
        } else if(i === 5) {
            console.log(star2);
        } else {
            console.log(star3);
        }
    }
}

//execute
cetak_gambar(angka);
