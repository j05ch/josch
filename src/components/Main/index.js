const React = require('react');
const importJsx = require('import-jsx');

const header = importJsx('../Header');

function Main() {
    return(
        <div>
            {header}
        </div>
    )
}

module.exports = <Main />;
