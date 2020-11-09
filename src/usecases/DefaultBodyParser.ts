
import { BoolValues, NumberValues, SubstitutionOptions } from "../entities/types";

import { BodyParser } from "./interfaces";

export class DefaultBodyParser implements BodyParser {
    parse(body: any): SubstitutionOptions {
        const { strategy = "Base", values } = body;

        if (values.a == null)
            throw new Error("'a' value must be present");

        if (values.b == null)
            throw new Error("'b' value must be present");

        if (values.c == null)
            throw new Error("'c' value must be present");

        if (values.d == null)
            throw new Error("'d' value must be present");

        if (values.e == null)
            throw new Error("'e' value must be present");

        if (values.f == null)
            throw new Error("'f' value must be present");

        const boolValues: BoolValues = {
            a: values.a,
            b: values.b,
            c: values.c
        };

        const numberValues: NumberValues = {
            d: values.d,
            e: values.e,
            f: values.f
        };

        const result: SubstitutionOptions = {
            strategy,
            boolValues,
            numberValues
        }

        return result;
    }

}