import $ from 'jquery';
import './style.scss';

let num = 0
let counter = () => {
    ++num;
    $('#main').html('Youve been on this page for ' + num + ' seconds!');
}

setInterval(counter, 1000);




