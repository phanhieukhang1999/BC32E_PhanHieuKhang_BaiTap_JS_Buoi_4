/*----------Bài 1------------ */
document.getElementById('btnSapXep').onclick = function() {
    //input: soThu1: number, soThu2: number, soThu3: number
    var soThu1 = Number(document.getElementById('soThu1').value);
    var soThu2 = Number(document.getElementById('soThu2').value);
    var soThu3 = Number(document.getElementById('soThu3').value);
    //output: ketQua: string
    var ketQua = '';
    //xử lý
    if (soThu1 > soThu2 && soThu2 > soThu3) {
        ketQua = soThu3 + ' < ' +  soThu2 + ' < ' + soThu1;
    }
    else if(soThu1 > soThu2 && soThu3 > soThu2 && soThu3 < soThu1) {
        ketQua = soThu2 + ' < ' + soThu3 + ' < ' + soThu1;
    }
    else if (soThu1 > soThu2 && soThu3 > soThu1) {
        ketQua = soThu2 + ' < ' + soThu1 + ' < ' + soThu3;
    }
    else if (soThu2 > soThu1 && soThu2 > soThu3 && soThu1 > soThu3 ) {
        ketQua = soThu3 + ' < ' + soThu1 + ' < ' + soThu2;
    }
    else if (soThu2 > soThu3 && soThu3 > soThu1) {
        ketQua = soThu1 + ' < ' + soThu3 + ' < ' + soThu2;
    }
    else {
        ketQua = soThu1 + ' < ' + soThu2 + ' < ' + soThu3;
    }

    document.getElementById('ketQua_b1').innerHTML = ketQua;
}

/*----------Bài 2------------ */
document.getElementById('btnGuiLoiChao').onclick = function() {
    //input: chonThanhVien: string
    var chonThanhVien = document.getElementById('chonThanhVien').value;
    //output: ketQua: string;
    var ketQua = '';
    //xử lý
    if(chonThanhVien == 'bo') {
        ketQua = 'Xin chào Bố !';
    }else if(chonThanhVien = 'me') {
        ketQua = 'Xin chào mẹ !';
    }else if(chonThanhVien == 'anhTrai') {
        ketQua = 'Xin chào anh trai !';
    }else if(chonThanhVien == 'emGai') {
        ketQua = 'Xin chào em gái !';
    }else {
        ketQua = 'Xin chào người lạ ơi !';
    }
    
    document.getElementById('ketQua_b2').innerHTML = ketQua;
}

/*----------Bài 3------------ */
document.getElementById('btnDem').onclick = function() {
    //input: nhapSoThu1: number, nhapSoThu2: number, nhapSoThu3: number
    var nhapSoThu1 = Number(document.getElementById('nhapSoThu1').value);
    var nhapSoThu2 = Number(document.getElementById('nhapSoThu2').value);
    var nhapSoThu3 = Number(document.getElementById('nhapSoThu3').value);
    //output: dem: number
    var dem = 0;
    //xử lý
    
    if(nhapSoThu1 % 2 === 0 ) {
        dem++;
    }
    if(nhapSoThu2 % 2 === 0 ) {
        dem++;
    }
    if(nhapSoThu3 % 2 === 0 ) {
        dem++;
    }

    document.getElementById('ketQua_b3').innerHTML = 'Có ' + dem + ' số chẵn, ' 
    + (3 - dem) + ' số lẻ';
}

/*----------Bài 4------------ */
document.getElementById('btnDuDoan').onclick = function() {
    //input: doDaiCanh1: number, doDaiCanh2: number, doDaiCanh3: number
    var doDaiCanh1 = Number(document.getElementById('doDaiCanh1').value);
    var doDaiCanh2 = Number(document.getElementById('doDaiCanh2').value);
    var doDaiCanh3 = Number(document.getElementById('doDaiCanh3').value);
    //output: ketQua: string c1: number, c2: number, c3: number
    var ketQua = '';
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    //xử lý
    c1 = Math.sqrt(Math.pow(doDaiCanh2, 2) + Math.pow(doDaiCanh3, 2));
    c2 = Math.sqrt(Math.pow(doDaiCanh1, 2) + Math.pow(doDaiCanh3, 2));
    c3 = Math.sqrt(Math.pow(doDaiCanh1, 2) + Math.pow(doDaiCanh2, 2));

    if(doDaiCanh1 == doDaiCanh2 && doDaiCanh2 == doDaiCanh3) {
        ketQua = 'Hình tam giác đều !';
    }
    else if(doDaiCanh1 == doDaiCanh2 || doDaiCanh2 == doDaiCanh3 || doDaiCanh1 == doDaiCanh3) {
        ketQua = 'Hình tam giác cân !';
    }
    else if(doDaiCanh1 == c1 || doDaiCanh2 == c2 || doDaiCanh3 == c3) {
        ketQua = 'Hình tam giác vuông !';
    }else {
        ketQua = 'Một loại tam giác khác !';
    }

    document.getElementById('ketQua_b4').innerHTML = ketQua;
    
}

/*----------Bài 5------------ */

