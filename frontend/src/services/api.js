import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const fetchDevices = () => axios.get(`${API_BASE}/devices`);
export const triggerSync = (deviceId) => axios.post(`${API_BASE}/devices/sync/${deviceId}`);
export const fetchErrorDevices = () => axios.get(`${API_BASE}/errors`);
