import List from './List';

export default class MappedList<T, U> implements List<U> {
    constructor(private _input: List<T>,
                private _mapper: (value: T, index: number) => U) {
    }

    asArray(): Array<U> {
        return this._input.asArray().map(this._mapper);
    }
}
