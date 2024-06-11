describe('should super constructor', function () {
    it('super constructor', function () {
        class Manusia {
            name: string;

            constructor(name: string) {
                this.name = name;
            }
        }

        class Raksasa extends Manusia {
            berat: number;
            constructor(name: string, berat: number) {
                super(name);
                this.berat = berat;
            }
        }

        const jarjit: Raksasa = new Raksasa("Jarjit", 800);

        expect(jarjit.name).toBe('Jarjit');
        expect(jarjit.berat).toBe(800);

    });
});