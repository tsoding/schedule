import * as $ from 'jquery';
import UiComponent from './UiComponent';
import Div from './Div'
import Text from './Text'

export default class FailedScheduleLoad implements UiComponent {
    appendTo(entry: JQuery<HTMLElement>): void {
        // TODO(#55): FailedScheduleLoad component is not implemented
        new Div(
            new Text('Failed to load schedule data. Keep refreshing.')
        ).appendTo(entry)
    }
}
