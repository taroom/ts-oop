describe('should overriding', function () {
    class Pekerja {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hallo ${name} nama saya ${this.name}`);
        }
    }

    class Menejer extends Pekerja {
        sayHello(name: string): void {
            console.info(`Hallo ${name} nama saya ${this.name} saya manajer kamu disini`);
        }
    }

    it('overriding', function () {
        const yanto: Menejer = new Menejer("Yanto Supriadi");

        yanto.sayHello('Alif');
    });

    it('super method call', () => {
        class OperatorMesin extends Pekerja {
            sayHello(name: string): void {
                super.sayHello(name);
                console.info(`saya operator mesin disini`);
            }
        }
        const yanti: OperatorMesin = new OperatorMesin('Yanti');
        yanti.sayHello('Alif')
    });
});