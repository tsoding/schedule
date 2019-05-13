import * as dto from './dto';
import * as html from './html';
import * as list from './list';
import * as moment from 'moment';
import ComponentsList from './ComponentsList';
import ComponentsArray from './ComponentsArray';
import Event from './Event';
import EventsForDay from './EventsForDay'
import UiComponent from './UiComponent';
import DayOff from './DayOff';

export default class EventsForCurrentPeriod implements UiComponent {
    constructor(private _state: dto.State) {
    }

    appendTo(entry: HTMLElement | null): void {
        let day = moment().clone().utc().startOf('day').subtract(2, 'days')

        new html.Div(
            new ComponentsList(
                new list.MappedList(
                    new list.ListOfNumbersRange(1, 16),
                    (_, i) => new EventsForDay(
                        this._state,
                        day.clone().add(i, 'days').format("YYYY-MM-DD"),
                    )
                )
            ),
            {"class": "events"}
        ).appendTo(entry)
    }
}
