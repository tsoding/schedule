import UiComponent from '../UiComponent';
import Tag from './Tag';

export default class H1 implements UiComponent {
    constructor(private _body?: UiComponent,
                private _attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement | null): void {
        new Tag(
            "h1",
            this._body,
            this._attrs,
        ).appendTo(entry);
    }
}
