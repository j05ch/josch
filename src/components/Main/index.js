'use strict';

const React = require('react');
const {Box} = require('ink');
const importJsx = require('import-jsx');

const header = importJsx('../Header');
const menu = importJsx('../Menu');

function Main() {
    return(
        <Box flexDirection='column'>
            {header}
            {menu}
        </Box>
    )
}

module.exports = <Main />;
