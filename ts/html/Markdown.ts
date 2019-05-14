import * as MarkdownIt from 'markdown-it';
import InnerHtml from './InnerHtml';
import UiComponent from '../UiComponent';

export default class Markdown implements UiComponent {
    constructor(private _text: string) {
    }

    appendTo(entry: HTMLElement | null): void {
        new InnerHtml(
            new MarkdownIt({
                html: true,
                linkify: true
            }).render(this._text)
        ).appendTo(entry)
    }
}
