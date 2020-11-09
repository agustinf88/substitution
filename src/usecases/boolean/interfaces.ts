import { BoolValues } from "../../entities/types";

export interface BoolSubstitutor {
    apply(values: BoolValues): string
}