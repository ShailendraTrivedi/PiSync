import React from 'react';

function ErrorLogs({ devices }) {
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Devices with Sync Errors</h2>
            <ul>
                {devices.map(device => (
                    <li key={device.id}>
                        {device.id} — Last Sync: {new Date(device.lastSyncTime).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ErrorLogs;
