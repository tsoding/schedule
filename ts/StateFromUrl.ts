import * as $ from 'jquery';
import * as dto from './dto';
import Weekday from './Weekday';

export default class StateFromUrl {
    constructor(private _url: string) {
    }

    asPromise(): Promise<dto.State> {
        // TODO(#56): StateFromUrl object is not implemented
        return new Promise(
            (resolve, reject) =>
                resolve({
                    projects: [
                        {
                            name: "Nothing (Game in Pure C)",
                            description: "A simple platformer about nothing. No Engines, no OpenGL, no Box2D. Only C and SDL2",
                            url: "https://github.com/tsoding/nothing",
                            days: [Weekday.Sat, Weekday.Sun],
                            time: "23:00",
                        },
                        {
                            name: "HyperNerd (Bot in Haskell)",
                            description: "Enhancing my Total Surveillance Automatic Ban Machine. Join to help to test it!",
                            url: "https://github.com/tsoding/HyperNerd",
                            days: [Weekday.Thu],
                            time: "23:00",
                        },
                        {
                            name: "YouTube content or whatever",
                            description: "This day is reserved for recording YouTube videos if I have anything to record at the moment. Otherwise doing whatever. Most probably trying new languages, technologies, project ideas.",
                            url: "https://youtube.com/tsoding",
                            days: [Weekday.Tue],
                            time: "23:00",
                        }
                    ],
                    extraEvents: [
                        {
                            date: "2018-07-11",
                            time: "23:00",
                            title: "Schedule Web App in TypeScript",
                            description: `<p>Schedule for Tsoding Streams. Front-End only Single Page Application without any Back-End. Makes all of the schedule building work yours computer problem. Saves me money on hosting.</p>
<p>This is an extra stream to get some work done for the <a href="https://github.com/tsoding/schedule-beta/milestone/1">upcoming release</a>.</p>`,
                            url: "https://github.com/tsoding/schedule-beta"
                        }
                    ],
                    cancelledEvents: [],
                    timezone: 'Asia/Novosibirsk',
                })
        );
    }
}
