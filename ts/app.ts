import 'moment-timezone';
import * as moment from 'moment';
import Event from './Event';
import EventsForCurrentPeriod from './EventsForCurrentPeriod';
import FailedScheduleLoad from './FailedScheduleLoad'
import StateFromUrl from './StateFromUrl'
import Weekday from './Weekday'

// FontAwesome imports
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(far)
library.add(fab)

dom.watch()

new StateFromUrl('schedule.json')
    .asPromise()
    .then(
        (state) => new EventsForCurrentPeriod(state),
        () => new FailedScheduleLoad()
    )
    .then((c) => c.appendTo(document.getElementById('root')));
