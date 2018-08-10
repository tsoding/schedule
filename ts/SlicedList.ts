import List from './List';

export default class SlicedList<T> implements List<T> {
    constructor(private _input: List<T>,
                private begin: number,
                private end?: number) {
    }

    asArray(): Array<T> {
        return this._input.asArray().slice(this.begin, this.end);
    }
}
