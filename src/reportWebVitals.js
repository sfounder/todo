const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        return import('web-vitals').then(({
            getCLS, getFID, getFCP, getLCP, getTTFB,
        }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);

            return null;
        }).catch((error) => error);
    }
};

export default reportWebVitals;
