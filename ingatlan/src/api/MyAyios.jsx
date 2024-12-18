import axios from "axios";

export const myAxios = axios.create({
    baseURL: 'http://localhost:8000', // Az alapértelmezett API URL
    timeout: 10000, // 10 másodperces időtúllépés beállítása
    
});
