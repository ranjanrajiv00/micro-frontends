import axios from 'axios';
import { loadScript, loadStyle } from './LoadScript';
import RouteConfig from './RouteConfig';

export const PreLoading = () => {
    const coreConfig = RouteConfig['/core'];
    const routeConfig = RouteConfig[location.pathname];

    return Promise.all([
        load(coreConfig.url, coreConfig.name),
        load(routeConfig.url, routeConfig.name)
    ]).then(responses => {
        return responses;
    });
}

export const Loading = (name) => {
    const routeConfig = RouteConfig[name];
    return load(routeConfig.url, routeConfig.name);
}

const load = (url, name) => new Promise((resolve, reject) => {
    axios.get(`${url}/api/assets`)
        .then(({ data }) => {
            loadScript(`${url}${data.js}`, name)
                .then((amdModule) => {
                    resolve(amdModule);
                });

            loadStyle(`${url}${data.css}`);
        });
});