'use strict';
var checkUpdate = require('./');
describe('checkUpdate', function () {
  it('should check for update', function () {
    checkUpdate({
      packageName: 'check-update-tester',
      packageVersion: '0.0.1',
      isCLI: false
    });
  });
});