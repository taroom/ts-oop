describe('should do params properties', function () {
    it('param properties', function () {
        class Orang {
            constructor(public nama: string = "") {// hal seperti ini akan memudahkan kita untuk langsung membuat property class
                // secara otomatis nama akan terdaftar sebagai properti dari orang

            }

            sayNama(): void {
                console.info(`Hallo nama saya adalah ${this.nama}`);//langsung bisa akses disini
            }
        }

        const budi: Orang = new Orang();
        budi.nama = "Budi sulaksono";
        budi.sayNama();
    });
});