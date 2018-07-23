import * as $ from 'jquery';
import * as dto from './dto';
import UiComponent from './UiComponent';
import Countdown from './Countdown';

// TODO(#62): CancelledEvent doesn't use HTML components
export default class CancelledEvent implements UiComponent {
    constructor(private _event: dto.Event) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        let element = $(`<div id="_${this._event.datetime.utc().unix()}" class="past event">`);
        entry.append(element);


        element.append($(`<div class="timestamp"><a href="#_${this._event.datetime.utc().unix()}">${this._event.datetime.utc().unix()}</a></div>`));
        element.append($(`<h1><a href="${this._event.url}">${this._event.title}</a></h1>`));
        new Countdown(this._event.datetime, "finished ").appendTo(element);
        element.append($(`<div class="description markdown">${this._event.description}</div>`));
        element.append($(`<div class="cancelled-stamp">CANCELLED</div>`));
    }
}
