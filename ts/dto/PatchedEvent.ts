import * as moment from 'moment';
import Event from './Event';
import EventPatch from './EventPatch';

export default class PatchedEvent implements Event {
    datetime: moment.Moment;
    title: string;
    description: string;
    url: string;
    channel: string;

    constructor(event: Event, eventPatch: EventPatch | undefined) {
        this.datetime = event.datetime;
        this.title = event.title;
        this.description = event.description;
        this.url = event.url;
        this.channel = event.channel;

        if (eventPatch) {
            if (eventPatch.title) {
                this.title = eventPatch.title;
            }

            if (eventPatch.description) {
                this.description = eventPatch.description;
            }

            if (eventPatch.url) {
                this.url = eventPatch.url;
            }
        }
    }
}
