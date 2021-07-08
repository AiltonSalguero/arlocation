function get_data_stores() {
    const url = 'https://gamarraappserviceapi.azurewebsites.net/api/Usuario/ListUsuariosByCoordenadas/200/200';
    fetch(url).then(res => res.json()).then(data => {
        const stores_data = data['usuariosRolTiendaByQuery']
        console.log(stores_data);
        stores_data.forEach(store => {
            store.direccion_Latitud = parseFloat(store.direccion_Latitud.text().replace(',', '.'));
            store.direccion_Longitud = parseFloat(store.direccion_Longitud.text().replace(',', '.'));
        })
        console.log(stores_data);
        localStorage.setItem('stores_data', JSON.stringify(stores_data));

    })
}

function init() {
    get_data_stores();
}