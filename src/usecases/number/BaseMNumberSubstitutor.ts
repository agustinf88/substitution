import { NumberValues } from "../../entities/types";
import { NumberSubstitutor } from "./interfaces";

export class BaseMNumberSubstitutor implements NumberSubstitutor {
    public apply(values: NumberValues): number {
        return values.d + (values.d * values.e / 10);
    }

}