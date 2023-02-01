module.exports = {
    process(src) {
        const escapedSrc = src
            .replace(/`/g, '\\`')
            .replace(/\\/g, '\\\\')
            .replace(/\$(?=\{.*?\})/g, '\\$');

        return { code: `module.exports = \`${escapedSrc}\`` };
    },
};
