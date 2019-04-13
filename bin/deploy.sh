#!/bin/bash

git checkout gh-pages
git merge master
npm run build
git add ./dist
git commit 
git subtree push --prefix dist origin gh-pages
git checkout master