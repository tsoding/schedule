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
                private _canceledEvents: Array<number>) {
    }

    appendTo(entry: HTMLElement | null): void {
        let secondsDiff = moment().diff(this._event.datetime, 'seconds');

        if (this.isCancelled()) {
            new CancelledEvent(this._event).appendTo(entry);
        } else if (0 <= secondsDiff && secondsDiff < 4 * 60 * 60) {
            new CurrentEvent(this._event).appendTo(entry);
        } else if (secondsDiff >= 4 * 60 * 60) {
            new PastEvent(this._event).appendTo(entry);
        } else {
            new FutureEvent(this._event).appendTo(entry);
        }

        const hashId = "#_" + this._event.datetime.utc().unix();
        if (window.location.hash == hashId) {
            window.location.hash = "";
            setTimeout(() => { window.location.hash = hashId; }, 0);
        }
    }

    isCancelled(): boolean {
        if (!this._canceledEvents) {
            return false;
        }

        return this._canceledEvents.findIndex((c) => c == this._event.datetime.unix()) >= 0;
    }
}
