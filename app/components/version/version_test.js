'use strict';

describe('clickApp.version module', function() {
  beforeEach(module('clickApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
