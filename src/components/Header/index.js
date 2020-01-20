const React = require('react');
const figlet = require('figlet');
const chalk = require('chalk');
const {Color} = require('ink');

function Header() {
    return (
        <div>
            <div>{
                chalk.red(
                    figlet.textSync(
                        'Jan Olaf Scholz', {
                            horizontalLayout: 'full'
                        }
                    )
                )
            }
            </div>
            <div>
                <Color blue>Welcome! Please choose: </Color>
            </div>
        </div>
    );
}

module.exports = <Header />;
