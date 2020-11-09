import { BaseBoolSubstitutor } from "./boolean/BaseBoolSubstitutor";
import { CustomTwoBoolSubstitutor } from "./boolean/CustomTwoBoolSubstitutor";
import { DefaultSubstitutor } from "./DefaultSubstitutor";
import { Substitutor, SubstitutorFactory } from "./interfaces";
import { BaseNumberSubstitutorFactory } from "./number/factory/BaseNumberSubstitutorFactory";
import { CustomOneNumberSubstitutorFactory } from "./number/factory/CustomOneNumberSubstitutorFactory";
import { CustomTwoNumberSubstitutorFactory } from "./number/factory/CustomTwoNumberSubstitutorFactory";

export class DefaultSubstitutorFactory implements SubstitutorFactory {
    create(value: string): Substitutor {
        if (value === "Base") {
            return new DefaultSubstitutor(new BaseBoolSubstitutor(), new BaseNumberSubstitutorFactory());
        }

        if (value === "CustomOne") {
            return new DefaultSubstitutor(new BaseBoolSubstitutor, new CustomOneNumberSubstitutorFactory());
        }

        if (value === "CustomTwo") {
            return new DefaultSubstitutor(new CustomTwoBoolSubstitutor(), new CustomTwoNumberSubstitutorFactory());
        }
        
        throw new Error("Method not implemented.");
    }

}