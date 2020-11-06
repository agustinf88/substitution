import { BoolValues, NumberValues } from "../src/entities/types";
import { BaseSubstitutor } from "../src/usecases/BaseSubstitutor"
import { BoolSubstitutor, NumberStrategy, NumberSubstitutor } from "../src/usecases/interfaces";

test('Call BoolSustitutor NumberStrategy and NumberSubstitutor with correct parameters', () => {

    const a: BoolValues = { a: true, b: true, c: true };
    const b: NumberValues = { d: 1, e: 1, f: 1 }

    const boolUseCase: BoolSubstitutor = {
        apply: (v: BoolValues) => {
            expect(v).toBe(a);
            return "M";
        }
    }

    const numberUseCase: NumberSubstitutor = {
        apply: (v: NumberValues) => {
            expect(v).toBe(b);
            return 1;
        }
    }

    const strategy: NumberStrategy = {
        getNumberSubstitutor: (v: string) => {
            expect(v).toBe("M");
            return numberUseCase}
    }

    const useCase = new BaseSubstitutor(boolUseCase, strategy)

    
    const actual = useCase.apply(a, b)
    expect(actual.h).toBe("M");
    expect(actual.k).toBe(1);
    
})