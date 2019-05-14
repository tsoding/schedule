import * as dto from './dto';
import * as html from './html';
import * as moment from 'moment';
import ComponentsArray from './ComponentsArray';
import Countdown from './Countdown';
import UiComponent from './UiComponent';

export default class CurrentEvent implements UiComponent {
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
                new html.Div(
                    new html.Href(
                        this._event.channel ? this._event.channel : "https://twitch.tv/tsoding",
                        new html.Tag(
                            "i",
                            new html.Empty(),
                            {"class": "watch fas fa-external-link-alt fa-lg"}
                        )
                    ),
                    {"class": "watch"}
                ),
                new html.H1(
                    new html.Href(
                        `${this._event.url}`,
                        new html.Text(`${this._event.title}`)
                    ),
                ),
                new Countdown(this._event.datetime, "started "),
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
            {
                "id": `_${this._event.datetime.utc().unix()}`,
                "class": "current event"
            }
        ).appendTo(entry);
    }
}
