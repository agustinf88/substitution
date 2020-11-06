import { NumberSubstitutor, NumberSubstitutorFactory } from "../interfaces";
import { BaseMNumberSubstitutor } from "./BaseMNumberSubstitutor";

export class BaseNumberSubstitutorFactory implements NumberSubstitutorFactory {
    create(value: string): NumberSubstitutor {
        if (value === "M") {
            return new BaseMNumberSubstitutor();
        }
        throw new Error("Method not implemented.");
    }
}