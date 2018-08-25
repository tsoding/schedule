TSS=$(shell find ./ts/ -type f -name '*.ts')
BROWSERIFY=./node_modules/.bin/browserify
WATCHIFY=./node_modules/.bin/watchify
SASS=./node_modules/.bin/sass

.PHONY: all
all: dist/app.js dist/index.html dist/reset.css dist/main.css

dist/app.js: dist $(TSS)
	$(BROWSERIFY) ./ts/app.ts -p tsify -g uglifyify --outfile dist/app.js

dist/index.html: dist html/index.html
	cp html/index.html dist/

dist/reset.css: dist css/reset.css
	cp css/reset.css dist/reset.css

dist/main.css: dist scss/main.scss
	$(SASS) --no-source-map scss/main.scss dist/main.css

dist:
	mkdir -p dist

.PHONY: watch
watch: dist/reset.css watch-ts watch-scss watch-html

.PHONY: watch-ts
watch-ts: dist $(TSS)
	$(WATCHIFY) ./ts/app.ts -v -p tsify --outfile dist/app.js

.PHONY: watch-scss
watch-scss: dist scss/main.scss
	$(SASS) --watch scss/main.scss dist/main.css

.PHONY: watch-html
watch-html: dist html/index.html
	cp html/index.html dist/
	while inotifywait -q -e modify,move_self html/index.html; do \
		cp html/index.html dist/;                                \
	done

.PHONY: clean
clean:
	rm -rfv dist/
