import * as $ from 'jquery';
import * as dto from './dto';
import * as list from './list';
import * as moment from 'moment';
import ComponentsList from './ComponentsList';
import Div from './Div';
import Event from './Event';
import EventsForDay from './EventsForDay'
import UiComponent from './UiComponent';

export default class EventsForCurrentPeriod implements UiComponent {
    constructor(private _state: dto.State) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        let day = moment().clone().utc().startOf('day').subtract(2, 'days')

        let events = new list.ConcatLists(
            new list.MappedList(
                new list.ListOfNumbersRange(1, 16),
                (_, i) => new EventsForDay(
                    this._state,
                    day.clone().add(i, 'days').format("YYYY-MM-DD"),
                )
            ).asArray()
        );

        new Div(
            new ComponentsList(
                new list.ConcatLists([
                    new list.SlicedList(new list.FilteredList(events, (e) => e.isPast()), -2),
                    new list.FilteredList(events, (e) => !e.isPast())
                ])
            ),
            {"class": "events"}
        ).appendTo(entry)
    }
}
