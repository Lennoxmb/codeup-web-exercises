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

const restaurant =[
    {name: "Firey Crab", longitude:-92.0451, latitude: 30.16048, info: "Provides a crawfish boil Louisiana style! If you don't like crawfish, hey have shrimp and crab instead!"},
    {name: "broaddus Burgers", longitude: -92.00454, latitude: 30.19619, info: `Has amazing burgers and fries that are best in the world`},
    {name: "Whataburger", longitude:-92.002185, latitude: 30.176411, info: `Burger joint, more expensive than mcD but tastes much better`}
];


restaurant.forEach(restaurant=>{
    const element = document.createElement("div");
    element.className = 'marker';
    const marker = new mapboxgl.Marker(element)
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setHTML(`<p class="popup">${restaurant.name}</p>
        <p>${restaurant.info}</p>`);

    marker.setPopup(popup);
})

document.querySelector("#hideMarkers").addEventListener('click', event=>{
    document.querySelectorAll(".mapboxgl-marker").forEach(svg=>{
        svg.style.display = 'none';
    })
})