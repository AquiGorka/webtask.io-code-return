# Webtask Code Return

### Description
Very simple script that uses webtask.io to return the html code you send as query parameter (got the idea from this HN thread: https://news.ycombinator.com/item?id=10976194). 

### Technologies and tools used:

* Javascript
* webtask.io (install with npm: npm install wt-cli -g)

### Create & Run
```sh
wt create index.js
curl -i 'my webtask url' + '?code=desired-HTTP-Code'
```
