import { BaseMNumberSubstitutor } from "../../src/usecases/BaseMNumberSubstitutor"

test("D = 2 and e = 5 should return 3", () => {
    const useCase = new BaseMNumberSubstitutor();

    const numberValues = {
        d: 2,
        e: 5,
    };

    const actual = useCase.apply(numberValues);

    expect(actual).toEqual(3);

});

test("D = 4 and e = 10 should return 8", () => {
    const useCase = new BaseMNumberSubstitutor();

    const numberValues = {
        d: 4,
        e: 10,
    };

    const actual = useCase.apply(numberValues);

    expect(actual).toEqual(8);

});

test("D = 5 and e = 5 should return 7.5", () => {
    const useCase = new BaseMNumberSubstitutor();

    const numberValues = {
        d: 5,
        e: 5,
    };

    const actual = useCase.apply(numberValues);

    expect(actual).toEqual(7.5);

});