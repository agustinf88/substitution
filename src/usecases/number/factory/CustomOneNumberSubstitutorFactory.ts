import { NumberSubstitutor, NumberSubstitutorFactory } from "../interfaces";
import { BaseMNumberSubstitutor } from "../BaseMNumberSubstitutor";
import { BaseTNumberSubstitutor } from "../BaseTNumberSubstitutor";
import { CustomOnePNumberSubstitutor } from "../CustomOnePNumberSubstitutor";

export class CustomOneNumberSubstitutorFactory implements NumberSubstitutorFactory {
    create(value: string): NumberSubstitutor {
        if (value === "M") {
            return new BaseMNumberSubstitutor();
        } else if (value === "P") {
            return new CustomOnePNumberSubstitutor();
        } else if (value === "T") {
            return new BaseTNumberSubstitutor();
        }
        throw new Error("Method not implemented.");
    }
}