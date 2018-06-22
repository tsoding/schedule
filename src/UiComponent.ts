import * as $ from 'jquery';

export default interface UiComponent {
    asHTMLElement(): JQuery<HTMLElement>
}
