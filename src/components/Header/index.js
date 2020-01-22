'use strict';

const React = require('react');
const figlet = require('figlet');
const chalk = require('chalk');
const {Color, Box} = require('ink');

function Header() {
    return (
        <Box flexDirection='column'>
            <Box>{
                chalk.red(
                    figlet.textSync('Jan Olaf Scholz')
                )
            }
            </Box>
            <Box>
                <Color blue>Welcome! Please choose:</Color>
            </Box>
            <Box> </Box>
        </Box>
    );
}

module.exports = <Header />;
