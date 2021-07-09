function get_data_stores() {
    const url = 'https://gamarraappserviceapi.azurewebsites.net/api/Usuario/ListUsuariosByCoordenadas/200/200';
    fetch(url).then(res => res.json()).then(data => {
        const stores_data = data['usuariosRolTiendaByQuery']
        console.log(stores_data);
        stores_data.forEach(store => {
            store.direccion_Latitud = parseFloat(store.direccion_Latitud.replace(',', '.'));
            store.direccion_Longitud = parseFloat(store.direccion_Longitud.replace(',', '.'));
        })
        stores_data.push(
            {
                "direccionId": 150,
                "usuarioId": 14,
                "direccion_Direccion": "Agustin Gamarra 650, La Victoria 15018, Perú",
                "direccionPiso": "1",
                "direccion_NroLocal": "650",
                "direccion_Referencia": "Alt. Av Agustin Gamarra Cdra 6",
                "direccionTelefono": "",
                "direccionHorario": "9:30 - 20:00",
                "direccion_Latitud": -11.9655429,
                "direccion_Longitud": -76.9943375,
                "nombresComercial": "Kayser",
                "fotoUser": "https://gamarraappstorage.blob.core.windows.net/imagenesusuarios/UserPhoto_14.png",
                "logoUser": "https://gamarraappstorage.blob.core.windows.net/logosusuarios/UserLogo_14.png",
                "galeriaId": 0,
                "galeriaDescripcion": "[No posee Galeria]",
                "galeria_Direccion": null,
                "sM_FacebookId": "kayser.peru",
                "sM_InstagramId": "kayserperu",
                "sM_WhatsappId": "999693860"
              }
        );
        console.log(stores_data);
        localStorage.setItem('stores_data', JSON.stringify(stores_data));

    })
}

function init() {
    get_data_stores();
}