TSS=$(shell find ./ts/ -type f -name '*.ts')
BROWSERIFY=./node_modules/.bin/browserify
WATCHIFY=./node_modules/.bin/watchify
SASS=./node_modules/.bin/sass
STATIC=html/index.html css/reset.css json/schedule.json

# PRODUCTION ##############################

.PHONY: all
all: dist/app.js dist/index.html dist/reset.css dist/main.css dist/schedule.json

dist/app.js: dist $(TSS)
	$(BROWSERIFY) ./ts/app.ts -p tsify -g uglifyify --outfile dist/app.js

dist/index.html: dist html/index.html
	cp html/index.html dist/

dist/reset.css: dist css/reset.css
	cp css/reset.css dist/reset.css

dist/main.css: dist scss/main.scss
	$(SASS) --no-source-map scss/main.scss dist/main.css

dist/schedule.json: dist json/schedule.json
	jq -c . json/schedule.json > dist/schedule.json

dist:
	mkdir -p dist

# DEVELOPMENT ##############################

.PHONY: watch
watch: watch-ts watch-scss watch-static http-server

.PHONY: watch-ts
watch-ts: dist $(TSS)
	$(WATCHIFY) ./ts/app.ts -v -p tsify --outfile dist/app.js --debug

.PHONY: watch-scss
watch-scss: dist scss/main.scss
	$(SASS) --watch scss/main.scss dist/main.css

.PHONY: watch-static
watch-static: dist $(STATIC)
	cp $(STATIC) dist/
	while inotifywait -q -e modify,move_self $(STATIC); do \
		cp $(STATIC) dist/;                                \
	done

.PHONY: http-server
http-server: dist
	python -m SimpleHTTPServer 8080

.PHONY: clean
clean:
	rm -rfv dist/
