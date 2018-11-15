import UiComponent from '../UiComponent';

export default class Tag implements UiComponent {
    constructor(private _name: string,
                private _body?: UiComponent,
                private _attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement | null): void {
        if (!entry) {
            return;
        }

        let element = document.createElement(this._name);

        if (this._attrs) {
            for (let attrKey in this._attrs) {
                let attr = document.createAttribute(attrKey);
                attr.value = this._attrs[attrKey];
                element.attributes.setNamedItem(attr);
            }
        }

        if (this._body) {
            this._body.appendTo(element);
        }

        entry.appendChild(element);
    }
}
