# Personal Website

This is the code for my [personal website][weblink].

The past versions of my website are in the legacy folder and you can see my design progression though the versions.

[weblink]: http://theodoretan.com

## Startup

To start the server:

```
$ bundle install
$ bundle exec rackup
```

With docker:

```
$ docker build -t theodoretan.com .
$ docker run -p 80:8080 theodoretan.com
```
