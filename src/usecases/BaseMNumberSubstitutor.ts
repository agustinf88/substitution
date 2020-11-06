import { NumberValues } from "../entities/types";
import { NumberSubstitutor } from "./interfaces";

export class BaseMNumberSubstitutor implements NumberSubstitutor{
    apply(values: NumberValues): number {
        throw new Error("Method not implemented.");
    }

}