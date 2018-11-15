import UiComponent from '../UiComponent';

export default class Text implements UiComponent {
    constructor(private _text: string) {
    }

    appendTo(entry: HTMLElement | null): void {
        if (entry) {
            entry.appendChild(document.createTextNode(this._text));
        }
    }
}
