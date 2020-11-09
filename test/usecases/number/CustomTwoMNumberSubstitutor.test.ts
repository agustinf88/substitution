import { CustomTwoMNumberSubstitutor } from "../../../src/usecases/number/CustomTwoMNumberSubstitutor"

test("D = 3 and e = 5 and f = 2 should return 1.8667", () => {
    const useCase = new CustomTwoMNumberSubstitutor();

    const numberValues = {
        d: 3,
        e: 5,
        f: 2
    };

    const actual = useCase.apply(numberValues);

    expect(actual).toEqual(5.15);
});

