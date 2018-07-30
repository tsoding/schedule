import * as $ from 'jquery';
import UiComponent from './UiComponent';

export default class Empty implements UiComponent {
    appendTo(entry: JQuery<HTMLElement>): void {
        // Nothing. It's empty.
    }
}
