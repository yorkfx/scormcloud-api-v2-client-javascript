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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ActivityResultSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseReferenceSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ObjectiveSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationCompletion', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationSuccess', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ScoreSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/SharedDataEntrySchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityResultSchema'), require('./CourseReferenceSchema'), require('./LearnerSchema'), require('./ObjectiveSchema'), require('./RegistrationCompletion'), require('./RegistrationSuccess'), require('./ScoreSchema'), require('./SharedDataEntrySchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.RegistrationSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.ActivityResultSchema, root.RusticiSoftwareCloudV2.CourseReferenceSchema, root.RusticiSoftwareCloudV2.LearnerSchema, root.RusticiSoftwareCloudV2.ObjectiveSchema, root.RusticiSoftwareCloudV2.RegistrationCompletion, root.RusticiSoftwareCloudV2.RegistrationSuccess, root.RusticiSoftwareCloudV2.ScoreSchema, root.RusticiSoftwareCloudV2.SharedDataEntrySchema);
  }
}(this, function(ApiClient, ActivityResultSchema, CourseReferenceSchema, LearnerSchema, ObjectiveSchema, RegistrationCompletion, RegistrationSuccess, ScoreSchema, SharedDataEntrySchema) {
  'use strict';




  /**
   * The RegistrationSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationSchema
   * @version 2.0 beta
   */

  /**
   * Constructs a new <code>RegistrationSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationSchema
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>RegistrationSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationSchema} The populated <code>RegistrationSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('instance')) {
        obj['instance'] = ApiClient.convertToType(data['instance'], 'Integer');
      }
      if (data.hasOwnProperty('xapiRegistrationId')) {
        obj['xapiRegistrationId'] = ApiClient.convertToType(data['xapiRegistrationId'], 'String');
      }
      if (data.hasOwnProperty('dispatchId')) {
        obj['dispatchId'] = ApiClient.convertToType(data['dispatchId'], 'String');
      }
      if (data.hasOwnProperty('updated')) {
        obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
      }
      if (data.hasOwnProperty('registrationCompletion')) {
        obj['registrationCompletion'] = RegistrationCompletion.constructFromObject(data['registrationCompletion']);
      }
      if (data.hasOwnProperty('registrationCompletionAmount')) {
        obj['registrationCompletionAmount'] = ApiClient.convertToType(data['registrationCompletionAmount'], 'Number');
      }
      if (data.hasOwnProperty('registrationSuccess')) {
        obj['registrationSuccess'] = RegistrationSuccess.constructFromObject(data['registrationSuccess']);
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ScoreSchema.constructFromObject(data['score']);
      }
      if (data.hasOwnProperty('totalSecondsTracked')) {
        obj['totalSecondsTracked'] = ApiClient.convertToType(data['totalSecondsTracked'], 'Number');
      }
      if (data.hasOwnProperty('firstAccessDate')) {
        obj['firstAccessDate'] = ApiClient.convertToType(data['firstAccessDate'], 'Date');
      }
      if (data.hasOwnProperty('lastAccessDate')) {
        obj['lastAccessDate'] = ApiClient.convertToType(data['lastAccessDate'], 'Date');
      }
      if (data.hasOwnProperty('completedDate')) {
        obj['completedDate'] = ApiClient.convertToType(data['completedDate'], 'Date');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
      }
      if (data.hasOwnProperty('course')) {
        obj['course'] = CourseReferenceSchema.constructFromObject(data['course']);
      }
      if (data.hasOwnProperty('learner')) {
        obj['learner'] = LearnerSchema.constructFromObject(data['learner']);
      }
      if (data.hasOwnProperty('globalObjectives')) {
        obj['globalObjectives'] = ApiClient.convertToType(data['globalObjectives'], [ObjectiveSchema]);
      }
      if (data.hasOwnProperty('sharedData')) {
        obj['sharedData'] = ApiClient.convertToType(data['sharedData'], [SharedDataEntrySchema]);
      }
      if (data.hasOwnProperty('suspendedActivityId')) {
        obj['suspendedActivityId'] = ApiClient.convertToType(data['suspendedActivityId'], 'String');
      }
      if (data.hasOwnProperty('activityDetails')) {
        obj['activityDetails'] = ActivityResultSchema.constructFromObject(data['activityDetails']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} instance
   */
  exports.prototype['instance'] = undefined;
  /**
   * xAPI registration id associated with this registration
   * @member {String} xapiRegistrationId
   */
  exports.prototype['xapiRegistrationId'] = undefined;
  /**
   * Dispatch ID for this registration, if applicable
   * @member {String} dispatchId
   */
  exports.prototype['dispatchId'] = undefined;
  /**
   * @member {Date} updated
   */
  exports.prototype['updated'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationCompletion} registrationCompletion
   */
  exports.prototype['registrationCompletion'] = undefined;
  /**
   * @member {Number} registrationCompletionAmount
   */
  exports.prototype['registrationCompletionAmount'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationSuccess} registrationSuccess
   */
  exports.prototype['registrationSuccess'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ScoreSchema} score
   */
  exports.prototype['score'] = undefined;
  /**
   * @member {Number} totalSecondsTracked
   */
  exports.prototype['totalSecondsTracked'] = undefined;
  /**
   * @member {Date} firstAccessDate
   */
  exports.prototype['firstAccessDate'] = undefined;
  /**
   * @member {Date} lastAccessDate
   */
  exports.prototype['lastAccessDate'] = undefined;
  /**
   * @member {Date} completedDate
   */
  exports.prototype['completedDate'] = undefined;
  /**
   * @member {Date} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseReferenceSchema} course
   */
  exports.prototype['course'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerSchema} learner
   */
  exports.prototype['learner'] = undefined;
  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ObjectiveSchema>} globalObjectives
   */
  exports.prototype['globalObjectives'] = undefined;
  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SharedDataEntrySchema>} sharedData
   */
  exports.prototype['sharedData'] = undefined;
  /**
   * @member {String} suspendedActivityId
   */
  exports.prototype['suspendedActivityId'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ActivityResultSchema} activityDetails
   */
  exports.prototype['activityDetails'] = undefined;



  return exports;
}));


