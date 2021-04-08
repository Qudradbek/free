var ism = [];
var fam = [];
var sharf = [];

function add() {
    var inputIsm = document.getElementById('ism').value;
    var inputFam = document.getElementById('fam').value;
    var inputSharf = document.getElementById('sharf').value;

    ism.push(inputIsm);
    fam.push(inputFam);
    sharf.push(inputSharf);
    // console.log('Ism: ' + ism + ' ' + fam + ' ' + sharf)

    var Alltr = '';
    for (var k = 0; k < fam.length; k++){
        var tr = '<tr><td>'+ (k+1) +'</td><td>'+ism[k]+'</td><td>'+fam[k]+'</td><td>'+sharf[k]+'</td></tr>';
        Alltr += tr;
    }
    document.getElementById('tbody').innerHTML = Alltr;
}

function mainPay() {
    var inputSum = document.getElementById('kreditSum').value;
    var inputPay = document.getElementById('kreditPay').value;
    var inputFoiz = document.getElementById('kreditFoiz').value;

    if (inputSum != '' &&inputPay != ''){
        var x = parseInt(inputSum)-parseInt(inputPay);
        var foizsumma = (x * parseInt(inputFoiz))/100;

        document.getElementById('resultSumma').value = x;
        document.getElementById('resultPay').value = foizsumma;
    }else{
        document.getElementById('resultSumma').value = '';
        document.getElementById('resultPay').value = '';
    }
}

var array = ['Junary', 'Fevrary', 'March', 'Aprel', 'May', 'June',
    'Jule', 'August', 'September', 'Oktamber', 'November', 'December']
function hisob() {
    var inputSum = document.getElementById('kreditSum').value;
    var inputPay = document.getElementById('kreditPay').value;
    var inputFoiz = document.getElementById('kreditFoiz').value;
    var muddat = document.getElementById('kreditYil').value;

    var allsum = parseInt(inputSum)-parseInt(inputPay);
    var foiz = ((allsum * inputFoiz)/100) * muddat;
    var foizsum = foiz/12;
    var oySum = allsum/12;
    muddat = muddat * 12;
    var allTr='';

    for (i = 0; i < muddat; i++){
        var tr = '<tr><td>' + (i + 1) + '</td><td>' + array[i%12] + '</td><td>' + oySum + '</td>' +
        '<td>' + foizsum + '</td><td>'+ (oySum + foizsum) +'</td></tr>';
        allTr += tr;
    }
    document.getElementById('table').innerHTML = allTr;
}