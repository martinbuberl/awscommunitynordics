# awscommunitynordics

This is the repository of the website [awscommunitynordics.org](https://awscommunitynordics.org/). It is hosted directly from the repository as a [GitHub Pages](https://pages.github.com/) website.

## Local Setup

To preview the website locally:

1. Install [Ruby and Bundler](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) if you don't have them already.

2. Install Jekyll and other [dependencies](https://pages.github.com/versions/) from the GitHub Pages gem:

```sh
$ bundle install
```

3. Run Jekyll using the following command in the `docs` directory:

```sh
$ bundle exec jekyll serve
```

To preview the site with drafts, run jekyll serve with the `--drafts` switch:

```sh
$ bundle exec jekyll serve --drafts
```

Then, load [http://localhost:4000/](http://localhost:4000/) in your browser.
