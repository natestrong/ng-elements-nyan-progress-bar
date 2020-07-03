#!/bin/sh
ng build ng-elements-nyan-progress-bar --prod --output-hashing=none && cat dist/ng-elements-nyan-progress-bar/runtime.js dist/ng-elements-nyan-progress-bar/polyfills.js dist/ng-elements-nyan-progress-bar/scripts.js dist/ng-elements-nyan-progress-bar/main.js > demo/ng-elements-nyan-progress-bar.js
# cp dist/ng-elements-nyan-progress-bar.js ./demo
