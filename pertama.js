//Soal
let angka = 5956560159466056;
let hasil = "";

//Fungsi
function divideAndSort(angka) {
    let n = angka.toString() ;
    n = n.split("0");       // memisah data dari angka 0

    let olah = '';

    for (let i = 0; i < n.length; i++) {
        olah = n[i].split("");          // memecah angka menjadi array
        olah = olah.sort(function(b,c){return b-c});    //mengurutkan 
        olah = olah.join();
        olah = olah.replace(/,/g, "");     //menghapus tanda , 
        hasil += olah;          //menggabungkan angka
    }
    console.log(hasil);
}
    
   

// execute
divideAndSort(angka);
