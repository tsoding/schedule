import * as $ from 'jquery';
import * as moment from 'moment';
import UiComponent from './UiComponent';
import Event from './Event';
import Project from './Project'
import daysOfMonth from './DaysOfMonth'
import EventsForDay from './EventsForDay'

export default class EventsForCurrentMonth implements UiComponent {
    constructor(private _recipe: Array<Project>,
                private _timezone: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): JQuery<HTMLElement> {
        let element = $('<div class="events">');
        entry.append(element);

        daysOfMonth(moment().year(), moment().month())
            .map(
                (d) => new EventsForDay(
                    this._recipe,
                    d,
                    this._timezone
                ).appendTo(entry)
            )

        return entry;
    }
}

