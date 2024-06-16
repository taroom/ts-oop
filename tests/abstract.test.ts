describe('should doing abstract class', function () {
    abstract class Pelanggan {
        readonly id: number;
        abstract nama: string;

        constructor(id: number) {
            this.id = id;
        }

        halo(): void {
            console.info(`Halllo`);
        }

        abstract sayHello(nama: string): void;
    }

    // saatnya menjadikan nyata
    class PelangganTetap extends Pelanggan {
        nama: string;// di kelas pelanggan dia abstract sehingga harus di deklarasikan ulang
        constructor(id: number, nama: string) {
            super(id);
            this.nama = nama;
        }

        sayHello(nama: string): void {// di kelas pelanggan dia abstract sehingga harus di deklarasikan ulang
            console.info(`Hallo ${nama}, nama saya adalah ${this.nama}`);
        }
    }

    it('do abstract', function () {
        // const pelanggan1 = new Pelanggan();//tidak bisa karena abstract class
        const pelanggan2: PelangganTetap = new PelangganTetap(1, "Roni");
        pelanggan2.sayHello("Haikal");
    });
});