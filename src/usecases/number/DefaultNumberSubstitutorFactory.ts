import { NumberSubstitutor, NumberSubstitutorFactory } from "../interfaces";

export class DefaultNumberSubstitutorFactory implements NumberSubstitutorFactory{
    create(value: string): NumberSubstitutor {
        throw new Error("Method not implemented.");
    }
}