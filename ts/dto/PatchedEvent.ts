import * as moment from 'moment';
import Event from './Event';
import EventPatch from './EventPatch';

export default class PatchedEvent extends Event {
    constructor(event: Event, eventPatch: EventPatch | undefined) {
        super(event.datetime, event.title, event.description, event.url, event.channel);

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

            if (eventPatch.channel) {
                this.channel = eventPatch.channel;
            }
        }
    }
}
