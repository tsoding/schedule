import 'moment-timezone';
import * as $ from 'jquery';
import * as moment from 'moment';
import Event from './Event';
import Root from './Root';

new Event(
    moment.tz("2018-06-22 18:00", "Asia/Novosibirsk").utc(),
    "Tsoding Stream",
    "Streaming some coding on https://twitch.tv/tsoding"
).appendTo($('#root'))

new Event(
    moment.tz("2018-06-23 18:00", "Asia/Novosibirsk").utc(),
    "Tsoding Stream #2",
    "Streaming some coding on https://twitch.tv/tsoding"
).appendTo($('#root'))
