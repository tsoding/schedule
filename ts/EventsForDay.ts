import * as $ from 'jquery';
import * as dto from './dto';
import * as moment from 'moment';
import Event from './Event'
import UiComponent from './UiComponent';
import List from './List';

// TODO: EventsForDay can be a concatenation of RecurringEventsForDay and ScheduledEventsForDay objects
export default class EventsForDay implements UiComponent, List<Event> {
    constructor(private _state: dto.State,
                private _date: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        this.asArray().forEach((e) => e.appendTo(entry))
    }

    asArray(): Array<Event> {
        let weekday = moment.tz(this._date, this._state.timezone).isoWeekday();
        return this._state.projects
            .filter(
                (p) => {
                    let thisDate = moment.tz(`${this._date}`, this._state.timezone).utc().unix();
                    let starts = p.starts ? moment.tz(`${p.starts}`, this._state.timezone).utc().unix() : 0;
                    let ends = p.ends ? moment.tz(`${p.ends}`, this._state.timezone).utc().unix() : Number.MAX_SAFE_INTEGER;
                    return starts <= thisDate && thisDate <= ends;
                }
            )
            .filter(
                (p) => p.days.includes(weekday)
            )
            .map(
                (p) => new Event({
                    datetime: moment.tz(`${this._date} ${p.time}`, this._state.timezone).utc(),
                    title: p.name,
                    description: p.description,
                    url: p.url
                }, this._state.cancelledEvents)
            )
            .concat(
                this._state.extraEvents
                    .filter(
                        (ee) => ee.date == this._date
                    )
                    .map(
                        (ee) => new Event({
                            datetime: moment.tz(`${this._date} ${ee.time}`, this._state.timezone).utc(),
                            title: ee.title,
                            description: ee.description,
                            url: ee.url
                        }, this._state.cancelledEvents)
                    )
            )
    }
}
