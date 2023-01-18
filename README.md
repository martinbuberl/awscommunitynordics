# awscommunitynordics.org

This is the repository of the website [awscommunitynordics.org](https://awscommunitynordics.org/).

It is hosted directly from this repository as a [GitHub Pages](https://pages.github.com/) website.

## Prerequisites

Install [Ruby and Bundler](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) if you don't have them already.

## Installation

### Install jekyll locally on your computer
This GitHub Pages site is [configured to be published from the `/docs` folder on the `master` branch](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch). Change directory to that folder `cd docs`.

Install Jekyll and other [dependencies](https://pages.github.com/versions/) from the [GitHub Pages](docs/Gemfile) gem:

```
bundle install
```

If your user account isn't allowed to install to the system RubyGems you can run `bundle install --path vendor/bundle` to install the gems locally.

## Serve

To preview the Jekyll site locally run:

```
bundle exec jekyll serve
```

### Run jekyll via docker
```
docker run --rm   --volume="$PWD/docs:/srv/jekyll:Z" --name jekyll -p 127.0.0.1:4000:4000  -it jekyll/jekyll:$JEKYLL_VERSION  jekyll serve -H 0.0.0.0 --draft

```

### When jekyll is running
Then, load [http://localhost:4000/](http://localhost:4000/) in your browser.
