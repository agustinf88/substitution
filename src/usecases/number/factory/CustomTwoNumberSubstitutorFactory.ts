import { NumberSubstitutor, NumberSubstitutorFactory } from "../interfaces";
import { BaseTNumberSubstitutor } from "../BaseTNumberSubstitutor";
import { BasePNumberSubstitutor } from "../BasePNumberSubstitutor";
import { CustomTwoMNumberSubstitutor } from "../CustomTwoMNumberSubstitutor";

export class CustomTwoNumberSubstitutorFactory implements NumberSubstitutorFactory {
    create(value: string): NumberSubstitutor {
        if (value === "M") {
            return new CustomTwoMNumberSubstitutor();
        } else if (value === "P") {
            return new BasePNumberSubstitutor();
        } else if (value === "T") {
            return new BaseTNumberSubstitutor();
        }
        throw new Error("Method not implemented.");
    }
}