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
        return $('<div>')
            .append($(`<h1>${this._title}</h1>`))
            .append(new Countdown(this._datetime).asHTMLElement())
            .append($(`<div>${this._description}</div>`));
    }
}
