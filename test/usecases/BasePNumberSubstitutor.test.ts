import { BasePNumberSubstitutor } from "../../src/usecases/BasePNumberSubstitutor"

test("D = 2 and e = 5 and f = 2 should return 2.2353", () => {
    const useCase = new BasePNumberSubstitutor();

    const numberValues = {
        d: 2,
        e: 5,
        f: 2
    };

    const actual = useCase.apply(numberValues);

    expect(actual.toPrecision(5)).toEqual("2.2353");
});

