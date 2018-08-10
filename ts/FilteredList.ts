import List from './List';

export default class FilteredList<T> implements List<T> {
    constructor(private _input: List<T>,
                private _predicate: (value: T, index: number) => boolean) {
    }

    asArray(): Array<T> {
        return this._input.asArray().filter(this._predicate)
    }
}
