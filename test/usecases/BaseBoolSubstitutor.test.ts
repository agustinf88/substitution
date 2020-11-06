import { BaseBoolSubstitutor } from "../../src/usecases/BaseBoolSubstitutor"

test('when A && B && !C then M', () => {
    const useCase = new BaseBoolSubstitutor();

    const boolValues = {
        a: true,
        b: true,
        c: false
    };

    const actual = useCase.apply(boolValues);

    expect(actual).toEqual("M");

});

test('when A && B && C then P', () => {
    const useCase = new BaseBoolSubstitutor();

    const boolValues = {
        a: true,
        b: true,
        c: true
    };

    const actual = useCase.apply(boolValues);

    expect(actual).toEqual("P");

});

