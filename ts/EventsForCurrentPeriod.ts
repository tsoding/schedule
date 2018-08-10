import * as $ from 'jquery';
import * as dto from './dto';
import * as moment from 'moment';
import Event from './Event';
import EventsForDay from './EventsForDay'
import UiComponent from './UiComponent';
import ConcatLists from './ConcatLists';
import FilteredList from './FilteredList';

// TODO(#64): EventsForCurrentPeriod doesn't use HTML components
export default class EventsForCurrentPeriod implements UiComponent {
    constructor(private _state: dto.State) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        let element = $('<div class="events">');
        let day = moment().clone().utc().startOf('day').subtract(2, 'days')

        let events = new ConcatLists(
            Array.from(
                new Array(16),
                (_, i) => new EventsForDay(
                    this._state,
                    day.clone().add(i, 'days').format("YYYY-MM-DD"),
                )
            )
        ).asArray();

        events
            .filter((e) => e.isPast())
            .slice(-2)
            .forEach((e) => e.appendTo(element));

        events
            .filter((e) => !e.isPast())
            .forEach((e) => e.appendTo(element));

        entry.append(element);
    }
}
