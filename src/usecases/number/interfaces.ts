import { NumberValues } from "../../entities/types";

export interface NumberSubstitutor {
    apply(values: NumberValues): number
}

export interface NumberSubstitutorFactory {
    create(value: string): NumberSubstitutor
}
