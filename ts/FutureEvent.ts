import * as $ from 'jquery';
import * as dto from './dto';
import * as moment from 'moment';
import Countdown from './Countdown';
import UiComponent from './UiComponent';

export default class FutureEvent implements UiComponent {
    constructor(private _event: dto.Event) {
    }

    appendTo(entry: JQuery<HTMLElement>): JQuery<HTMLElement> {
        let element = $(`<div class="event">`);
        entry.append(element);

        element.append($(`<h1><a href="https://twitch.tv/tsoding">${this._event.title}</a></h1>`));
        new Countdown(this._event.datetime, "starts ").appendTo(element);
        element.append($(`<div class="description">${this._event.description}</div>`));

        return entry;
    }
}
