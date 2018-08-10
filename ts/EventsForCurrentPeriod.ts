import * as $ from 'jquery';
import * as dto from './dto';
import * as moment from 'moment';
import ComponentsList from './ComponentsList';
import ConcatLists from './ConcatLists';
import Div from './Div';
import Event from './Event';
import EventsForDay from './EventsForDay'
import FilteredList from './FilteredList';
import ListOfNumbersRange from './ListOfNumbersRange';
import MappedList from './MappedList';
import SlicedList from './SlicedList';
import UiComponent from './UiComponent';

export default class EventsForCurrentPeriod implements UiComponent {
    constructor(private _state: dto.State) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        let day = moment().clone().utc().startOf('day').subtract(2, 'days')

        let events = new ConcatLists(
            new MappedList(
                new ListOfNumbersRange(1, 16),
                (_, i) => new EventsForDay(
                    this._state,
                    day.clone().add(i, 'days').format("YYYY-MM-DD"),
                )
            ).asArray()
        );

        new Div(
            new ComponentsList(
                new ConcatLists([
                    new SlicedList(new FilteredList(events, (e) => e.isPast()), -2),
                    new FilteredList(events, (e) => !e.isPast())
                ])
            ),
            {"class": "events"}
        ).appendTo(entry)
    }
}
