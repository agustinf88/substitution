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

test('when !A && B && C then T', () => {
    const useCase = new BaseBoolSubstitutor();

    const boolValues = {
        a: false,
        b: true,
        c: true
    };

    const actual = useCase.apply(boolValues);

    expect(actual).toEqual("T");

});

test('when !A && !B && !C then throws with message Combination not implemented', () => {
    const useCase = new BaseBoolSubstitutor();

    const boolValues = {
        a: false,
        b: false,
        c: false
    };

    expect(() => useCase.apply(boolValues)) 
        .toThrowError(new Error("Combination not implemented"));

});


