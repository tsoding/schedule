import 'moment-timezone';
import * as $ from 'jquery';
import * as moment from 'moment';
import Event from './Event';
import EventsForCurrentPeriod from './EventsForCurrentPeriod';
import Weekday from './Weekday'

new EventsForCurrentPeriod({
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
    timezone: 'Asia/Novosibirsk'
}).appendTo($('#root'));
