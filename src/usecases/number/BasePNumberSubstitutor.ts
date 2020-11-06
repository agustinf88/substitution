import { NumberValues } from "../../entities/types";
import { NumberSubstitutor } from "./../interfaces";

export class BasePNumberSubstitutor implements NumberSubstitutor {
    public apply(values: NumberValues): number {
        const { d, e, f } = values;
        return d + (d * (e - f) / 25.5);
    }
}