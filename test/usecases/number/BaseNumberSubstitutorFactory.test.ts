import { BaseNumberSubstitutorFactory } from "../../../src/usecases/number/BaseNumberSubstitutorFactory"
import {BaseMNumberSubstitutor} from "../../../src/usecases/number/BaseMNumberSubstitutor"

test("When unknown value the throws with description", () => {
    const useCase = new BaseNumberSubstitutorFactory();
    expect(() => useCase.create("A")).toThrowError(new Error("Method not implemented."));
});

test("When M should return instance of BaseNumberSubstitutor", () => {
    const useCase = new BaseNumberSubstitutorFactory();
    const numberSubstitutor = useCase.create("M");

    expect(numberSubstitutor).toBeInstanceOf(BaseMNumberSubstitutor)
});