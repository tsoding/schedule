import * as $ from 'jquery';
import * as moment from 'moment';
import Countdown from './Countdown';
import CurrentEvent from './CurrentEvent';
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
            let hoursDiff = moment().diff(this._datetime, 'hours');

            if (0 <= hoursDiff && hoursDiff < 4) {
                new CurrentEvent(
                    this._datetime,
                    this._title,
                    this._description
                ).appendTo(entry);
            } else if (hoursDiff >= 4) {
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
