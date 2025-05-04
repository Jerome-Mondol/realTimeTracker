let socket = io()

if(navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
            const {latitude, longitude} = position.coords;
            socket.emit("send-location", {latitude, longitude} )
        }, (err) => {
            console.error(err)
        },
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 5000
        }
     )

}
