import UiComponent from '../UiComponent'

export default class InnerHtml implements UiComponent {
    constructor(private _text: string) {
    }

    appendTo(entry: HTMLElement | null): void {
        if (entry) {
            entry.innerHTML = this._text;
        }
    }
}
