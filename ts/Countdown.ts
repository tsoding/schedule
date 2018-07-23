import 'moment-timezone';
import * as $ from 'jquery';
import * as moment from 'moment';
import UiComponent from './UiComponent';
import Div from './Div';
import Text from './Text';

export default class Countdown implements UiComponent {
    constructor(private _datetime: moment.Moment,
                private _prefix: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        new Div(
            new Text(
                `${this._datetime.tz(moment.tz.guess()).format('llll')} \
                 (${this._prefix}${this._datetime.fromNow()})`
            ),
            {"class": "countdown"}
        ).appendTo(entry)
    }
}
