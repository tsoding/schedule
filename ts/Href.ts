import * as $ from 'jquery';
import UiComponent from './UiComponent';
import Tag from './Tag';

export default class H1 implements UiComponent {
    constructor(private _url: string,
                private _body?: UiComponent,
                private _attrs?: {[key: string]: any}) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        new Tag(
            "a",
            this._body,
            Object.assign({"href": this._url}, this._attrs),
        ).appendTo(entry);
    }
}
