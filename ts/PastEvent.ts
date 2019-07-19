import * as dto from './dto';
import * as html from './html';
import * as moment from 'moment';
import ComponentsArray from './ComponentsArray';
import Countdown from './Countdown';
import UiComponent from './UiComponent';
import Timestamp from './Timestamp';

export default class PastEvent implements UiComponent {
    constructor(private _event: dto.Event,
                private _timestamp: string) {
    }

    appendTo(entry: HTMLElement | null): void {
        new html.Div(
            new ComponentsArray([
                new Timestamp(this._timestamp),
                new html.H1(
                    new html.Href(
                        `${this._event.url}`,
                        new html.Text(`${this._event.title}`)
                    )
                ),
                new Countdown(this._event.datetime, "finished "),
                new html.Div(
                    new html.Href(
                        this._event.channel,
                        new html.Text(this._event.channel)),
                    {"class": "channel"}
                ),
                new html.Div(
                    new html.Markdown(`${this._event.description}`),
                    {"class": "description markdown"}
                )
            ]),
            {"class": "event past",
             "id": `_${this._event.datetime.utc().unix()}`}
        ).appendTo(entry)
    }
}
