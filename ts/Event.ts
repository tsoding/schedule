import * as $ from 'jquery';
import * as dto from './dto';
import * as moment from 'moment';
import CancelledEvent from './CancelledEvent';
import Countdown from './Countdown';
import CurrentEvent from './CurrentEvent';
import FutureEvent from './FutureEvent';
import PastEvent from './PastEvent';
import UiComponent from './UiComponent';

export default class Event implements UiComponent {
    constructor(private _event: dto.Event,
                private _canceldEvents: Array<number>) {
    }

    appendTo(entry: JQuery<HTMLElement>): JQuery<HTMLElement> {
        if (moment().diff(this._event.datetime, 'days') < 5) {
            let hoursDiff = moment().diff(this._event.datetime, 'hours');

            if (this._canceldEvents.findIndex((c) => c == this._event.datetime.unix()) >= 0) {
                new CancelledEvent(this._event).appendTo(entry);
            } else if (0 <= hoursDiff && hoursDiff < 4) {
                new CurrentEvent(this._event).appendTo(entry);
            } else if (hoursDiff >= 4) {
                new PastEvent(this._event).appendTo(entry);
            } else {
                new FutureEvent(this._event).appendTo(entry);
            }
        }

        return entry;
    }
}
