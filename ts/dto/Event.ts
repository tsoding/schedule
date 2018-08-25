import * as moment from 'moment';

export default interface Event {
    datetime: moment.Moment,
    title: string,
    description: string,
    url: string,
}
