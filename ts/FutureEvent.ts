import * as $ from 'jquery';
import * as moment from 'moment';
import UiComponent from './UiComponent';
import Countdown from './Countdown';

export default class FutureEvent implements UiComponent {
    constructor(private _datetime: moment.Moment,
                private _title: string,
                private _description: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): JQuery<HTMLElement> {
        let element = $(`<div class="event">`);
        entry.append(element);

        element.append($(`<h1><a href="https://twitch.tv/tsoding">${this._title}</a></h1>`));
        new Countdown(this._datetime, "starts ").appendTo(element);
        element.append($(`<div class="description">${this._description}</div>`));

        return entry;
    }
}
