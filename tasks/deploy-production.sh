rm -rf dist/ && \
ember build --env production && \
scp -r dist/* neo@t2static.neo.com:/var/www/t2allocation.neo.com
