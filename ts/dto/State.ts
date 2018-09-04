import Project from './Project';
import ExtraEvent from './ExtraEvent';
import EventPatch from './EventPatch';

export default interface State {
    projects: Array<Project>,
    timezone: string,
    extraEvents: Array<ExtraEvent>,
    cancelledEvents: Array<number>,
    eventPatches?: { number : EventPatch }
}
