$(document).on('change', 'input[name=modo_de_entrega]:radio', actualizarFecha);

function actualizarFecha() {
    console.log($("#vse_fecha_retiro").val());
    var dateParts = $("#vse_fecha_retiro").val().split("/");
    var d = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    console.log(d);
    if ($("input[name=modo_de_entrega]:checked").val() == "2") {

        fecha = (d.getDate() + 3) + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
        fecha = fecha.replace(/\b\d\b/g, '0$&');

    } else if ($("input[name=modo_de_entrega]:checked").val() == "3") {

        fecha = (d.getDate() + 4) + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
        fecha = fecha.replace(/\b\d\b/g, '0$&');
    };
    console.log($("input[name=modo_de_entrega]:checked").val());
    console.log(fecha);
    $("#vse_fecha_entrega").datepicker({
        startDate: fecha,
        format: 'dd/mm/yyyy',
        language: "es",
        orientation: "top left",
        clearBtn: true,
        daysOfWeekDisabled: [0, 6],
    })
}