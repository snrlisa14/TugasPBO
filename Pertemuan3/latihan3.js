class Sensor{
    constructor(nama, lokasi){
        this.nama = nama, 
        this.lokasi = lokasi
        this._status = "Mati"
    }

    aktifkan(){
        this._status = "Aktif"
        return `Sensor ${this.nama} di lokasi ${this.lokasi} telah diaktifkan`
    }

    nonaktifkan(){
        this._status = "Mati"
        return `Sensor ${this.nama} di lokasi ${this.lokasi} telah dinonaktifkan`
    }

    getStatus(){
        return `Sensor ${this.nama} di lokasi ${this.lokasi} sedang dalam kondisi ${this._status}`
    }
}

class sensorPasut extends Sensor {
    constructor(lokasi){
        super("Pasut", lokasi);
    }

    getStatus(){
        if (this._status === "Aktif"){
            return `${super.aktifkan()} dan sedang mengirimkan data ke kantor pusat`;
    
        } else {
                return `${super.nonaktifkan()}`;
            }  
        }
    }
          
    const sensorPasutSelatSunda = new sensorPasut ("Selat Sunda");
    console.log (sensorPasutSelatSunda.aktifkan());
    console.log (sensorPasutSelatSunda.getStatus());
  
        