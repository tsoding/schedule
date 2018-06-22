import 'moment-timezone';
import * as $ from 'jquery';
import * as moment from 'moment';
import Event from './Event';
import Root from './Root';

$('#root')
    .append(
        new Event(
            moment.tz("2018-06-23 23:00", "Asia/Novosibirsk").utc(),
            "Nothing (Game in Pure C)",
            "https://github.com/tsoding/nothing"
        ).asHTMLElement()
    )
    .append(
        new Event(
            moment.tz("2018-06-24 23:00", "Asia/Novosibirsk").utc(),
            "Nothing (Game in Pure C)",
            "https://github.com/tsoding/nothing"
        ).asHTMLElement()
    );
