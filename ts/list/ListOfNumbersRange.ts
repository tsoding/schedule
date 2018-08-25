import List from './List';

export default class ListOfNumbersRange implements List<number> {
    constructor(private _low: number,
                private _high: number) {
    }

    asArray(): Array<number> {
        let result = [];

        for (let i = this._low; i <= this._high; ++i) {
            result.push(i);
        }

        return result;
    }
}
