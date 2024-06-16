export namespace UtilitasMatematika {
    export const PHI: number = 3.14;
    export function sum(...val: number[]): number {
        let total = 0;
        for (const v of val) {
            total += v;
        }

        return total;
    }

    export function kuadrat(val: number): number {
        return val * val;
    }

    export function kubik(val: number): number {
        return val * val * val;
    }
}

export namespace UtilitasString {

}