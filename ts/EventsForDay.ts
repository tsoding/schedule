import * as $ from 'jquery';
import * as moment from 'moment';
import Event from './Event'
import Project from './Project';
import UiComponent from './UiComponent';

export default class EventsForDay implements UiComponent {
    constructor(private _recipe: Array<Project>,
                private _date: string,
                private _timezone: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): JQuery<HTMLElement> {
        let weekday = moment.tz(this._date, this._timezone).isoWeekday()

        this._recipe.forEach((p) => {
            if (p.days.includes(weekday)) {
                new Event(
                    moment.tz(`${this._date} ${p.time}`, this._timezone).utc(),
                    p.name,
                    p.description
                ).appendTo(entry)
            }
        })

        return entry;
    }
}
