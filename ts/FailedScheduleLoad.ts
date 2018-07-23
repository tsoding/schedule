import * as $ from 'jquery';
import UiComponent from './UiComponent';

// TODO(#65): FailedScheduleLoad doesn't use HTML components
export default class FailedScheduleLoad implements UiComponent {
    appendTo(entry: JQuery<HTMLElement>): void {
        // TODO(#55): FailedScheduleLoad component is not implemented
        entry.append($(`<div>Failed to load schedule data. Keep refreshing.</div>`))
    }
}
