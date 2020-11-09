import { number } from "yargs"

export type BoolValues = {
    a: boolean,
    b: boolean,
    c: boolean
}

export type NumberValues = {
    d: number,
    e: number,
    f?: number
}

export type SubstitutionResult = {
    h: string,
    k: number
}

export type ErrorResponse = {
    code?: string,
    message: string
}
export type SubstitutionOptions = {
    strategy: string,
    boolValues: BoolValues,
    numberValues: NumberValues,
}