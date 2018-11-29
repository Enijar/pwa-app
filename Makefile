PROJECT = "PWA App"
PORT = 3000

help:
	@echo "[${PROJECT}] Available Commands"; \
	echo ""; \
	echo "install			Setup and install the app dependencies"; \
	echo "dev				Start the server and watch files for changes"; \
	echo "build				Build assets for production"; \
	echo "help				List available commands"

install:
	@echo "[${PROJECT}] Installing dependencies..."; \
	npm install

dev: start-dev start-dev-assets assets-watch

build: assets-build

start:
	@echo "[${PROJECT}] Starting server..."; \
	export PORT=${PORT}; \
	npm start

start-dev:
	@echo "[${PROJECT}] Starting dev server..."; \
	export PORT=${PORT}; \
	npm run start:dev

start-dev-assets:
	@echo "[${PROJECT}] Starting dev assets server..."; \
	export NODE_ENV=development; \
	export PORT=${PORT}; \
	npm run start:dev-assets

assets-watch:
	@echo "[${PROJECT}] Watching assets..."; \
	export NODE_ENV=development; \
	npm run assets:watch

assets-build:
	@echo "[${PROJECT}] Building assets..."; \
	export NODE_ENV=production; \
	npm run assets:build

.PHONY: install dev build start help
