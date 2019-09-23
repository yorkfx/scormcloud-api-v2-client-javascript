/**
 * SCORM Cloud Rest API
 * REST API used for SCORM Cloud integrations.
 *
 * OpenAPI spec version: 2.0
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
    define(['rustici-software-cloud-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.XapiCredentialAuthTypeSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XapiCredentialAuthTypeSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialAuthTypeSchema
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>XapiCredentialAuthTypeSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialAuthTypeSchema
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>XapiCredentialAuthTypeSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialAuthTypeSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialAuthTypeSchema} The populated <code>XapiCredentialAuthTypeSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('xapiCredentialAuthType')) {
        obj['xapiCredentialAuthType'] = ApiClient.convertToType(data['xapiCredentialAuthType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialAuthTypeSchema.XapiCredentialAuthTypeEnum} xapiCredentialAuthType
   */
  exports.prototype['xapiCredentialAuthType'] = undefined;


  /**
   * Allowed values for the <code>xapiCredentialAuthType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.XapiCredentialAuthTypeEnum = {
    /**
     * value: "BASICAUTH"
     * @const
     */
    "BASICAUTH": "BASICAUTH",
    /**
     * value: "OAUTH"
     * @const
     */
    "OAUTH": "OAUTH"  };


  return exports;
}));


