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

        let day = moment().utc().startOf('day').subtract(3, 'days')
        for (let i = 0; i < 20; ++i) {
            new EventsForDay(
                this._state,
                day.format("YYYY-MM-DD"),
             ).appendTo(element);
            day = day.add(1, 'days')
        }
    }
}
