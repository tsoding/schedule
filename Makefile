TSS=$(wildcard ts/*.ts)
BROWSERIFY=./node_modules/.bin/browserify
WATCHIFY=./node_modules/.bin/watchify
LESSC=./node_modules/.bin/lessc

all: dist/app.js dist/index.html dist/reset.css dist/main.css

watch: dist/index.html dist/reset.css dist/main.css $(TSS)
	$(WATCHIFY) -v ./ts/app.ts -p tsify --outfile dist/app.js

dist/app.js: dist $(TSS)
	$(BROWSERIFY) ./ts/app.ts -p tsify -g uglifyify --outfile dist/app.js

dist/index.html: dist html/index.html
	cp html/index.html dist/

dist/reset.css: dist css/reset.css
	cp css/reset.css dist/reset.css

dist/main.css: dist less/main.less
	$(LESSC) less/main.less dist/main.css

dist:
	mkdir -p dist

.PHONY: all clean watch

clean:
	rm -rfv dist/
