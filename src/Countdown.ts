import * as $ from 'jquery';
import * as moment from 'moment';
import UiComponent from './UiComponent';

export default class Countdown implements UiComponent {
    constructor(private _datetime: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        // TODO: Countdown.appendTo is not implemente
        entry.append($('<div>[COUNTDOWN TBD]</div>'))
    }
}
