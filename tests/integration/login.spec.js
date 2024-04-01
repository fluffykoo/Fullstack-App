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