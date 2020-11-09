import { BoolValues, NumberValues, SubstitutionResult } from "../entities/types";

export interface SubstitutorFactory {
    create(value: string): Substitutor;
}

export interface Substitutor {
    apply(boolValues: BoolValues, numberValues: NumberValues): SubstitutionResult
}