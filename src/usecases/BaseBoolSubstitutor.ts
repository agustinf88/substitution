import { BoolValues } from "../entities/types";
import { BoolSubstitutor } from "./interfaces";

export class BaseBoolSubstitutor implements BoolSubstitutor {
    apply(values: BoolValues): string {
        const { a, b, c } = values;
        if (a && b && !c) {
            return "M";
        }
        throw new Error("Method not implemented.");
    }
};