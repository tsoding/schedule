import * as dto from './dto';
import * as html from './html';
import * as moment from 'moment';
import copy = require('clipboard-copy')
import ComponentsArray from './ComponentsArray';
import Countdown from './Countdown';
import UiComponent from './UiComponent';
import TwitchPlayer from './TwitchPlayer';

export default class CurrentEvent implements UiComponent {
    constructor(private _timestamp: string) {
    }

    onCopyClick = () => {
        copy(this._timestamp)
    }

    appendTo(entry: HTMLElement | null): void {
        new html.Div(
            new ComponentsArray([
                new html.Href(
                    `#_${this._timestamp}`,
                    new html.Text(`${this._timestamp}`)
                ),
                new html.Tag(
                    "i",
                    new html.Empty(),
                    {"class": "copy fas fa-copy fa-lg"},
                    {"click": this.onCopyClick}
                )
            ]),
            {"class": "timestamp"}
        ).appendTo(entry);
    }
}
