class Kapal {
    constructor(nama, jenis, panjang, lebar){
        this.nama = nama,
        this.jenis = jenis,
        this.panjang = panjang,
        this.lebar = lebar
    }
    infoKapal(){
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran 
        ${this.panjang} m x ${this.lebar} m.`
    }
}
class kapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang){
        super(nama, jenis, panjang, lebar)
        this.kapasitasPenumpang = kapasitasPenumpang
    }

    infoKapal(){
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.
            kapasitasPenumpang} orang`
    }
}

const kapalFerry = new kapalPenumpang("Budiono Siregar", "Ferry", 200, 100, 600);
console.log(kapalFerry.infoKapal());

class tiketPenumpang extends kapalPenumpang{
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang, namaPenumpang, nomorTiket) {
        super(nama, jenis, panjang, lebar, kapasitasPenumpang); // Memanggil constructor dari kapalPenumpang
        this.namaPenumpang = namaPenumpang;
        this.nomorTiket = nomorTiket;
        this.statusTiket = "Belum Valid"; // Status tiket awal
    }

    validasiTiket() {
        this.statusTiket = "Valid";
        return `Tiket atas nama ${this.namaPenumpang} dengan nomor tiket ${this.nomorTiket} telah divalidasi.`
    }

    infoTiket() {
        return `Nama Penumpang: ${this.namaPenumpang}, Nomor Tiket: ${this.nomorTiket}, Status Tiket: ${this.statusTiket}. Kapal: ${super.infoKapal()}`;
    }
}

const TiketPenumpang = new tiketPenumpang("Pesiar Allure of The Seas", "kapal",  1187, 215, 6780, "Lisanur", "A632BC");

console.log(TiketPenumpang.validasiTiket()); // Memvalidasi tiket
console.log(TiketPenumpang.infoTiket()); // Menampilkan informasi tiket setelah validasi