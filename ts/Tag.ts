import * as $ from 'jquery';
import UiComponent from './UiComponent';

export default class Tag implements UiComponent {
    constructor(private _name: string,
                private _body?: UiComponent,
                private _classes?: string[],
                private _id?: string) {
        if (typeof this._classes === 'undefined') {
            this._classes = [];
        }
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        let element = $(`<${this._name}>`);

        if (this._body) {
            this._body.appendTo(element);
        }

        if (this._classes) {
            element.addClass(this._classes)
        }

        if (this._id) {
            element.attr("id", this._id)
        }

        entry.append(element);
    }
}
