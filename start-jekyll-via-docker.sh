docker run --rm   --volume="$PWD/docs:/srv/jekyll:Z" --name jekyll -p 127.0.0.1:4000:4000  -it jekyll/jekyll:3  jekyll serve -H 0.0.0.0 --draft
