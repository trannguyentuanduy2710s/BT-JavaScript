
// BÀI TẬP 1
document.getElementById('btnTinhTien').onclick = function() {
    var tienluong = document.getElementById('tienLuong').value;

    var songaylam = document.getElementById('soNgaylam').value;

    var tongluong = 0;

    tongluong = tienluong * songaylam;

    document.getElementById('TongLuong').innerHTML = tongluong;


}

// BÀI TẬP 2

document.getElementById('btnKetqua').onclick = function() {
    var giaTri1 = +document.getElementById('numBer1').value;

    var giaTri2 =  +document.getElementById('numBer2').value;

    var giaTri3 =  +document.getElementById('numBer3').value;

    var giaTri4 =  +document.getElementById('numBer4').value;      

    var giaTri5 =  +document.getElementById('numBer5').value;

    var ketqua = 0;

    ketqua = (giaTri1 + giaTri2 + giaTri3 + giaTri4 + giaTri5) / 5 ;
    
    document.getElementById('ketQua').innerHTML = ketqua;
}

// BÀI TẬP 3
document.getElementById('btndoiTien').onclick = function() {
    var soTien = document.getElementById('tienDo').value;

    var tienDoi = 23500;

    var tienQuydoi = 0;

    tienQuydoi = soTien * tienDoi;

    document.getElementById('tienVnd').innerHTML = tienQuydoi.toLocaleString();

}

// BÀI TẬP 4
document.getElementById('btnketQua').onclick = function() {
    
    var chieudai = +document.getElementById('chieuDai').value

    var chieurong = +document.getElementById('chieuRong').value

    var chuvi = 0;

    chuvi = (chieudai + chieurong ) * 2;

    var dientich = 0;

    dientich = chieudai * chieurong;

    document.getElementById('result1').innerHTML = chuvi.toLocaleString();


    document.getElementById('result2').innerHTML = dientich.toLocaleString();

}

// BÀI TẬP 5
document.getElementById('btnTongkyso').onclick = function() {
    
    var soDuocnhap =  +document.getElementById('soNhap').value;

    var tong = 0;

    var hangChuc = Math.floor(soDuocnhap/10);

    var hangDonvi = Math.floor(soDuocnhap % 10) ;


    tong = hangChuc + hangDonvi ;

    document.getElementById('haiKyso').innerHTML = tong ;

}
