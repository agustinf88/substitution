import { BoolValues, NumberValues, SubstitutionResult } from "../entities/types";
import { BoolSubstitutor, NumberSubstitutorFactory, Substitutor } from "./interfaces";

export class BaseSubstitutor implements Substitutor {
    private readonly boolSubstitutor: BoolSubstitutor;
    private readonly numberSubstitutorFactory: NumberSubstitutorFactory;

    constructor(boolSubstitutor: BoolSubstitutor, numberSubstitutorFactory: NumberSubstitutorFactory) {
        this.boolSubstitutor = boolSubstitutor;
        this.numberSubstitutorFactory = numberSubstitutorFactory;
    }
    public apply(boolValues: BoolValues, numberValues: NumberValues): SubstitutionResult {
        const h = this.boolSubstitutor.apply(boolValues);

        const numberSubstitutor = this.numberSubstitutorFactory.create(h);

        const k = numberSubstitutor.apply(numberValues);

        return { h, k };
    }

}