import { NumberSubstitutor, NumberSubstitutorFactory } from "../interfaces";
import { BaseMNumberSubstitutor } from "./BaseMNumberSubstitutor";
import { BasePNumberSubstitutor } from "./BasePNumberSubstitutor";

export class BaseNumberSubstitutorFactory implements NumberSubstitutorFactory {
    create(value: string): NumberSubstitutor {
        if (value === "M") {
            return new BaseMNumberSubstitutor();
        } else if (value === "P"){
            return new BasePNumberSubstitutor();
        }
        throw new Error("Method not implemented.");
    }
}