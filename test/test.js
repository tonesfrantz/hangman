const assert = require('chai').assert;
const main = require('../main');

describe('Main', function () {
    it('app should return string', function () {
        assert.typeOf(main.randomWord(), 'string');
    });
});
