import { CustomTwoBoolSubstitutor } from "../../../src/usecases/boolean/CustomTwoBoolSubstitutor"

test('when A && B && !C then T', () => {
    const useCase = new CustomTwoBoolSubstitutor();

    const boolValues = {
        a: true,
        b: true,
        c: false
    };

    const actual = useCase.apply(boolValues);

    expect(actual).toEqual("T");

});

test('when A && B && C then throws with message Combination not implemented', () => {
    const useCase = new CustomTwoBoolSubstitutor();

    const boolValues = {
        a: true,
        b: true,
        c: true
    };

    expect(() => useCase.apply(boolValues)) 
        .toThrowError(new Error("Combination not implemented"));

});

test('A && !B && C then M', () => {
    const useCase = new CustomTwoBoolSubstitutor();

    const boolValues = {
        a: true,
        b: false,
        c: true
    };

    const actual = useCase.apply(boolValues);

    expect(actual).toEqual("M");

});

test('when !A && !B && !C then throws with message Combination not implemented', () => {
    const useCase = new CustomTwoBoolSubstitutor();

    const boolValues = {
        a: false,
        b: false,
        c: false
    };

    expect(() => useCase.apply(boolValues)) 
        .toThrowError(new Error("Combination not implemented"));

});


