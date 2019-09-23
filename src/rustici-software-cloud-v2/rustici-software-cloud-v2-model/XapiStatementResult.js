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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XapiStatement'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.XapiStatementResult = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.XapiStatement);
  }
}(this, function(ApiClient, XapiStatement) {
  'use strict';




  /**
   * The XapiStatementResult model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>XapiStatementResult</code>.
   * https://github.com/adlnet/xAPI-Spec/blob/1.0.2/xAPI.md#42-retrieval-of-statements
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementResult
   * @class
   * @param statements {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatement>} 
   */
  var exports = function(statements) {
    var _this = this;

    _this['statements'] = statements;

  };

  /**
   * Constructs a <code>XapiStatementResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementResult} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementResult} The populated <code>XapiStatementResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('statements')) {
        obj['statements'] = ApiClient.convertToType(data['statements'], [XapiStatement]);
      }
      if (data.hasOwnProperty('more')) {
        obj['more'] = ApiClient.convertToType(data['more'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatement>} statements
   */
  exports.prototype['statements'] = undefined;
  /**
   * @member {String} more
   */
  exports.prototype['more'] = undefined;



  return exports;
}));


