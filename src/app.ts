import * as $ from 'jquery';
import * as moment from 'moment';
import Event from './Event';
import Root from './Root';

new Event(
    moment("22-06-2018", "DD-MM-YYYY").utc(),
    "Tsoding Stream",
    "Streaming some coding on https://twitch.tv/tsoding"
).appendTo($('#root'))

new Event(
    moment("23-06-2018", "DD-MM-YYYY").utc(),
    "Tsoding Stream #2",
    "Streaming some coding on https://twitch.tv/tsoding"
).appendTo($('#root'))
