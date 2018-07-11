import * as moment from 'moment';
import Weekday from './Weekday';

export interface State {
    projects: Array<Project>,
    timezone: string
}

export interface Project {
    name: string,
    description: string,
    url: string,
    days: Array<Weekday>,
    time: string,
}

export interface Event {
    datetime: moment.Moment,
    title: string,
    description: string,
    url: string,
}
