describe('should doing custom error', function () {
    class ValidasiError extends Error {
        constructor(public pesanError: string) {
            super(pesanError);
        }
    }

    function gandakan(val: number): number {
        if (val < 0) throw new ValidasiError("Tidak boleh dong kurang dari 0");
        return val * val;
    }

    it('do custom error', function () {
        // percobaan menggunakan try catch
        try {
            const result = gandakan(-1);
            console.info(`angka ganda anda ${result}`);
        } catch (e) {
            if (e instanceof ValidasiError) {
                console.info(e.message);
            }
        }
    });
});