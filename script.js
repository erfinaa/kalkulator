$(document).ready(function () {
    $("#tombol").click(function () {
        var a = parseInt($("#nilai1").val());
        var b = parseInt($("#nilai2").val());
        var operasi = $("#operasi").val();

        if (isNaN(a) || isNaN(b)) {
            alert('isi form dengan angka!')
        } else {
            if (operasi == "+") {
                $("#hasil").val(a + b);
            } else if(operasi == "*") {
                $("#hasil").val(a * b);
            } else if(operasi == "/") {
                $("#hasil").val(a / b);
            } else if(operasi == "-") {
                $("#hasil").val(a - b);
            }
        }

    })
});