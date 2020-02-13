'use strict';

const React = require('react');
const {useState} = require('react');
const open = require('open');
const {Color, Box, useInput} = require('ink');
const items = require('./menuModel');

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
