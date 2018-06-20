import * as $ from 'jquery';
import * as moment from 'moment';
import UiComponent from './UiComponent';

export default class Countdown implements UiComponent {
    constructor(private _datetime: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        // TODO(#1): Countdown.appendTo is not implemented
        entry.append($('<div>[COUNTDOWN TBD]</div>'))
    }
}
