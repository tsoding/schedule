import * as $ from 'jquery';
import UiComponent from './UiComponent';

export default class Text implements UiComponent {
    constructor(private _text: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        entry.text(this._text)
    }
}
