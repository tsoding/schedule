import 'moment-timezone';
import * as moment from 'moment';
import Event from './Event';
import EventsForCurrentPeriod from './EventsForCurrentPeriod';
import FailedScheduleLoad from './FailedScheduleLoad'
import StateFromUrl from './StateFromUrl'
import Weekday from './Weekday'

new StateFromUrl('https://tsoding.github.io/api/schedule.json')
    .asPromise()
    .then(
        (state) => new EventsForCurrentPeriod(state),
        () => new FailedScheduleLoad()
    )
    .then((c) => c.appendTo(document.getElementById('root')));
