import { BoolValues, NumberValues, SubstitutionResult } from "../entities/types";
import { BoolSubstitutor, NumberSubstitutor, NumberFactory, Substitutor } from "./interfaces";

export class BaseSubstitutor implements Substitutor {
    private readonly  boolSubstitutor: BoolSubstitutor;
    private readonly numberFactory: NumberFactory;

    constructor(boolSubstitutor: BoolSubstitutor, numberFactory: NumberFactory) {
        this.boolSubstitutor = boolSubstitutor;
        this.numberFactory = numberFactory;
    }
    apply(boolValues: BoolValues, numberValues: NumberValues): SubstitutionResult {
        const h = this.boolSubstitutor.apply(boolValues);

        const numberSubstitutor = this.numberFactory.getNumberSubstitutor(h);

        const k = numberSubstitutor.apply(numberValues);

        return { h, k };
    }

}