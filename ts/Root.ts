import * as $ from 'jquery'
import UiComponent from './UiComponent'

export default class Root implements UiComponent {
    constructor() {
    }

    asHTMLElement(): JQuery<HTMLElement> {
        return $("<div>Hello World</div>");
    }
}
