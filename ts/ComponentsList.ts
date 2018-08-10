import * as $ from 'jquery';
import ComponentsArray from './ComponentsArray'
import List from './List';
import UiComponent from './UiComponent';

export default class ComponentsList implements UiComponent {
    constructor(private _componentsList: List<UiComponent>) {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        new ComponentsArray(this._componentsList.asArray()).appendTo(entry);
    }
}
