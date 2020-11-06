import { BaseNumberSubstitutorFactory } from "../../../src/usecases/number/BaseNumberSubstitutorFactory"
import {BaseMNumberSubstitutor} from "../../../src/usecases/number/BaseMNumberSubstitutor"
import {BasePNumberSubstitutor} from "../../../src/usecases/number/BasePNumberSubstitutor"
import {BaseTNumberSubstitutor} from "../../../src/usecases/number/BaseTNumberSubstitutor"

test("When unknown value the throws with description", () => {
    const useCase = new BaseNumberSubstitutorFactory();
    expect(() => useCase.create("A")).toThrowError(new Error("Method not implemented."));
});

test("When M should return instance of BaseMNumberSubstitutor", () => {
    const useCase = new BaseNumberSubstitutorFactory();
    const numberSubstitutor = useCase.create("M");

    expect(numberSubstitutor).toBeInstanceOf(BaseMNumberSubstitutor)
});

test("When P should return instance of BasePNumberSubstitutor", () => {
    const useCase = new BaseNumberSubstitutorFactory();
    const numberSubstitutor = useCase.create("P");

    expect(numberSubstitutor).toBeInstanceOf(BasePNumberSubstitutor)
});

test("When T should return instance of BaseTNumberSubstitutor", () => {
    const useCase = new BaseNumberSubstitutorFactory();
    const numberSubstitutor = useCase.create("T");

    expect(numberSubstitutor).toBeInstanceOf(BaseTNumberSubstitutor)
});