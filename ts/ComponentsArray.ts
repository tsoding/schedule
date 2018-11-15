import UiComponent from './UiComponent';

export default class ComponentsArray implements UiComponent {
    constructor(private _components: UiComponent[]) {
    }

    appendTo(entry: HTMLElement | null): void {
        this._components.forEach((c) => c.appendTo(entry))
    }
}
