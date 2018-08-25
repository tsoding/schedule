import List from './List';

export default class ConcatLists<T> implements List<T> {
    constructor(private _input: List<T>[]) {
    }

    asArray(): Array<T> {
        let result: Array<T> = [];

        this._input.forEach(
            (xs) => {
                result = result.concat(xs.asArray())
            }
        )

        return result;
    }
}
