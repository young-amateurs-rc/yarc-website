# yarc.world
YARC Website

## Deployment

### Github Pages

See [Github Help](https://help.github.com/en/github/working-with-github-pages)

### Docker Deployment

`docker-compose.yml`:

```yml
version: '3'
services:
    website:
        image: "whitegecko/dockerjekyllpages:latest"
        restart: always
        environment:
            - "REPO=https://github.com/young-amateurs-rc/yarc-website.git"
            - "BRANCH=master"
```

Then, do `curl -X POST {{ domain }}/cgi/buildsite.sh`.

Repeat the `curl` command whenever you need to update the website.
