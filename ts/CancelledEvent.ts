import * as $ from 'jquery';
import * as dto from './dto';
import * as moment from 'moment';
import ComponentsArray from './ComponentsArray';
import Countdown from './Countdown';
import Div from './Div';
import H1 from './H1';
import Href from './Href';
import Text from './Text';
import UiComponent from './UiComponent';

export default class CancelledEvent implements UiComponent {
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
                new H1(
                    new Href(
                        `${this._event.url}`,
                        new Text(`${this._event.title}`)
                    )
                ),
                new Countdown(this._event.datetime, "should've started "),
                new Div(
                    new Text(`${this._event.description}`),
                    {"class": "description markdown"}
                ),
                new Div(
                    new Text('CANCELLED'),
                    {"class": "cancelled-stamp"}
                )
            ]),
            {"class": "past event",
             "id": `_${this._event.datetime.utc().unix()}`}
        ).appendTo(entry)
    }
}
