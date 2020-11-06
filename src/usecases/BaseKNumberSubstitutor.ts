import { NumberValues } from "../entities/types";
import { NumberSubstitutor } from "./interfaces";

export class BaseKNumberSubstitutor implements NumberSubstitutor {
    public apply(values: NumberValues): number {
        const { d, e, f } = values;
        return d - (d * f / 30);
    }
}