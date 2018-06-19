import * as $ from 'jquery';
import Root from './Root';
import Event from './Event';

new Event(
    "20-06-2018",
    "Tsoding Stream",
    "Streaming some coding on https://twitch.tv/tsoding"
).appendTo($('#root'))

new Event(
    "21-06-2018",
    "Tsoding Stream #2",
    "Streaming some coding on https://twitch.tv/tsoding"
).appendTo($('#root'))
