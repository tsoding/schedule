import 'moment-timezone';
import * as $ from 'jquery';
import * as moment from 'moment';
import UiComponent from './UiComponent';

export default class Countdown implements UiComponent {
    constructor(private _datetime: moment.Moment) {
    }

    asHTMLElement(): JQuery<HTMLElement> {
        return $(`<div title="${this._datetime.tz(moment.tz.guess()).format('llll')}">
                      ${this._datetime.fromNow()}
                  </div>`)
    }
}
