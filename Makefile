TSS=$(wildcard ts/*.ts)
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
watch: dist/index.html dist/reset.css watch-ts watch-scss

.PHONY: watch-ts
watch-ts: dist $(TSS)
	$(WATCHIFY) -v $(TSS) -p tsify --outfile dist/app.js

.PHONY: watch-scss
watch-scss: dist scss/main.scss
	$(SASS) --watch scss/main.scss dist/main.css

.PHONY: clean
clean:
	rm -rfv dist/
