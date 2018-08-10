import * as $ from 'jquery';
import * as dto from './dto';
import * as moment from 'moment';
import ComponentsArray from './ComponentsArray';
import Countdown from './Countdown';
import Div from './Div';
import Empty from './Empty';
import H1 from './H1';
import Href from './Href';
import Tag from './Tag'
import Text from './Text';
import UiComponent from './UiComponent';

export default class CurrentEvent implements UiComponent {
    constructor(private _event: dto.Event) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        new Div(
            new ComponentsArray([
                new Div(
                    new Href(
                        `#_${this._event.datetime.utc().unix()}`,
                        new Text(`${this._event.datetime.utc().unix()}`)
                    ),
                    {"class": "timestamp"}
                ),
                new Div(
                    new Href(
                        "https://twitch.tv/tsoding",
                        new Tag(
                            "i",
                            new Empty(),
                            {"class": "watch fas fa-external-link-alt fa-lg"}
                        )
                    ),
                    {"class": "watch"}
                ),
                new H1(
                    new Href(
                        `${this._event.url}`,
                        new Text(`${this._event.title}`)
                    ),
                ),
                new Countdown(this._event.datetime, "started "),
                new Div(new Text(`${this._event.description}`), {"class": "description markdown"})
            ]),
            {
                "id": `_${this._event.datetime.utc().unix()}`,
                "class": "current event"
            }
        ).appendTo(entry);
    }
}
