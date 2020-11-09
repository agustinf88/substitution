import { CustomOnePNumberSubstitutor } from "../../../src/usecases/number/CustomOnePNumberSubstitutor"

test("D = 2 and e = 5 and f = 2 should return 4.1", () => {
    const useCase = new CustomOnePNumberSubstitutor();

    const numberValues = {
        d: 2,
        e: 5,
        f: 2
    };

    const actual = useCase.apply(numberValues);

    expect(actual).toEqual(4.1);
});

