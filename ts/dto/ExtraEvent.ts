// TODO(#71): dto.ExtraEvent should be called dto.ScheduledEvent
export default interface ExtraEvent {
    date: string,
    time: string,
    title: string,
    description: string,
    url: string,
    channel: string,
}
