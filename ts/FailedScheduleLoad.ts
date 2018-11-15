import * as html from './html';
import UiComponent from './UiComponent';

export default class FailedScheduleLoad implements UiComponent {
    appendTo(entry: HTMLElement | null): void {
        // TODO(#55): FailedScheduleLoad component is not implemented
        new html.Div(
            new html.Text(
                'Failed to load schedule data. Keep refreshing.'
            )
        ).appendTo(entry)
    }
}
