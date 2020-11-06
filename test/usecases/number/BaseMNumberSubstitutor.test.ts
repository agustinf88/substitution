import { BaseMNumberSubstitutor } from "../../../src/usecases/number/BaseMNumberSubstitutor"

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

test("D = 2.5 and e = 2 should return 3", () => {
    const useCase = new BaseMNumberSubstitutor();

    const numberValues = {
        d: 2.5,
        e: 2,
    };

    const actual = useCase.apply(numberValues);

    expect(actual).toEqual(3);

});

test("D = 2.3 and e = 2 should return 2.76", () => {
    const useCase = new BaseMNumberSubstitutor();

    const numberValues = {
        d: 2.3,
        e: 2,
    };

    const actual = useCase.apply(numberValues);

    expect(actual).toEqual(2.76);

});