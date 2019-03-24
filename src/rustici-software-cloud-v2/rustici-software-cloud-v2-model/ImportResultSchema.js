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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CourseSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.ImportResultSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.CourseSchema);
  }
}(this, function(ApiClient, CourseSchema) {
  'use strict';




  /**
   * The ImportResultSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportResultSchema
   * @version 2.0 beta
   */

  /**
   * Constructs a new <code>ImportResultSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportResultSchema
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ImportResultSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportResultSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportResultSchema} The populated <code>ImportResultSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('webPathToCourse')) {
        obj['webPathToCourse'] = ApiClient.convertToType(data['webPathToCourse'], 'String');
      }
      if (data.hasOwnProperty('parserWarnings')) {
        obj['parserWarnings'] = ApiClient.convertToType(data['parserWarnings'], ['String']);
      }
      if (data.hasOwnProperty('courseLanguages')) {
        obj['courseLanguages'] = ApiClient.convertToType(data['courseLanguages'], ['String']);
      }
      if (data.hasOwnProperty('course')) {
        obj['course'] = CourseSchema.constructFromObject(data['course']);
      }
    }
    return obj;
  }

  /**
   * web path to this course
   * @member {String} webPathToCourse
   */
  exports.prototype['webPathToCourse'] = undefined;
  /**
   * @member {Array.<String>} parserWarnings
   */
  exports.prototype['parserWarnings'] = undefined;
  /**
   * @member {Array.<String>} courseLanguages
   */
  exports.prototype['courseLanguages'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseSchema} course
   */
  exports.prototype['course'] = undefined;



  return exports;
}));


