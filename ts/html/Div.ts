import UiComponent from '../UiComponent';
import Tag from './Tag';

export default class Div implements UiComponent {
    constructor(private _body?: UiComponent,
                private _attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement | null): void {
        new Tag(
            "div",
            this._body,
            this._attrs,
        ).appendTo(entry);
    }
}
