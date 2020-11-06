import { NumberValues } from "../entities/types";
import { NumberSubstitutor } from "./interfaces";

export class CustomTwoKNumberSubstitutor implements NumberSubstitutor {
    public apply(values: NumberValues): number {
        const { d, e, f } = values;
        return f + d + (d * e / 100);
    }
}