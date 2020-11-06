import { BoolValues } from "../entities/types";
import { BoolSubstitutor } from "./interfaces";

export class BaseBoolSubstitutor implements BoolSubstitutor{
    apply(values: BoolValues): string {
        throw new Error("Method not implemented.");
    }
};