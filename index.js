function get_data_stores() {
    const url = 'https://gamarraappserviceapi.azurewebsites.net/api/Usuario/ListUsuariosByCoordenadas/200/200';
    fetch(url).then(res => res.json()).then(data => {
        const stores_data = data['usuariosRolTiendaByQuery']
        stores_data.forEach(store => {
            store.direccion_Latitud = parseFloat(store.direccion_Latitud)
            store.direccion_Longitud = parseFloat(store.direccion_Longitud)
        })
        console.log(stores_data);
        localStorage.setItem('stores_data', JSON.stringify(stores_data));

    })
}

function init() {
    get_data_stores();
}