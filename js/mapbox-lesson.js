document.getElementById("zoomSubmit").addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.getElementById("zoom").value);
});

document.getElementById("setMarkerButton").addEventListener('click', async (event)=>{
    event.preventDefault();
    const address = document.getElementById("setMarker").value;
    let coords = await geocode(address, MAPBOX_API_TOKEN);
    const newMarker = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(map);
    map.setCenter(coords);
});