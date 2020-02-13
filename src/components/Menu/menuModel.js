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

module.exports = items;