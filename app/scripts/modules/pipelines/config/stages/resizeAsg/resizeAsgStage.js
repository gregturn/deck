'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.pipelines.stage.resizeAsgStage', [
  require('../../pipelineConfigProvider.js'),
])
  .config(function(pipelineConfigProvider) {
    pipelineConfigProvider.registerStage({
      useBaseProvider: true,
      key: 'resizeAsg',
      label: 'Resize Server Group',
      description: 'Resizes a server group',
    });
  })
  .name;

