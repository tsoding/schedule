import 'moment-timezone';
import * as dto from './dto';
import * as html from './html';
import * as moment from 'moment';
import ComponentsArray from './ComponentsArray'
import UiComponent from './UiComponent';

export default class DayOff implements UiComponent {
    constructor(private _state: dto.State,
                private _date: string) {
    }

    appendTo(entry: HTMLElement | null): void {
        let datetime = moment.tz(`${this._date} 23:59`, this._state.timezone)

        new html.Div(
            new ComponentsArray ([
                new html.H1(
                    new html.Text("Day off")
                ),
                new html.Div(
                    new html.Text(
                        datetime.utc().tz(moment.tz.guess()).format('ddd, ll')
                    ),
                    {"class": "countdown"}
                )
            ]),
            {"class": moment().diff(datetime, 'seconds') > 0 ? "event past" : "event"}
        ).appendTo(entry);
    }
}

