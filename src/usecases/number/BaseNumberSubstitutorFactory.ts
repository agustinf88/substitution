import { NumberSubstitutor, NumberSubstitutorFactory } from "../interfaces";

export class BaseNumberSubstitutorFactory implements NumberSubstitutorFactory{
    create(value: string): NumberSubstitutor {
        throw new Error("Method not implemented.");
    }
}