import * as $ from 'jquery';
import * as moment from 'moment';
import Countdown from './Countdown';
import UiComponent from './UiComponent';

export default class Event implements UiComponent {
    constructor(private _datetime: moment.Moment,
                private _title: string,
                private _description: string) {
    }

    asHTMLElement(): JQuery<HTMLElement> {
        return $('<div class="event">')
            .append($(`<h1><a href="https://twitch.tv/tsoding">${this._title}</a></h1>`))
            .append(new Countdown(this._datetime).asHTMLElement())
            .append($(`<div class="description">${this._description}</div>`));
    }
}
