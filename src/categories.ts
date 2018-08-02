import { Tab, Enter, Space } from './consts';

const CONTROL_FIRST = 0
const CONTROL_LAST = 31
const PRINTABLE_FIRST = 32
const PRINTABLE_LAST = 126

const DIGIT_FIRST = 48
const DIGIT_LAST = 57
const UPPERCASE_FIRST = 65
const UPPERCASE_LAST = 90
const LOWERCASE_FIRST = 97
const LOWERCASE_LAST = 122

export function isControl(key: number) {
    return key >= CONTROL_FIRST
        && key <= CONTROL_LAST
}

export function isPrintable(key: number) {
    return key >= PRINTABLE_FIRST
        && key <= PRINTABLE_LAST
}

export function isDigit(key: number) {
    return key >= DIGIT_FIRST
        && key <= DIGIT_LAST
}

export function isUpperCase(key: number) {
    return key >= UPPERCASE_FIRST
        && key <= UPPERCASE_LAST
}

export function isLowerCase(key: number) {
    return key >= LOWERCASE_FIRST
        && key <= LOWERCASE_LAST
}

export function isWhiteSpace(key: number) {
    return key === Tab || key === Enter || key === Space
}

export function isPunctuation(key: number) {
    return isPrintable(key)
        && !isDigit(key)
        && !isLetter(key)
}

export function isLetter(key: number) {
    return isUpperCase(key) || isLowerCase(key)
}

export function isAlphanumeric(key: number) {
    return isLetter(key) || isDigit(key)
}
