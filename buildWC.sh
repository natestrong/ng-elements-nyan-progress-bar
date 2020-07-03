#!/bin/sh
ng build ng-elements-nyan-progress-bar --prod --output-hashing=none --single-bundle true --keep-polyfills true
mv dist/ng-elements-nyan-progress-bar/main.js demo/nyan-progress.js
mv dist/ng-elements-nyan-progress-bar/polyfills.js demo
