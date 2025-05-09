import React, { useEffect, useState } from 'react';
import { fetchErrorDevices } from '../services/api';
import ErrorLogs from '../components/ErrorLogs';

function ErrorsPage() {
    const [errors, setErrors] = useState([]);

    const loadErrors = async () => {
        const res = await fetchErrorDevices();
        setErrors(res.data);
    };

    useEffect(() => {
        loadErrors();
    }, []);

    return (
        <div>
            <h1>Sync Errors</h1>
            <ErrorLogs devices={errors} />
        </div>
    );
}

export default ErrorsPage;
