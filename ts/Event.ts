import * as $ from 'jquery';
import * as moment from 'moment';
import Countdown from './Countdown';
import UiComponent from './UiComponent';

export default class Event implements UiComponent {
    constructor(private _datetime: moment.Moment,
                private _title: string,
                private _description: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): JQuery<HTMLElement> {
        if (moment().diff(this._datetime, 'days') < 5) {
            let element = $('<div class="event">');
            entry.append(element);

            element.append($(`<h1><a href="https://twitch.tv/tsoding">${this._title}</a></h1>`));
            new Countdown(this._datetime).appendTo(element);
            element.append($(`<div class="description">${this._description}</div>`));
        }

        return entry;
    }
}
