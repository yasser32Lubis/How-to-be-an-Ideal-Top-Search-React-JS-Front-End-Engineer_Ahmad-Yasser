class kendaraan{
    var totalRoda = 0;
    var kecepatanPerjam = 0;
    
}
//tipe kendaraan
class mobil extends kendaraan{
     //laju kendaran perjam
    void berjalan();{
        tambahKecepatan(10);
    }
    //fungsi menambah kecepatan kendaraan
    function tambahKecepatan(kecepatanBaru){
        kecepatanPerjam = kecepatanPerjam + kecepatanBaru;
    }
}
void main();{
    mobilCepat = new mobil();
    for(let i = 0; i < 3; i++){
        console.log(mobilCepat.berjalan());
    }
    
    mobilLamban = new mobil();
    mobilLamban.berjalan();
}