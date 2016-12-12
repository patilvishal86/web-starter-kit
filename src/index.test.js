import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('my first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('for index.html text', () => {
    it('It should say Hello', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function (err, window) {
            const h1 = window.document.getElementById('H1Tag');
            expect(h1.innerHTML).to.equal('Hello World');
            done();

            window.close();
        });
    });
});
