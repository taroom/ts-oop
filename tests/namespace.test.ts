import { UtilitasMatematika } from "../src/math-utils";

describe('should doing namespace', function () {
    it('do namespace', function () {
        console.info(UtilitasMatematika.PHI);
        console.info(UtilitasMatematika.kuadrat(9));
        console.info(UtilitasMatematika.kubik(9));
        console.info(UtilitasMatematika.sum(9, 4, 5, 6, 7, 8, 10));
    });
});