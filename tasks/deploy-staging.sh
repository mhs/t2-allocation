rm -rf dist/ && \
ember build --env staging && \
scp -r dist/* neo@t2static.neo.com:/var/www/t2allocation-staging.neo.com
