import Project from './Project';
import ExtraEvent from './ExtraEvent';

export default interface State {
    projects: Array<Project>,
    timezone: string,
    extraEvents: Array<ExtraEvent>,
    cancelledEvents: Array<number>
}
