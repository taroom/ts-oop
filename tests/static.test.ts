describe('should doing static', function () {
    class Konfigurasi {
        // kata kunci static membuat properti NAMA bisa langsung dipanggil tanpa membuat object dulu
        static NAMA: string = "Belajar Yuk";
        static VERSI: string = "1.0.0";
        static KARANGAN: string = "Agus Sutarom";
    }

    class KelasBantuMatematika {
        // sangat cocok untuk utilitas grouping
        static hitungYuk(...values: number[]): number {
            console.info(`Versi kelas bantu : ${Konfigurasi.VERSI}`);//bisa mengakses langsung, jadi seperti dianggap variabel/fungsi global
            let total = 0;
            for (const val of values) {
                total += val;
            }

            return total;
        }
    }

    it('do static', function () {
        console.info(Konfigurasi.NAMA);// perhatikan tanpa membuat new object
        console.info(Konfigurasi.VERSI);
        console.info(Konfigurasi.KARANGAN);
        console.info(KelasBantuMatematika.hitungYuk(1, 2, 3, 4, 5));
    });
});