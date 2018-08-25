import Weekday from '../Weekday'

// TODO(#70): dto.Project should be called dto.RecurringEvent
export default interface Project {
    name: string,
    description: string,
    url: string,
    days: Array<Weekday>,
    time: string,
    starts?: string,
    ends?: string,
    comment?: string
}
