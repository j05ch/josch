#!/usr/bin/env node

'use strict';

const importJsx = require('import-jsx');
const { render } = require('ink');
const clear = require('clear');
const userInterface = importJsx('./components/Main');

clear();
render(userInterface);
