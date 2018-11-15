import * as dto from './dto';
import * as html from './html';
import * as moment from 'moment';
import ComponentsArray from './ComponentsArray';
import Countdown from './Countdown';
import UiComponent from './UiComponent';

export default class FutureEvent implements UiComponent {
    constructor(private _event: dto.Event) {
    }

    appendTo(entry: HTMLElement | null): void {
        new html.Div(
            new ComponentsArray([
                new html.Div(
                    new html.Href(
                        `#_${this._event.datetime.utc().unix()}`,
                        new html.Text(`${this._event.datetime.utc().unix()}`)
                    ),
                    {"class": "timestamp"}
                ),
                new html.H1(
                    new html.Href(
                        `${this._event.url}`,
                        new html.Text(`${this._event.title}`)
                    )
                ),
                new Countdown(this._event.datetime, "starts "),
                new html.Div(
                    new html.Text(`${this._event.description}`),
                    {"class": "description markdown"}
                )
            ]),
            {"class": "event",
             "id": `_${this._event.datetime.utc().unix()}`}
        ).appendTo(entry);
    }
}
