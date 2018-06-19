import * as $ from 'jquery';
import * as moment from 'moment';
import UiComponent from './UiComponent';
import Countdown from './Countdown';

export default class Event implements UiComponent {
    constructor(private _datetime: string,
                private _title: string,
                private _description: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        let node = $('<div>');

        node.append($(`<h1>${this._title}</h1>`))
        node.append($(`<div>${this._datetime}</div>`))
        new Countdown(this._datetime).appendTo(node)
        node.append($(`<div>${this._description}</div>`))

        entry.append(node)
    }
}
