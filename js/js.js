$(document).ready(function () {
    $('#gen_pass').on('click', genPass.pass);
    $('#gen_pass_strong').on('click', genPassStrong.pass);
});
var before, after, url;

var  genPass = {
    'before': '',
    'after': '',
    'url': '',
    'pass': function () {
        genPass.before = $('#before').val();
        genPass.after = $('#after').val();
        genPass.url = $('#url').val();
        var newUrl = genPass.url;
        newUrl = newUrl.replace(/http:\/\//g,'');
        newUrl = newUrl.replace(/https:\/\//g,'');
        newUrl = newUrl.replace(/www./g,'');
        newUrl = newUrl.replace(/o/gi, '0');
        newUrl = newUrl.replace(/l/g, '1');
        newUrl = newUrl.replace(/i/g, 'I');
        newUrl = newUrl.replace(/s/gi, '5');
        newUrl = newUrl.replace(/ /gi, '');
        var dotPos = newUrl.search(/\./);
        if(dotPos>0){newUrl = newUrl.substr(0,dotPos);}
        var newPass = genPass.before + newUrl + genPass.after;
        $('.new_pass').html(newPass);
    }};
    genPass.pass();


var  genPassStrong = {
    'before': '',
    // 'after': '',
    'url': '',
    'salt': '2;b+/d<-fa1',
    'pass': function () {
        var saltNew = genPassStrong.salt;
        var saltNew1 ='';
        for(var i=0; i<4; i++){
            var rand = Math.floor(Math.random() * 10);
            saltNew1 +=saltNew.charAt(rand);
            console.log(saltNew1);
        }
        console.log('2 - '+saltNew1);
        genPassStrong.before = $('#before').val();
        genPassStrong.after = $('#after').val();
        genPassStrong.url = $('#url').val();
        var newUrl = genPassStrong.url;
        newUrl = newUrl.replace(/http:\/\//g,'');
        newUrl = newUrl.replace(/https:\/\//g,'');
        newUrl = newUrl.replace(/www./g,'');
        newUrl = newUrl.replace(/o/gi, '0');
        newUrl = newUrl.replace(/l/g, '1');
        newUrl = newUrl.replace(/i/g, 'I');
        newUrl = newUrl.replace(/s/gi, '5');
        newUrl = newUrl.replace(/2/g, 'Z');
        newUrl = newUrl.replace(/z/g, '2');
        newUrl = newUrl.replace(/4/g, 'H');
        newUrl = newUrl.replace(/h/g, '4');
        newUrl = newUrl.replace(/ /gi, '');
        var dotPos = newUrl.search(/\./);
        if(dotPos>0){newUrl = newUrl.substr(0,dotPos);}
        var newPassStrong = genPassStrong.before+newUrl+saltNew1;
        // var newPassStrong = genPassStrong.before+newUrl;
        // console.log(newPassStrong.charAt(Math.floor(Math.random() * 10)));
        // newPassStrong = newPassStrong.replace(/1/g, newPassStrong.charAt(Math.floor(Math.random() * 10)));
        // newPassStrong = newPassStrong.replace(/5/g, newPassStrong.charAt(Math.floor(Math.random() * 10)));
        // newPassStrong = newPassStrong.replace(/6/g, newPassStrong.charAt(Math.floor(Math.random() * 10)));
        $('.new_pass').html(newPassStrong);
    }};
genPassStrong.pass();

// function getDataStrong() {
//     before = $('#before').val();
//     after = $('#after').val();
//     url = $('#url').val();
//
//     genPass = {
//         'before': before,
//         'after': after,
//         'url': url,
//         'pass': function () {
//             var newUrl = genPass.url;
//             newUrl = newUrl.replace(/http:\/\//g,'');
//             newUrl = newUrl.replace(/https:\/\//g,'');
//             newUrl = newUrl.replace(/www./g,'');
//             newUrl = newUrl.replace(/o/gi, '0');
//             newUrl = newUrl.replace(/l/g, '1');
//             newUrl = newUrl.replace(/i/g, 'I');
//             newUrl = newUrl.replace(/s/gi, '5');
//             newUrl = newUrl.replace(/ /gi, '');
//             var dotPos = newUrl.search(/\./);
//             newUrl = newUrl.substr(0,dotPos);
//             var newPass = genPass.before+newUrl+genPass.after;
//             $('.new_pass').html(newPass);
//             // console.log(dotPos);
//             // console.log('index - '+newUrl.search(/\./));
//             // console.log(newPass);
//         }};
//
//     genPass.pass();
// }

