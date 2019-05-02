const google = require('googleapis');
const custonSearch = new google.customsearch_v1.Customsearch();
const googleSearchCredentials = require('../config/credentials/google-search.json');

async function GetCompanyNameAndSearch(companyName) {

    const response = await custonSearch
                                    .cse
                                    .list({
                                        auth: googleSearchCredentials.apiKey,
                                        cx: googleSearchCredentials.searchEngineId,
                                        q: ReturnQueryOfSearchGoogle(companyName),
                                        num: 1
                                    });

    return response.data.items;
}

function ReturnQueryOfSearchGoogle(companyName){
    return `
    (${companyName}) AND
    (fraude OR
    suborno OR
    corrupção OR
    antiético OR
    propina OR
    crime OR
    ilegal OR
    ilícito OR
    “lavagem de dinheiro” OR
    FCPA OR
    investigação OR
    acusação OR
    denúncia OR
    suspeito OR
    escândalo OR
    escravidão OR
    violação OR
    “trabalho infantil" OR
    improbidade OR
    desvio OR
    irregularidade OR
    sanções OR
    contas)`;
}



module.exports = {
    search: GetCompanyNameAndSearch
};
