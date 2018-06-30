import Weekday from './Weekday'

export default interface Project {
    name: string,
    description: string,
    days: Array<Weekday>,
    time: string,
}
