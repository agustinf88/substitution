import { BaseNumberSubstitutorFactory } from "../../../src/usecases/number/BaseNumberSubstitutorFactory"

test("When unknown value the throws with description", () => {
    const useCase = new BaseNumberSubstitutorFactory();
    expect(() => useCase.create("A")).toThrowError(new Error("Method not implemented."));
});
