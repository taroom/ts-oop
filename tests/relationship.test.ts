describe('should do relationship', function () {
    // bisa dilakukan tapi sebaiknya jangan gegabah memakai fitur ini, bikin puyeng
    class Meja {
        constructor(public name: string) {

        }
    }

    class Orang {
        constructor(public name: string) {

        }
    }

    it('doing relationship', function () {
        const orang: Orang = new Meja("Meja 1");
        console.info(orang.name);
    });
});