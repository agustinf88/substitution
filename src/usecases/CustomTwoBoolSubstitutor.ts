import { BoolValues } from "../entities/types";
import { BaseBoolSubstitutor } from "./BaseBoolSubstitutor"

export class CustomTwoBoolSubstitutor extends BaseBoolSubstitutor {
    
    protected isM({ a, b, c }: BoolValues): boolean {
        return (a && !b && c);
    }

    protected isP({ a, b, c }: BoolValues): boolean {
        return false;
    }

    protected isT({ a, b, c }: BoolValues): boolean {
        return (a && b && !c);
    }
};