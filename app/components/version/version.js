'use strict';

angular.module('clickApp.version', [
  'clickApp.version.interpolate-filter',
  'clickApp.version.version-directive'
])

.value('version', '0.1');
