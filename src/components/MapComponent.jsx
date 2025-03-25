"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

export default function MapComponent({ startLocation, endLocation }) {
  const [map, setMap] = useState(null);
  const [socket, setSocket] = useState(null);
  const [userMarker, setUserMarker] = useState(null);
  const [routeControl, setRouteControl] = useState(null);
  const markers = {};
  const userIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    setSocket(newSocket);

    const mapContainer = document.getElementById("map");
    if (mapContainer?._leaflet_id != null) mapContainer._leaflet_id = null;

    const newMap = L.map("map").setView([20.5937, 78.9629], 5);
    setMap(newMap);
    newMap.dragging.enable();

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "APUN KA MAP>>",
      maxZoom: 19,
    }).addTo(newMap);

    newSocket.on("receive-location", (data) => {
      const { id, latitude, longitude } = data;
      if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
      } else {
        markers[id] = L.marker([latitude, longitude], { icon: userIcon }).addTo(newMap);
      }
    });

    return () => {
      newMap.remove();
      newSocket.disconnect();
    };
  }, []);

  const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve([position.coords.latitude, position.coords.longitude]),
          reject,
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
        );
      } else reject(new Error("Geolocation not supported"));
    });
  };

  const initializeUserLocation = async () => {
    try {
      const [latitude, longitude] = await getUserLocation();
      if (!map) return;

      if (routeControl) map.removeControl(routeControl);
      if (!userMarker) {
        const marker = L.marker([latitude, longitude], { icon: userIcon }).addTo(map);
        setUserMarker(marker);
        map.setView([latitude, longitude], 16);
      } else userMarker.setLatLng([latitude, longitude]);

      socket.emit("send-location", { latitude, longitude });
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  const getCoordinates = async (location) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.length === 0 ? null : [parseFloat(data[0].lat), parseFloat(data[0].lon)];
  };

  const drawRoute = async () => {
    if (!map) return;
    if (!startLocation || !endLocation) {
      if (startLocation === "Your Location") {
        await initializeUserLocation();
        return;
      }
    }

    try {
      const startCoords = await getCoordinates(startLocation);
      const endCoords = await getCoordinates(endLocation);

      if (!startCoords) return alert("Enter a valid start location");
      if (routeControl) map.removeControl(routeControl);
      if (userMarker) {
        map.removeLayer(userMarker);
        setUserMarker(null);
      }

      const control = L.Routing.control({
        waypoints: [L.latLng(startCoords), L.latLng(endCoords)],
        routeWhileDragging: true,
        addWaypoints: true,
        show: true,
      }).addTo(map);

      const container = control.getContainer();
      container.style.display = "none";
      setRouteControl(control);
    } catch (error) {
      console.error("Error fetching location data:", error);
      alert("An error occurred while fetching location data.");
    }
  };

  useEffect(() => {
    if (startLocation && endLocation) drawRoute();
  }, [startLocation, endLocation]);

  return <div id="map" style={{ height: "500px", width: "100%", borderRadius: "10px" }}></div>;
}
