import 'whatwg-fetch';
import getBaseUrl from './baseUrl';
const baseurl = getBaseUrl();

export function getUsers() {
    return get('users');
}

export function delUser(id) {
    return del(`users/${id}`);
}


function get(url) {
    return fetch(baseurl + url).then(onSuccess, onError);
}
function del(url) {
    const request = new Request(baseurl + url, {
        method: 'DELETE'
    });
    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}
function onError(error) {
    console.log(error);//eslint-disable-line no-console
}
