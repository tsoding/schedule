import * as $ from 'jquery'
import UiComponent from './UiComponent'

export default class Root implements UiComponent {
    constructor() {
    }

    appendTo(entry: JQuery<HTMLElement>): void {
        entry.append($("<div>Hello World</div>"))
    }
}
