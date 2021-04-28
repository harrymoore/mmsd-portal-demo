#!/bin/sh

# build form fields from definition
# npx cloudcms-util create-form-fields --data-path ./ --qname mmds:page --overwrite

# use cloudcms-util import feature to upload a local copy of the content model to a cloud cms branch
# npm install cloudcms-util
npx cloudcms-util import -g ../gitana.json --branch master --all-definitions --folder-path .
