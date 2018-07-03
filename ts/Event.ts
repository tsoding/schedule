import * as $ from 'jquery';
import * as moment from 'moment';
import Countdown from './Countdown';
import FutureEvent from './FutureEvent';
import PastEvent from './PastEvent';
import UiComponent from './UiComponent';

export default class Event implements UiComponent {
    constructor(private _datetime: moment.Moment,
                private _title: string,
                private _description: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): JQuery<HTMLElement> {
        if (moment().diff(this._datetime, 'days') < 5) {
            if (moment().diff(this._datetime) >= 0) {
                new PastEvent(
                    this._datetime,
                    this._title,
                    this._description
                ).appendTo(entry);
            } else {
                new FutureEvent(
                    this._datetime,
                    this._title,
                    this._description
                ).appendTo(entry);
            }
        }

        return entry;
    }
}
