$(document).ready(function () {
    $('#lite').addClass('active');
    $('.pass-wrap').load('modules/lite.html', function () {
        $('#gen_pass').on('click', genPass.pass);
    });
    $('#strong').on('click', function () {
        $('ul li a').removeClass('active');
        $('.pass-wrap').load('modules/strong.html', function () {
            $('#gen_pass_strong').on('click', genPassStrong.pass);
        });
        $('#strong').addClass('active');

    });
    $('#lite').on('click', function () {
        $('ul li a').removeClass('active');
        $('.pass-wrap').load('modules/lite.html', function () {
            $('#gen_pass').on('click', genPass.pass);
        });
        $('#lite').addClass('active');
    });

    // $('#gen_pass_strong').on('click', genPassStrong.pass);
});

var before, after, url;

var  genPass = {
    'before': '738',
    'after': 'dtT',
    'url': '',
    'pass': function () {
        $('#url').removeClass('empty');
        $('.error').removeClass('visible');
        genPass.url = $('#url').val();
        if( genPass.url != ''){
            //genPass.before = $('#before').val();
            //genPass.after = $('#after').val();
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
            $('.new_pass_wrapp').html('<div class="new_pass">'+newPass+'</div>');
        }
        else{
            $('#url').addClass('empty');
            $('.error').addClass('visible');
            $('.new_pass_wrapp').html('');
        }
    }};
    //genPass.pass();


var  genPassStrong = {
    'before': '738,',
    // 'after': '',
    'url': '',
    'salt': '2;b+/d>-fa1',
    'pass': function () {
        $('#url').removeClass('empty');
        $('.error').removeClass('visible');
        genPassStrong.url = $('#url').val();

        if(genPassStrong.url != ''){
            var saltNew = genPassStrong.salt;
            var saltNew1 ='';
            for(var i=0; i<4; i++){
                var rand = Math.floor(Math.random() * 10);
                saltNew1 +=saltNew.charAt(rand);
                console.log(saltNew1);
            }
            console.log('2 - '+saltNew1);
            //genPassStrong.before = $('#before').val();
            //genPassStrong.url = $('#url').val();
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
            newUrl = newUrl.replace(newUrl[3], saltNew.charAt(0));
            newUrl = newUrl.replace(newUrl[5], saltNew.charAt(1));
            newUrl = newUrl.replace(newUrl[7], saltNew.charAt(2));
            var newPassStrong = genPassStrong.before+newUrl+saltNew1;
            $('.new_pass_wrapp').html('<div class="new_pass">'+newPassStrong+'</div>');
        }
        else{
            $('#url').addClass('empty');
            $('.error').addClass('visible');
            $('.new_pass_wrapp').html('');
        }
    }};
//genPassStrong.pass();

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

