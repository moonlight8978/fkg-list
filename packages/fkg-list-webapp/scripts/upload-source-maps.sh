echo $REACT_APP_COMMIT_ID
export SENTRY_ORG=le-si-bich
export SENTRY_PROJECT=fkg-list

yarn sentry-cli releases new $REACT_APP_COMMIT_ID

yarn sentry-cli releases files $REACT_APP_COMMIT_ID upload-sourcemaps --no-rewrite ./build/static/js/ --url-prefix "~/static/js"

yarn sentry-cli releases finalize $REACT_APP_COMMIT_ID
