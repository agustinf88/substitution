import { DefaultNumberSubstitutorFactory } from "../../../src/usecases/number/DefaultNumberSubstitutorFactory"

test("When unknown value the throws with description", () => {
    const useCase = new DefaultNumberSubstitutorFactory();
    expect(() => useCase.create("A")).toThrowError(new Error("Method not implemented."));
});