function init(){
    var store_detail_json = localStorage.getItem('store_detail')
    var store_detail = JSON.parse(store_detail_json)
    
    const row_1 = document.createElement("div");
    row_1.classList.add("row")
    row_1.classList.add("btn-primary")
    row_1.classList.add("text-center")
    var h_name = document.createElement("H1");
    var t_name = document.createTextNode(store_detail.nombresComercial);
    h_name.appendChild(t_name);
    row_1.appendChild(h_name);
    document.body.insertBefore(row_1, cont);

    const row_2 = document.createElement("div");
    row_2.classList.add("row")
    var p_adress = document.createElement("p");
    var t_adress = document.createTextNode(store_detail.direccion_Direccion);
    p_adress.appendChild(t_adress);
    row_2.appendChild(p_adress);
    document.body.insertBefore(row_2, cont);

    const row_3 = document.createElement("div");
    row_3.classList.add("row")
    var p_ref = document.createElement("p");
    var t_ref = document.createTextNode("N local: " + store_detail.ref);
    p_ref.appendChild(t_ref);
    row_3.appendChild(p_ref);
    document.body.insertBefore(row_3, cont);

    const row_4 = document.createElement("div");
    row_4.classList.add("row")
    var p_ref_2 = document.createElement("p");
    var t_ref_2 = document.createTextNode("Piso: " + store_detail.direccionPiso);
    p_ref_2.appendChild(t_ref_2);
    row_4.appendChild(p_ref_2);
    document.body.insertBefore(row_4, cont);

    const row_5 = document.createElement("div");
    row_5.classList.add("row")
    var p_ref_3 = document.createElement("p");
    var t_ref_3 = document.createTextNode("Referencia: " + store_detail.ref_3);
    p_ref_3.appendChild(t_ref_3);
    row_5.appendChild(p_ref_3);
    document.body.insertBefore(row_5, cont);

    const row_6 = document.createElement("div");
    row_6.classList.add("row")
    var p_timesheet = document.createElement("p");
    var t_timesheet = document.createTextNode("Horario: " + store_detail.direccionHorario);
    p_timesheet.appendChild(t_timesheet);
    row_6.appendChild(p_timesheet);
    document.body.insertBefore(row_6, cont);

    const row_7 = document.createElement("div");
    row_7.classList.add("row")
    var p_mobile = document.createElement("p");
    var t_mobile = document.createTextNode("Celular: " + store_detail.sM_WhatsappId);
    p_mobile.appendChild(t_mobile);
    row_7.appendChild(p_mobile);
    document.body.insertBefore(row_7, cont);
    /*
    const row_8 = document.createElement("div");
    row_8.classList.add("row")
    var p_mobile = document.createElement("p");
    var t_mobile = document.createTextNode("Celular: " + store_detail.mobile);
    p_mobile.appendChild(t_mobile);
    row_8.appendChild(p_mobile);
    document.body.insertBefore(row_8, cont);

    const row_9 = document.createElement("div");
    row_9.classList.add("row")
    var p_mobile = document.createElement("p");
    var t_mobile = document.createTextNode("Celular: " + store_detail.mobile);
    p_mobile.appendChild(t_mobile);
    row_9.appendChild(p_mobile);
    document.body.insertBefore(row_9, cont);
    */
    const row_10 = document.createElement("div");
    row_10.classList.add("row")
    const row_10_1 = document.createElement("div");
    row_10_1.classList.add("col")
    row_10_1.classList.add("text-center")
    var img_logo = document.createElement("img");
    img_logo.src = store_detail.fotoUser;
    img_logo.class ="img-fluid"
    img_logo.alt="Responsive image"
    row_10.appendChild(img_logo);
    document.body.insertBefore(row_10, cont);


    const row_11 = document.createElement("div");
    row_11.classList.add("row")
    const row_11_1 = document.createElement("div");
    row_11_1.classList.add("col")
    row_11_1.classList.add("text-center")
    var button_ar = document.createElement("a");
    button_ar.classList.add("btn")
    button_ar.classList.add("btn-primary")
    button_ar.classList.add("btn-lg")
    button_ar.classList.add("btn-block")
    var button_ar_text = document.createTextNode('Volver a AR');
    button_ar.setAttribute('href', "./arlocation.html");
    button_ar.setAttribute('alt', "Responsive image");
    
    button_ar.appendChild(button_ar_text);
    row_11.appendChild(button_ar);
    document.body.insertBefore(row_11, cont);
}