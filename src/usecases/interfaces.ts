import { BoolValues, NumberValues, SubstitutionResult, SubstitutionOptions } from "../entities/types";

export interface SubstitutorFactory {
    create(value: string): Substitutor;
}

export interface Substitutor {
    apply(boolValues: BoolValues, numberValues: NumberValues): SubstitutionResult
}

export interface BodyParser {
    parse(body: any): SubstitutionOptions;
}