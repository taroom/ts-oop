describe('should getter setter', function () {
    class Kategori {
        _name?: string;

        get name(): string {
            if (this._name) {
                return this._name;
            } else {
                return `Kosong Terasa`;
            }
        }

        set name(name: string) {// return void
            if (name && name !== "") {
                this._name = name;
            }
        }
    }

    it('should getter setter', function () {
        const category = new Kategori();
        console.info(category.name);

        category.name = 'Food';
        console.info(category.name);

        category.name = '';//coba dengan string kosong
        console.info(category.name);
    });
});