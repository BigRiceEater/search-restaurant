#!/bin/bash

git checkout master
npm run build
git add ./dist
git commit 
git checkout gh-pages
git merge master
git subtree push --prefix dist origin gh-pages
git checkout master