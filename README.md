# Project Website

## Requirements

- [Git](https://git-scm.com/) — latest source release
- [Node.js](https://nodejs.org/) — latest LTS version or newer

### Get started

Download the repo.

```bash
git clone <repository-url>
```

### Install dependencies

```bash
npm ci
```

### Start development server

```bash
npm run start
```

While the running server blocks your terminal, it is recommended to use it like that to see live log output. Just open another terminal to continue.

Check the line saying `Web Server is available at //localhost:1313/ (bind address 127.0.0.1)` to find the URL to access the site on your system, hosted by your local server.

The server will observe the local file system and dynamically rebuild the site on any changes.

### Start staging server

```bash
npm run stage
```

### Build production site

```bash
npm run build
```

## Documentation

- [Hugo](https://gohugo.io/documentation/)
