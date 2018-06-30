import 'moment-timezone';
import * as $ from 'jquery';
import * as moment from 'moment';
import UiComponent from './UiComponent';

export default class Countdown implements UiComponent {
    constructor(private _datetime: moment.Moment) {
    }

    appendTo(entry: JQuery<HTMLElement>): JQuery<HTMLElement> {
        entry.append(
            $(`<div class="countdown">
                   ${this._datetime.tz(moment.tz.guess()).format('llll')} (${this._datetime.fromNow()})
               </div>`)
        )
        return entry;
    }
}
