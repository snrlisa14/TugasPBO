const orang = {
    nama : "Lisa",
    alamat : "Cilegon",
    usia : 19,
    jk : "Perempuan",
    kendaraan : {
        mobil1 : "Pajero",
        mobil2 : "Lamborghini",
        motor : "Harley",
        pesawat : "Boeing"
    }
}

console.log(orang.nama)
console.log(orang.alamat)
console.log(orang.usia)
console.log(orang.jk)

console.log(`Nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, 
    berjenis kelamin ${orang.jk} dan sekarang berusia ${orang.usia} tahun`)

document.getElementById("objek").innerHTML = `Nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, 
berjenis kelamin ${orang.jk} dan sekarang berusia ${orang.usia} tahun`

console.log(orang.kendaraan.mobil1)
console.log(orang.kendaraan.mobil2)
console.log(orang.kendaraan.motor)
console.log(orang.kendaraan.pesawat)

const mahasiswa = {
    namaDepan: "Siti",
    namaBelakang: "Nurkholizah",
    namaLengkap: function(){
        return `${this.namaDepan} ${this.namaBelakang}`
    }
}

console.log(mahasiswa.namaLengkap());

function mahasiswaSIK(nama, kelas, angkatan){
    this.nama = nama,
    this.kelas = kelas,
    this.angkatan = angkatan
}

const siti = new mahasiswaSIK("Siti Nurkholizah", "A", "2023") 
const annisa = new mahasiswaSIK("Nur Annisa", "A", "2023") 
const dini = new mahasiswaSIK("Dini Dwi Andini", "A", "2023") 

console.log (siti.nama)
console.log (siti.kelas)
console.log (siti.angkatan)

console.log (dini.nama)
console.log (dini.kelas)
console.log (dini.angkatan)
