import * as $ from 'jquery';
import UiComponent from './UiComponent';

export default class ComponentsArray implements UiComponent {
    constructor(private _components: UiComponent[]) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        this._components.forEach((c) => c.appendTo(entry))
    }
}
