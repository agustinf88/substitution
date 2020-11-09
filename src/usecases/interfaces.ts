import { BoolValues, NumberValues, SubstitutionResult } from "../entities/types";

export interface BoolSubstitutor {
    apply(values: BoolValues): string
}

export interface NumberSubstitutor {
    apply(values: NumberValues): number
}

export interface NumberSubstitutorFactory {
    create(value: string): NumberSubstitutor
}


export interface SubstitutorFactory {
    create(value: string): Substitutor;
}

export interface Substitutor {
    apply(boolValies: BoolValues, numberValues: NumberValues): SubstitutionResult
}