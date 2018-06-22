TSS=$(wildcard ts/*.ts)
BROWSERIFY=./node_modules/.bin/browserify
WATCHIFY=./node_modules/.bin/watchify

all: dist/app.js dist/index.html dist/reset.css

watch: dist/index.html dist/reset.css $(TSS) $(WATCHIFY)
	$(WATCHIFY) -v ./ts/app.ts -p tsify --outfile dist/app.js

$(BROWSERIFY): package.json
	npm install

$(WATCHIFY): package.json
	npm install

dist/app.js: dist $(BROWSERIFY) $(TSS)
	$(BROWSERIFY) ./ts/app.ts -p tsify -g uglifyify --outfile dist/app.js

dist/index.html: dist html/index.html
	cp html/index.html dist/

dist/reset.css: dist css/reset.css
	cp css/reset.css dist/reset.css

dist:
	mkdir -p dist

.PHONY: all clean watch

clean:
	rm -rfv dist/
