import 'moment-timezone';
import * as html from './html';
import * as moment from 'moment';
import UiComponent from './UiComponent';

export default class Countdown implements UiComponent {
    constructor(private _datetime: moment.Moment,
                private _prefix: string) {
    }

    appendTo(entry: HTMLElement | null): void {
        new html.Div(
            new html.Text(
                `${this._prefix}${this._datetime.fromNow()} \
                 (${this._datetime.tz(moment.tz.guess()).format('llll')})`
            ),
            {"class": "countdown"}
        ).appendTo(entry)
    }
}
