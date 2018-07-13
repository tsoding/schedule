import * as $ from 'jquery';
import * as dto from './dto';
import * as moment from 'moment';
import Event from './Event';
import EventsForDay from './EventsForDay'
import UiComponent from './UiComponent';

export default class EventsForCurrentPeriod implements UiComponent {
    constructor(private _state: dto.State) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        let element = $('<div class="events">');
        entry.append(element);

        let day = moment().utc().startOf('day').subtract(2, 'days')
        let events: Array<Event> = []
        for (let i = 0; i < 16; ++i) {
            events = events.concat(
                new EventsForDay(
                    this._state,
                    day.format("YYYY-MM-DD"),
                ).asArray()
            )
            day = day.add(1, 'days')
        }

        events
            .filter((e) => e.isPast())
            .slice(-2)
            .forEach((e) => e.appendTo(element));

        events
            .filter((e) => !e.isPast())
            .forEach((e) => e.appendTo(element));
    }
}
