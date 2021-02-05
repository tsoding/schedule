import * as moment from 'moment';

export default class Event {
    constructor(public datetime: moment.Moment,
                public title: string,
                public description: string,
                public url: string,
                public channel: string) {
    }

    timestamp() {
        return this.datetime.utc().unix().toString();
    }
}
