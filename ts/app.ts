import 'moment-timezone';
import * as $ from 'jquery';
import * as moment from 'moment';
import Event from './Event';
import EventsForCurrentPeriod from './EventsForCurrentPeriod';
import Weekday from './Weekday'

new EventsForCurrentPeriod(
    [
        {
            name: "Nothing (Game in Pure C)",
            description: "https://github.com/tsoding/nothing",
            days: [Weekday.Sat, Weekday.Sun],
            time: "23:00",
        },
        {
            name: "HyperNerd (Bot in Haskell)",
            description: "https://github.com/tsoding/HyperNerd",
            days: [Weekday.Thu],
            time: "23:00",
        },
        {
            name: "YouTube content or whatever",
            description: "",
            days: [Weekday.Tue],
            time: "23:00",
        }
    ],
    'Asia/Novosibirsk'
).appendTo($('#root'));
