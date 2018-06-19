import * as $ from 'jquery';
import UiComponent from './UiComponent';
import * as moment from 'moment';

export default class Countdown implements UiComponent {
    constructor(private _datetime: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        // TODO: Countdown.appendTo is not implemente
        entry.append($('<div>[COUNTDOWN TBD]</div>'))
    }
}
