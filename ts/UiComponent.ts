import * as $ from 'jquery';

export default interface UiComponent {
    appendTo(entry: JQuery<HTMLElement>): void
}
