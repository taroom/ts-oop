describe('should do interface as class contract', () => {
    it('interface contract', () => {
        // expect('').toBe('');

        interface PunyaNama {
            nama: string
        }

        interface BisaBerkataHalo {
            katakanHalo(nama: string): void;
        }

        class Orang implements PunyaNama, BisaBerkataHalo {
            nama: string;
            constructor(nama: string) {
                this.nama = nama;
            }

            katakanHalo(nama: string): void {
                console.info(`Hallo ${nama} nama saya ${this.nama}`);
            }
        }

        const yanto: Orang = new Orang('Yanto');

        yanto.katakanHalo('Suryanto');
    });
});