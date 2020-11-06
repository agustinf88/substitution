import { BoolValues, NumberValues, SubstitutionResult } from "../entities/types";

export interface BoolSubstitutor {
    apply(values: BoolValues): string
}

export interface NumberStrategy{
    getNumberSubstitutor(value: string): NumberSubstitutor
}

export interface NumberSubstitutor {
    apply(values: NumberValues): number
}

export interface Substitutor {
    apply(boolValies: BoolValues, numberValues: NumberValues): SubstitutionResult
}