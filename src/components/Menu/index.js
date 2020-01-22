'use strict';

const React = require('react');
const {useState} = require('react');
const open = require('open');
const {Color, Box, useInput} = require('ink');

function Menu() {
    const [selected, setSelected] = useState(0);

    useInput((input, key) => {
        if (key.downArrow)
            setSelected(selected == 3 ? 0 : selected + 1);
        if (key.upArrow)
            setSelected(selected == 0 ? 3 : selected - 1);
        if (key.return)
            items[selected].action().then(() => {
            });
    });

    const items = [
        {
            label: 'Go to my GitHub page',
            action: async () => await open('https://github.com/j05ch', {url: true})
        },
        {
            label: 'Download my CV',
            action: async () => await open('https://scarif.net', {url: true})
        },
        {
            label: 'Send me an e-mail',
            action: async () => await open('mailto:mail@joscholz.com?Subject=Hi!')
        },
        {
            label: 'Goodbye!',
            action: () => process.exit()
        }
    ];

    const menuItems = items.map(
        ({label, action}, index) => {
            const bullet = index == selected ? <Color red>●</Color> : '○';
            return (
                <Box key={index}>
                    {'   '}{bullet} {label}
                </Box>
            );
        });

    return (
        <>
            {menuItems}
        </>
    );
}

module.exports = <Menu />;
