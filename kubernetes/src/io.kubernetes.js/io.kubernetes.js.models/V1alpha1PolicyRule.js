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
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1alpha1PolicyRule = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1alpha1PolicyRule model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1alpha1PolicyRule
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1alpha1PolicyRule</code>.
   * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1PolicyRule
   * @class
   * @param verbs {Array.<String>} Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
   */
  var exports = function(verbs) {
    var _this = this;





    _this['verbs'] = verbs;
  };

  /**
   * Constructs a <code>V1alpha1PolicyRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1PolicyRule} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1PolicyRule} The populated <code>V1alpha1PolicyRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiGroups')) {
        obj['apiGroups'] = ApiClient.convertToType(data['apiGroups'], ['String']);
      }
      if (data.hasOwnProperty('nonResourceURLs')) {
        obj['nonResourceURLs'] = ApiClient.convertToType(data['nonResourceURLs'], ['String']);
      }
      if (data.hasOwnProperty('resourceNames')) {
        obj['resourceNames'] = ApiClient.convertToType(data['resourceNames'], ['String']);
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = ApiClient.convertToType(data['resources'], ['String']);
      }
      if (data.hasOwnProperty('verbs')) {
        obj['verbs'] = ApiClient.convertToType(data['verbs'], ['String']);
      }
    }
    return obj;
  }

  /**
   * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
   * @member {Array.<String>} apiGroups
   */
  exports.prototype['apiGroups'] = undefined;
  /**
   * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path This name is intentionally different than the internal type so that the DefaultConvert works nicely and because the ordering may be different. Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as \"pods\" or \"secrets\") or non-resource URL paths (such as \"/api\"),  but not both.
   * @member {Array.<String>} nonResourceURLs
   */
  exports.prototype['nonResourceURLs'] = undefined;
  /**
   * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
   * @member {Array.<String>} resourceNames
   */
  exports.prototype['resourceNames'] = undefined;
  /**
   * Resources is a list of resources this rule applies to.  ResourceAll represents all resources.
   * @member {Array.<String>} resources
   */
  exports.prototype['resources'] = undefined;
  /**
   * Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
   * @member {Array.<String>} verbs
   */
  exports.prototype['verbs'] = undefined;



  return exports;
}));

