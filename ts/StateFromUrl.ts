import * as dto from './dto';
import Weekday from './Weekday';

export default class StateFromUrl {
    constructor(private _url: string) {
    }

    asPromise(): Promise<dto.State> {
        return fetch(this._url)
            .then((response) => response.json())
    }
}
