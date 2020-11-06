import { BoolValues } from "../../entities/types";
import { BoolSubstitutor } from "./../interfaces";

export class BaseBoolSubstitutor implements BoolSubstitutor {
    public apply(values: BoolValues): string {
        const { a, b, c } = values;
        if (this.isM(values)) {
            return "M";
        } else if (this.isP(values)) {
            return "P";
        } else if (this.isT(values)) {
            return "T";
        }
        throw new Error("Combination not implemented");
    }

    protected isM({ a, b, c }: BoolValues): boolean {
        return (a && b && !c);
    }

    protected isP({ a, b, c }: BoolValues): boolean {
        return (a && b && c);
    }

    protected isT({ a, b, c }: BoolValues): boolean {
        return (!a && b && c);
    }
};