import { CustomOneKNumberSubstitutor } from "../../src/usecases/CustomOneKNumberSubstitutor"

test("D = 2 and e = 5 and f = 2 should return 1.8667", () => {
    const useCase = new CustomOneKNumberSubstitutor();

    const numberValues = {
        d: 2,
        e: 5,
        f: 2
    };

    const actual = useCase.apply(numberValues);

    expect(actual).toEqual(4.1);
});

