import 'moment-timezone';
import * as moment from 'moment';

export default function daysOfMonth(year: number, month: number): Array<string> {
    let result = []
    let daysInMonth = moment().month(month).daysInMonth();
    for (let i = 1; i <= daysInMonth; ++i) {
        result.push(`${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`)
    }
    return result;
}
