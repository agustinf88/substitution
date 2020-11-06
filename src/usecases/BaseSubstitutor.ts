import { BoolValues, NumberValues, SubstitutionResult } from "../entities/types";
import { BoolSubstitutor, NumberSubstitutor, NumberStrategy, Substitutor } from "./interfaces";

export class BaseSubstitutor implements Substitutor {
    private readonly  boolSubstitutor: BoolSubstitutor;
    private readonly numberStratety: NumberStrategy;

    constructor(boolSubstitutor: BoolSubstitutor, numberStrategy: NumberStrategy) {
        this.boolSubstitutor = boolSubstitutor;
        this.numberStratety = numberStrategy;
    }
    apply(boolValues: BoolValues, numberValues: NumberValues): SubstitutionResult {
        const h = this.boolSubstitutor.apply(boolValues);
        
        const numberSubstitutor = this.numberStratety.getNumberSubstitutor(h);

        const k = numberSubstitutor.apply(numberValues);

        return { h, k };
    }

}