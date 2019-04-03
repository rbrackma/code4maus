import fetch from 'node-fetch';
import landingTemplate from './landingTemplate.ejs';
import playerTamplate from './playerTemplate.ejs';

const baseUrl = process.env.ASSET_BASEURL;

const imageUrl = (id) => `/data/sharing/${id}`;

const playerFrame = (id) => {
    const content = playerTamplate({ baseUrl, id, imageUrl: imageUrl(id) });

    return {
        statusCode: 200,
        headers: {
            'content-type': 'text/html',
        },
        body: content,
    };
};

const landingPage = async (host, id) => {
    const response = await fetch(baseUrl + '/manifest.json');
    const manifest = await response.json();

    const scripts = [
        manifest['vendors~app~sharingpage.js'],
        manifest['vendors~sharingpage.js'],
        manifest['sharingpage.js'],
    ];

    const content = landingTemplate({
        scripts,
        baseUrl,
        id,
        host,
        imageUrl: imageUrl(id),
    });

    return {
        statusCode: 200,
        headers: {
            'content-type': 'text/html',
        },
        body: content,
    };
};

export const handler = async (event, context, callback) => {
    const hostHeaderName = Object.keys(event.headers).find(
        (header) => header.toLowerCase() === 'host'
    );
    const host = event.headers[hostHeaderName];
    if (!host) {
        return {
            statusCode: 400,
            body: 'Host missing',
        };
    }
    const { id, frame } = event.queryStringParameters;

    if (!id) {
        return {
            statusCode: 400,
            body: 'Parameter missing',
        };
    }

    if (frame !== undefined) {
        return playerFrame(id);
    } else {
        return landingPage(host, id);
    }
};