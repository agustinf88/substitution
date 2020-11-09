import { DefaultBodyParser } from "../../src/usecases/DefaultBodyParser";
import { SubstitutionOptions, NumberValues, BoolValues } from "../../src/entities/types";

test("When all parameters are present should return type created", () => {
    const parser = new DefaultBodyParser()

    const actual = parser.parse({
        strategy: "CustomOne",
        values: {
            a: true,
            b: true,
            c: true,
            d: 1,
            e: 1,
            f: 1
        }
    });

    const expected: SubstitutionOptions = {
        strategy: "CustomOne",
        boolValues: {
            a: true, b: true, c: true
        },
        numberValues: {
            d: 1, e: 1, f: 1
        }
    }

    expect(actual).toEqual(expected);
});


test("When strategy not present then use Base ", () => {
    const parser = new DefaultBodyParser()

    const actual = parser.parse({
        values: {
            a: true,
            b: true,
            c: true,
            d: 1,
            e: 1,
            f: 1
        }
    });

    const expected: SubstitutionOptions = {
        strategy: "Base",
        boolValues: {
            a: true, b: true, c: true
        },
        numberValues: {
            d: 1, e: 1, f: 1
        }
    }

    expect(actual).toEqual(expected);
});

test("When a is not present then throw with message", () => {
    const parser = new DefaultBodyParser()

    expect(() => parser.parse({
        values: {
            b: true,
            c: true,
            d: 1,
            e: 1,
            f: 1
        }
    })).toThrowError(new Error("'a' value must be present"));
})

test("When b is not present then throw with message", () => {
    const parser = new DefaultBodyParser()

    expect(() => parser.parse({
        values: {
            a: true,
            c: true,
            d: 1,
            e: 1,
            f: 1
        }
    })).toThrowError(new Error("'b' value must be present"));
})

test("When c is not present then throw with message", () => {
    const parser = new DefaultBodyParser()

    expect(() => parser.parse({
        values: {
            a: true,
            b: true,
            d: 1,
            e: 1,
            f: 1
        }
    })).toThrowError(new Error("'c' value must be present"));
})

test("When d is not present then throw with message", () => {
    const parser = new DefaultBodyParser()

    expect(() => parser.parse({
        values: {
            a: true,
            b: true,
            c: true,
            e: 1,
            f: 1
        }
    })).toThrowError(new Error("'d' value must be present"));
})

test("When e is not present then throw with message", () => {
    const parser = new DefaultBodyParser()

    expect(() => parser.parse({
        values: {
            a: true,
            b: true,
            c: true,
            d: 1,
            f: 1
        }
    })).toThrowError(new Error("'e' value must be present"));
})

test("When e is not present then throw with message", () => {
    const parser = new DefaultBodyParser()

    expect(() => parser.parse({
        values: {
            a: true,
            b: true,
            c: true,
            d: 1,
            e: 1
        }
    })).toThrowError(new Error("'f' value must be present"));
})