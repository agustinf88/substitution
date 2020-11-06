import { BoolValues, NumberValues, SubstitutionResult } from "../entities/types";
import { BoolSubstitutor, NumberSubstitutor, NumberStrategy, Substitutor } from "./interfaces";

export class BaseSubstitutor implements Substitutor {
    boolSubstitutor: BoolSubstitutor;
    numberStratety: NumberStrategy;

    constructor(boolSubstitutor: BoolSubstitutor, numberStrategy: NumberStrategy) {
        this.boolSubstitutor = boolSubstitutor;
        this.numberStratety = numberStrategy;
    }
    apply(boolValies: BoolValues, numberValues: NumberValues): SubstitutionResult {

        throw new Error("Method not implemented.");
    }

}