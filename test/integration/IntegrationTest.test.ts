import { DefaultSubstitutor } from "../../src/usecases/DefaultSubstitutor";
import { DefaultSubstitutorFactory } from "../../src/usecases/DefaultSubstitutorFactory";


test('When Base with M return 3', () => {
    const factory = new DefaultSubstitutorFactory();
    const baseSubstitutor = factory.create("Base");

    const result = baseSubstitutor.apply({ a: true, b: true, c: false }, { d: 2, e: 5 });

    expect(result).toEqual({ h: "M", k: 3 });
})

test('When Base with P return 2.2353', () => {
    const factory = new DefaultSubstitutorFactory();
    const baseSubstitutor = factory.create("Base");

    const { h, k } = baseSubstitutor.apply({ a: true, b: true, c: true }, { d: 2, e: 5, f: 2 });


    expect(h).toEqual("P");
    expect(k.toPrecision(5)).toEqual("2.2353");

})

test('When CustomOne with P return 4.1', () => {
    const factory = new DefaultSubstitutorFactory();
    const baseSubstitutor = factory.create("CustomOne");

    const { h, k } = baseSubstitutor.apply({ a: true, b: true, c: true }, { d: 2, e: 5, f: 2 });


    expect(h).toEqual("P");
    expect(k).toEqual(4.1);

})

test('When Base with T return 1.8667', () => {
    const factory = new DefaultSubstitutorFactory();
    const baseSubstitutor = factory.create("Base");

    const { h, k } = baseSubstitutor.apply({ a: false, b: true, c: true }, { d: 2, e: 5, f: 2 });


    expect(h).toEqual("T");
    expect(k.toPrecision(5)).toEqual("1.8667");

})

test('When Base not implemented the throw error', () => {
    const factory = new DefaultSubstitutorFactory();
    const baseSubstitutor = factory.create("Base");

    expect(() => baseSubstitutor.apply({ a: true, b: false, c: true }, { d: 2, e: 5, f: 2 }))
        .toThrowError(new Error("Combination not implemented"))

})

test('When CustomTwo with T return 1.8667', () => {
    const factory = new DefaultSubstitutorFactory();
    const baseSubstitutor = factory.create("CustomTwo");

    const { h, k } = baseSubstitutor.apply({ a: true, b: true, c: false }, { d: 2, e: 5, f: 2 });


    expect(h).toEqual("T");
    expect(k.toPrecision(5)).toEqual("1.8667");
})

test('When CustomTwo with M return 5.15', () => {
    const factory = new DefaultSubstitutorFactory();
    const baseSubstitutor = factory.create("CustomTwo");

    const { h, k } = baseSubstitutor.apply({ a: true, b: false, c: true }, { d: 3, e: 5, f: 2 });


    expect(h).toEqual("M");
    expect(k).toEqual(5.15);
})