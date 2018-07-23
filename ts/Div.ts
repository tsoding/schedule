import * as $ from 'jquery';
import UiComponent from './UiComponent';
import Tag from './Tag';

export default class Div implements UiComponent {
    constructor(private _body?: UiComponent,
                private _classes?: string[],
                private _id?: string) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        new Tag(
            "div",
            this._body,
            this._classes,
            this._id
        ).appendTo(entry);
    }
}
