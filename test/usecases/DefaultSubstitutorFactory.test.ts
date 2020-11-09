import { DefaultSubstitutor } from "../../src/usecases/DefaultSubstitutor";
import { DefaultSubstitutorFactory } from "../../src/usecases/DefaultSubstitutorFactory";


test('when Base then return BaseSubstitutor', () => {

    const factory = new DefaultSubstitutorFactory();
    const substitutor = factory.create("Base");

    expect(substitutor).toBeInstanceOf(DefaultSubstitutor);

});


test('when CustomOne then return BaseSubstitutor', () => {

    const factory = new DefaultSubstitutorFactory();
    const substitutor = factory.create("CustomOne");

    expect(substitutor).toBeInstanceOf(DefaultSubstitutor);

});


test('when CustomTwo then return BaseSubstitutor', () => {

    const factory = new DefaultSubstitutorFactory();
    const substitutor = factory.create("CustomTwo");

    expect(substitutor).toBeInstanceOf(DefaultSubstitutor);

});

test('when unknown string then Throw with message', () => {

    const factory = new DefaultSubstitutorFactory();
    expect(() => factory.create("Other"))
        .toThrowError(new Error("Method not implemented."))

});