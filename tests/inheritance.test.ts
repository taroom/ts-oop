describe('should do inheritance', () => {
    class Pegawai { // parent class
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        kerja() {
            console.info(`Saya ${this.name} sedang bekerja`);
        }
    }

    class Menejer extends Pegawai {
    }

    class Direktur extends Menejer {
    }

    it('inheritance', () => {

        const employee: Pegawai = new Pegawai('Haris');
        console.info(employee.name);

        const menejer: Menejer = new Menejer('Joko');
        console.info(menejer.name);

        const direktur: Direktur = new Direktur('Hafiz');
        console.info(direktur.name);
        // expect('').toBe('');
    });
});