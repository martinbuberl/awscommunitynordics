# AWS Mena Community

This is the repository of the website [awsmena.community](https://awsmena.community). It is hosted directly from the repository as a [GitHub Pages](https://pages.github.com/) website.

## Local Setup

To preview the website locally:

1. Install [Ruby and Bundler](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) if you don't have them already.

2. Install Jekyll and other [dependencies](https://pages.github.com/versions/) from the GitHub Pages gem in the `docs` directory:

```sh
$ cd docs && bundle install
```

3. Run Jekyll using the following command :

```sh
$ bundle exec jekyll serve
```

To preview the site with drafts, run jekyll serve with the `--drafts` switch:

```sh
$ bundle exec jekyll serve --drafts
```

Then, load [http://localhost:4000/](http://localhost:4000/) in your browser.

## Contributions

Issues and PRs are welcome and appreciated.

## Credits

This website was originally forked from [martinbuberl/awscommunitynordics](https://github.com/martinbuberl/awscommunitynordics). 

Big thanks to [AWS Community Nordics](https://awscommunitynordics.org/).
