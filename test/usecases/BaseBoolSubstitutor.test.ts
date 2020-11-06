import { BoolValues, NumberValues } from "../../src/entities/types";
import { BaseBoolSubstitutor } from "../../src/usecases/BaseBoolSubstitutor"
import { BoolSubstitutor, NumberStrategy, NumberSubstitutor } from "../../src/usecases/interfaces";

test('when A && B && !C then M', () => {
    const useCase = new BaseBoolSubstitutor();
    
    const boolValues = {
        a: true,
        b: true,
        c: false
    };
    
    const actual = useCase.apply(boolValues);
    const expected = "M";

    expect(actual).toBe(expect);

});

