/**
 * SCORM Cloud Rest API
 * REST API used for SCORM Cloud integrations.
 *
 * OpenAPI spec version: 2.0 beta
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    root.RusticiSoftwareCloudV2.LearnerPreferenceSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LearnerPreferenceSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerPreferenceSchema
   * @version 2.0 beta
   */

  /**
   * Constructs a new <code>LearnerPreferenceSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerPreferenceSchema
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>LearnerPreferenceSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerPreferenceSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerPreferenceSchema} The populated <code>LearnerPreferenceSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('audioLevel')) {
        obj['audioLevel'] = ApiClient.convertToType(data['audioLevel'], 'Number');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('deliverySpeed')) {
        obj['deliverySpeed'] = ApiClient.convertToType(data['deliverySpeed'], 'Number');
      }
      if (data.hasOwnProperty('audioCaptioning')) {
        obj['audioCaptioning'] = ApiClient.convertToType(data['audioCaptioning'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Number} audioLevel
   */
  exports.prototype['audioLevel'] = undefined;
  /**
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {Number} deliverySpeed
   */
  exports.prototype['deliverySpeed'] = undefined;
  /**
   * @member {Integer} audioCaptioning
   */
  exports.prototype['audioCaptioning'] = undefined;



  return exports;
}));


