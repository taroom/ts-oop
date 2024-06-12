describe('should check Instance of', function () {
    it('instanceof', function () {
        class Pekerja {

        }

        class Menejer {

        }

        const joko: Pekerja = new Pekerja();
        const ilham: Menejer = new Menejer();

        console.info(typeof joko);
        console.info(typeof ilham);
        expect(joko instanceof Pekerja).toBe(true);
        expect(joko instanceof Menejer).toBe(false);
        expect(ilham instanceof Pekerja).toBe(false);
        expect(ilham instanceof Menejer).toBe(true);
    });
});