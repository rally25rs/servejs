# Serve.js

An extremely simple Node.js application that just opens a Koa web server and serves the contents of a directory as static files.

This is useful for when you need to quickly expose some web content to a browser.

## Installing

```
git clone https://github.com/rally25rs/servejs.git
cd servejs
npm install
npm link
```

This will install an executable command named `serve` to your operating system.

## Usage

Run the `serve` command in whatever directory you want to serve. The server will start on port 8080 by default.

## Options

A path to the directory to serve can be passed like this:

```
serve ./web/content/
```

The default path if one is not specified is the current directory (`'.'`).

The port can be changed using the `--port 1234` option.

```
serve --port 8888
```

The default port if one is not specified is `8080`

## Stopping the server

Press `Ctrl-c` to stop the server
