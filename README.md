# cloudcms-dvor
Cloud CMS engagement artifacts for DVOR "Assets" project

## install content model
    1. create a gitana.json file in this folder (project root)
    2. cd ./content-model
    3. set a branch id in deploy-content-model.sh (you can use "master" as the target branch id)
    4. run the shell script: ./deploy-content-model.sh

    Note: some of the forms use a custom control: "dvor-node-picker"
          so you will need to install the ui module below:

## import Category and Sub Category content

    ### (one time setup) Install and initialize the npm "cloudcms-cli" module:
        1. npm install -g cloudcms-cli
        2. cloudcms init

    ### import data:
        1. cd ./importer
        2. Set a repository id and a branch id in deploy-data.sh
        3. run the shell script: ./deploy-data.sh

## install ui-module
    This Module implements the custom form field "dvor-node-picker" for filtering subCategory fields to those belonging to the selected caegory.

    From Manage Platform / Modules register and deploy a new module:
    ID: dvor-ui
    Title: dvor-ui
    Type: github
    URL: https://github.com/harrymoore/cloudcms-dvor.git
    Path: /ui-modules/ui
    Branch: master
