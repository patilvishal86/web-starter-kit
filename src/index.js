import numeral from 'numeral';
import {getUsers, delUser} from './api/userApi';
import './index.css'
const courseVal = numeral(11100).format('$0,00.00');
//debugger;
console.log(`I would pay ${courseVal} for this !!`); //eslint-disable-line no-console

getUsers().then(function(result) {
    let usersBody="";
    result.forEach(user => {
        usersBody+=`<tr>
        <td><a href= "#" data-id="${user.id}" javascript:onclick=delUserById(${user.id});>Delete</a></td>
        <td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.email}</td>
        </tr>`
    });
    global.document.getElementById('users').innerHTML=usersBody;
});

function delUserById(id){
    alert(id);
    delUser(id);
}

delUserById('72953190');
