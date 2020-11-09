import { BoolValues, NumberValues, SubstitutionResult } from "../entities/types";
import { Substitutor } from "./interfaces";
import { BoolSubstitutor } from "./boolean/interfaces";
import { NumberSubstitutorFactory } from "./number/interfaces";

export class DefaultSubstitutor implements Substitutor {
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