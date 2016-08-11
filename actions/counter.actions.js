export function increaseCounterToValue(counter) {
    return {type: 'INCREASE_TO_VALUE', counter};
}

export function decCounterToValue() {
    return {type: 'DECREMENT_TO_VALUE'};
}

export function resetToDefaultValue() {
    return {type: 'DEFAULT_VALUE'};
}
