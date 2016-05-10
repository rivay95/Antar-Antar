//Login
$(document).ready(function(){
    $("#login").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();
    localStorage.setItem('Text',username);
        var error = true;

        $.ajax({
            type: "POST",
            url: "http://10.174.213.253/antarantar_service/login.php",
            dataType: "json",
            success : function(data){
                $.each(data, function(key, value){
                  if(username == value.username && password == value.password){
                    error = false;
                  }  
                });
                if(error==false){
                    window.location='home.html';
                }else{
                    alert('Gagal');
                }
                }
            });
            return false;
        });
    });

//daftar
            $('document').ready(function() {
                $('#daftar').click(function() {
                    var username = $('#username').val();
                    var email = $('#email').val();
                    var tgl_lahir = $('#tgl_lahir').val();
                    var no_telp = $('#no_telp').val();
                    var password=$('#password').val();
                    var data = 'username=' + username + '&email=' + email + '&tgl_lahir=' + tgl_lahir + '&no_telp=' + no_telp +'&password=' + password;
                    $.ajax({
                        type: 'POST',
                        url: "http://10.174.213.253/antarantar_service/daftar.php",
                        data: data,
                        success: function() {
                          window.location.href='index.html';
                        }
                    });
                });
            });

//pesan
            $('document').ready(function() {
                $('#lanjut').click(function() {
                    
                    var lokasi = $('#lokasi').val();
                    var lokasi_detail = $('#lokasi_detail').val();
                    var tujuan = $('#tujuan').val();
                    var tujuan_detail = $('#tujuan_detail').val();
                    var keterangan=$('#keterangan').val();
                    var data = 'lokasi=' + lokasi + '&lokasi_detail=' + lokasi_detail + '&tujuan=' + tujuan + '&tujuan_detail=' + tujuan_detail +'&keterangan=' + keterangan;
                    $.ajax({
                        type: 'POST',
                        url: "http://10.174.213.253/antarantar_service/pesan.php",
                        data: data,
                        success: function() {
                          window.location.href='antar-barang-list.html';
                        }
                    });
                });
            });


$(document).ready(function(){
        $.ajax({
       url: "http://10.174.213.253/antarantar_service/data_pesan.php",
        dataType: 'json',
        timeout: 5000,
        success: function(data, status){
            $.each(data, function(i,item){ 
                $("#lokasi").append(item.lokasi);
                $("#lokasi_detail").append(item.lokasi_detail);
                $("#tujuan").append(item.tujuan);
                $("#tujuan_detail").append(item.tujuan_detail);
            });
            $("#pesan");
        },
            error: function(){
            alert('Error terjadi');
            }
        });
        });  
