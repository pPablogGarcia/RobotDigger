const port = process.env.PORT || 3000;
const logSuccess = `
    \n    
    \tServer running on port ${port}!
    \n
`;

module.exports = {
    port,
    logSuccess
};
