import * as $ from 'jquery';
import * as dto from './dto';
import * as moment from 'moment';
import Event from './Event'
import UiComponent from './UiComponent';

export default class EventsForDay implements UiComponent {
    constructor(private _state: dto.State,
                private _date: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        let weekday = moment.tz(this._date, this._state.timezone).isoWeekday()

        this._state.projects.forEach((p) => {
            if (p.days.includes(weekday)) {
                new Event({
                    datetime: moment.tz(`${this._date} ${p.time}`, this._state.timezone).utc(),
                    title: p.name,
                    description: p.description,
                    url: p.url
                }, this._state.cancelledEvents).appendTo(entry)
            }
        })

        this._state.extraEvents.forEach((ee) => {
            if (ee.date == this._date) {
                new Event({
                    datetime: moment.tz(`${this._date} ${ee.time}`, this._state.timezone).utc(),
                    title: ee.title,
                    description: ee.description,
                    url: ee.url
                }, this._state.cancelledEvents).appendTo(entry)
            }
        })
    }
}
