import { NumberValues } from "../../entities/types";
import { NumberSubstitutor } from "../interfaces";

export class CustomOnePNumberSubstitutor implements NumberSubstitutor {
    public apply(values: NumberValues): number {
        const { d, e, f } = values;
        return 2 * d + (d * e / 100);
    }
}