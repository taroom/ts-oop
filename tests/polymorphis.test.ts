describe('should do polymorphis', function () {

    class Pekerja {
        constructor(public name: string) {

        }
    }

    class Menejer extends Pekerja {

    }

    class WakilPresiden extends Menejer {

    }

    // method polymorph
    function katakanHalo(wapres: WakilPresiden): void {
        console.info(`Haloo, ${wapres.name}`);
    }

    it('doing polymorph', function () {
        let pekerja: Pekerja = new Pekerja("Waluyo");
        console.info(pekerja);

        pekerja = new Menejer("Suryadi");// bisa walaupun pekerja : Pekerja yang mana Menejer merupakan keturunan dari Pekerja
        console.info(pekerja);

        pekerja = new WakilPresiden("Yani");
        console.info(pekerja);// bisa walaupun pekerja : Pekerja yang mana WakilPresiden merupakan keturunan dari Pekerja

        // mari kita coba dengan dimulai dari menejer dulu. apakah bisa pekerja digunakan 
        let pekerja2: Menejer = new Menejer("Hadi");
        console.info(pekerja2);

        // percobaan method polymorph
        katakanHalo(pekerja2);

        pekerja2 = new WakilPresiden("Danu");
        console.info(pekerja2);

        // percobaan method polymorph
        katakanHalo(pekerja2);

        //nah ini dia
        pekerja2 = new Pekerja("Doni");//ternyata masih bisa walaupun dimulai dari anaknya dulu (Menejer)
        console.info(pekerja2);

        // percobaan method polymorph
        katakanHalo(pekerja2);
    });

    it('do method polymorph 2', () => {
        katakanHalo(new Pekerja("Jeki"));
        katakanHalo(new Menejer("Jeki"));
        katakanHalo(new WakilPresiden("Jeki"));
    });
});