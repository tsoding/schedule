import * as $ from 'jquery';
import UiComponent from '../UiComponent';

export default class Tag implements UiComponent {
    constructor(private _name: string,
                private _body?: UiComponent,
                private _attrs?: {[key: string]: any}) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        let element = $(`<${this._name}>`);

        if (this._body) {
            this._body.appendTo(element);
        }

        if (this._attrs) {
            element.attr(this._attrs)
        }

        entry.append(element);
    }
}
