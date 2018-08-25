import 'moment-timezone';
import * as $ from 'jquery';
import * as html from './html';
import * as moment from 'moment';
import UiComponent from './UiComponent';

export default class Countdown implements UiComponent {
    constructor(private _datetime: moment.Moment,
                private _prefix: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        new html.Div(
            new html.Text(
                `${this._datetime.tz(moment.tz.guess()).format('llll')} \
                 (${this._prefix}${this._datetime.fromNow()})`
            ),
            {"class": "countdown"}
        ).appendTo(entry)
    }
}
