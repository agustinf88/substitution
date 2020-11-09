import { BoolValues, NumberValues } from "../../src/entities/types";
import { DefaultSubstitutor } from "../../src/usecases/DefaultSubstitutor"
import { NumberSubstitutorFactory, NumberSubstitutor } from "../../src/usecases/number/interfaces";
import { BoolSubstitutor } from "../../src/usecases/boolean/interfaces";

test('Call BoolSustitutor NumberStrategy and NumberSubstitutor with correct parameters', () => {

    const a: BoolValues = { a: true, b: true, c: true };
    const b: NumberValues = { d: 1, e: 1, f: 1 }

    const boolUseCase: BoolSubstitutor = {
        apply: (v: BoolValues) => {
            expect(v).toEqual(a);
            return "M";
        }
    }

    const numberUseCase: NumberSubstitutor = {
        apply: (v: NumberValues) => {
            expect(v).toEqual(b);
            return 1;
        }
    }

    const strategy: NumberSubstitutorFactory = {
        create: (v: string) => {
            expect(v).toEqual("M");
            return numberUseCase
        }
    }

    const useCase = new DefaultSubstitutor(boolUseCase, strategy)


    const actual = useCase.apply(a, b)
    expect(actual.h).toEqual("M");
    expect(actual.k).toEqual(1);

});

test('When BoolSubstitutor Throws then DefaultSubstitutor should Throw same error', () => {
    const boolSubstitutor: BoolSubstitutor = {
        apply: (v: BoolValues) => { throw new Error("Bool combination not implemented"); }
    }

    const useCase = new DefaultSubstitutor(boolSubstitutor, undefined);

    expect(() => useCase.apply({ a: true, b: true, c: true }, undefined))
        .toThrowError(new Error("Bool combination not implemented"));

})