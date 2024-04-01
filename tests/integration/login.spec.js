// Ajoutez ce polyfill en haut de votre fichier de test si vous utilisez une version de Node.js qui ne supporte pas TextEncoder
if (typeof TextEncoder === "undefined") {
    const { TextEncoder, TextDecoder } = require("util");
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
}

// Assurez-vous que cleanup est correctement importé et défini
import { cleanup } from '@testing-library/react';

// Vérifiez votre composant Vue pour vous assurer que tous les objets sont correctement initialisés
// Par exemple, si vous avez un code comme celui-ci dans votre composant Vue :
// this.someObject._withMods
// Assurez-vous que someObject est initialisé avant d'essayer d'accéder à _withMods
const chai = require('chai');
const chaiHttp = require('chai-http');
const jsdomGlobal = require('jsdom-global');
const { mount } = require('@vue/test-utils');
const Login = require('../../src/views/login.vue');

chai.use(chaiHttp);
let cleanup;

beforeEach(() => {
    cleanup = jsdomGlobal();
});

afterEach(() => {
    cleanup();
});

describe('Login.vue', () => {
    it('should login a user and update the store', async () => {
        const wrapper = mount(Login);


    });
});