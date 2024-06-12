describe('visibility on ts', function () {
    class Counter {
        private counter: number = 0;
        protected dcounter: number = 0;
        public tambah(): void {
            this.counter++;
        }

        tampilkan(): number { //defaultnya adalah public bisa ditulis seperti ini atau pakai public getCounter()
            return this.counter;
        }
    }

    it('do visibility', function () {
        const counting: Counter = new Counter();
        counting.tambah();
        counting.tambah();
        counting.tambah();
        expect(counting.tampilkan()).toBe(3);

    });

    it('access protected property', () => {
        class DoubleCounter extends Counter {
            public tambah(): void {
                this.dcounter += 2;
            }

            public tampilkan(): number {
                return this.dcounter;
            }
        }

        const doublecount: DoubleCounter = new DoubleCounter();
        doublecount.tambah();
        doublecount.tambah();
        doublecount.tambah();
        expect(doublecount.tampilkan()).toBe(6);
    });
});