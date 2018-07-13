import 'moment-timezone';
import * as $ from 'jquery';
import * as moment from 'moment';
import UiComponent from './UiComponent';

export default class Countdown implements UiComponent {
    constructor(private _datetime: moment.Moment,
                private _prefix: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        entry.append(
            $(`<div class="countdown">
                   ${this._datetime.tz(moment.tz.guess()).format('llll')} (${this._prefix}${this._datetime.fromNow()})
               </div>`)
        )
    }
}
