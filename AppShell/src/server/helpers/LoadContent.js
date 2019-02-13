import axios from 'axios';
import RouteConfig from '../../client/utils/RouteConfig';

export default (req) => {
    const coreConfig = RouteConfig['/core'];
    const routeConfig = RouteConfig[req.path];
    return Promise.all([
        getContents(coreConfig.url),
        getContents(routeConfig.url)
    ]).then(responses => {
        return { ...responses[0], ...responses[1]};
    });
};

const getContents = (url) => new Promise((resolve, reject) => {
    axios.get(`${url}/render`)
        .then(({ data }) => {
            resolve(data);
        });
});