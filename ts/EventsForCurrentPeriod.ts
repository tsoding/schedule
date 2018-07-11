import * as $ from 'jquery';
import * as dto from './dto';
import * as moment from 'moment';
import Event from './Event';
import EventsForDay from './EventsForDay'
import UiComponent from './UiComponent';

export default class EventsForCurrentPeriod implements UiComponent {
    constructor(private _state: dto.State) {
    }

    appendTo(entry: JQuery<HTMLElement>): JQuery<HTMLElement> {
        let element = $('<div class="events">');
        entry.append(element);

        let day = moment().utc().startOf('day').subtract(14, 'days')
        for (let i = 0; i < 28; ++i) {
            new EventsForDay(
                this._state.projects,
                day.format("YYYY-MM-DD"),
                this._state.timezone
            ).appendTo(entry);
            day = day.add(1, 'days')
        }

        return entry;
    }
}
