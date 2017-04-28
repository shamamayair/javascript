/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KubernetesJsClient);
  }
}(this, function(expect, KubernetesJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KubernetesJsClient.V1alpha1PodPresetSpec();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1alpha1PodPresetSpec', function() {
    it('should create an instance of V1alpha1PodPresetSpec', function() {
      // uncomment below and update the code to test V1alpha1PodPresetSpec
      //var instane = new KubernetesJsClient.V1alpha1PodPresetSpec();
      //expect(instance).to.be.a(KubernetesJsClient.V1alpha1PodPresetSpec);
    });

    it('should have the property env (base name: "env")', function() {
      // uncomment below and update the code to test the property env
      //var instane = new KubernetesJsClient.V1alpha1PodPresetSpec();
      //expect(instance).to.be();
    });

    it('should have the property envFrom (base name: "envFrom")', function() {
      // uncomment below and update the code to test the property envFrom
      //var instane = new KubernetesJsClient.V1alpha1PodPresetSpec();
      //expect(instance).to.be();
    });

    it('should have the property selector (base name: "selector")', function() {
      // uncomment below and update the code to test the property selector
      //var instane = new KubernetesJsClient.V1alpha1PodPresetSpec();
      //expect(instance).to.be();
    });

    it('should have the property volumeMounts (base name: "volumeMounts")', function() {
      // uncomment below and update the code to test the property volumeMounts
      //var instane = new KubernetesJsClient.V1alpha1PodPresetSpec();
      //expect(instance).to.be();
    });

    it('should have the property volumes (base name: "volumes")', function() {
      // uncomment below and update the code to test the property volumes
      //var instane = new KubernetesJsClient.V1alpha1PodPresetSpec();
      //expect(instance).to.be();
    });

  });

}));