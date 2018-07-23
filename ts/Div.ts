import * as $ from 'jquery';
import UiComponent from './UiComponent';
import Tag from './Tag';

export default class Div implements UiComponent {
    constructor(private _body?: UiComponent,
                private _attrs?: {[key: string]: any}) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        new Tag(
            "div",
            this._body,
            this._attrs,
        ).appendTo(entry);
    }
}
