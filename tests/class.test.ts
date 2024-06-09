describe('should support class init', function () {
    it('class init', function () {
        class Manusia { }
        class Hewan { }

        const ardi: Manusia = new Manusia();
        const kucing: Hewan = new Hewan();
    });

    it('class init with constructor', function () {
        class Manusia {
            constructor() {
                console.info(`Hallo aku manusia`);
            }
        }

        const ario: Manusia = new Manusia();
        const jugo = new Manusia();
    });

    it('class init with constructor and field', function () {
        class Manusia {
            readonly id: number;
            nama: string;
            alamat?: string;

            constructor(id: number, nama: string) {
                this.nama = nama;
                this.id = id;
                console.info(`Hallo aku manusia namaku ${this.nama}`);
            }
        }

        const aris: Manusia = new Manusia(1, 'Aris');
        aris.alamat = 'Surabaya';
        const arya: Manusia = new Manusia(2, 'Arya');
        arya.alamat = 'Madura';

        console.info(`Hallo saya ${aris.nama} alamat saya di ${aris.alamat}`);
        console.info(`Hallo saya ${aris.nama} alamat saya di ${aris.alamat}`);
        console.info(`Hallo saya ${arya.nama}`);
        console.info(`Hallo saya ${arya.nama}`);
    });

    it('class init with constructor and field with default value', function () {
        class Manusia {
            readonly id: number;
            nama: string = "adam";//ini menjadi default value
            alamat?: string;

            constructor(id: number) {
                this.id = id;
                console.info(`Hallo aku manusia namaku ${this.nama}`);
            }
        }

        const aris: Manusia = new Manusia(1);
        aris.nama = 'Aris Heriyanto';
        aris.alamat = 'Surabaya';
        const arya: Manusia = new Manusia(2);
        arya.nama = 'Arya Duta';
        arya.alamat = 'Madura';

        console.info(`Hallo saya ${aris.nama} alamat saya di ${aris.alamat}`);
        console.info(`Hallo saya ${aris.nama} alamat saya di ${aris.alamat}`);
    });
});