import UiComponent from './UiComponent';
import * as html from './html';

export default class TwitchPlayer implements UiComponent {
    constructor(private _userName: string) {
    }

    appendTo(entry: HTMLElement | null): void {
        new html.Tag(
            "iframe",
            new html.Empty(),
            {"src": `https://player.twitch.tv/?channel=${this._userName}&parent=tsoding.org&muted=true`,
             "allowfullscreen": "true",
             "class": "player"}
        ).appendTo(entry);
    }
}
