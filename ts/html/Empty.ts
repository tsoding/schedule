import UiComponent from '../UiComponent';

export default class Empty implements UiComponent {
    appendTo(entry: HTMLElement | null): void {
        // Nothing. It's empty.
    }
}
