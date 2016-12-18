export default function getBaseUrl() {
    //const dev=window.location.hostname==='localhost';
    //return dev?'http://localhost:3001/':'/';
//http://localhost:3000/?useMockApi=true
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

var getQueryStringParameterByName = function (name, url) {
    if(!url)url=window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

