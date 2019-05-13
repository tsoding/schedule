import * as dto from './dto';
import * as list from './list';
import * as moment from 'moment';
import Event from './Event'
import UiComponent from './UiComponent';
import ComponentsArray from './ComponentsArray';
import DayOff from './DayOff';

// TODO(#69): EventsForDay can be a concatenation of RecurringEventsForDay and ScheduledEventsForDay objects
export default class EventsForDay implements UiComponent {
    constructor(private _state: dto.State,
                private _date: string) {
    }

    appendTo(entry: HTMLElement | null): void {
        const events = this._asArray();

        if (events.length > 0) {
            new ComponentsArray(events).appendTo(entry);
        } else {
            new DayOff(this._state, this._date).appendTo(entry);
        }
    }

    _asArray(): Array<Event> {
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
                (p) => {
                    return {
                        datetime: moment.tz(`${this._date} ${p.time}`, this._state.timezone).utc(),
                        title: p.name,
                        description: p.description,
                        url: p.url,
                        channel: p.channel,
                    };
                }
            )
            .concat(
                this._state.extraEvents
                    .filter(
                        (ee) => ee.date == this._date
                    )
                    .map(
                        (ee) => {
                            return {
                                datetime: moment.tz(`${this._date} ${ee.time}`, this._state.timezone).utc(),
                                title: ee.title,
                                description: ee.description,
                                url: ee.url,
                                channel: ee.channel,
                            };
                        }
                    )
            )
            .map(
                (e) => new Event(
                    this._state.eventPatches
                        ? new dto.PatchedEvent(e, this._state.eventPatches[e.datetime.utc().unix()])
                        : e,
                    this._state.cancelledEvents
                )
            )
    }
}
