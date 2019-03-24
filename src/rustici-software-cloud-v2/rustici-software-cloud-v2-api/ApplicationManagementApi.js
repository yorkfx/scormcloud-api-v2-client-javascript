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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/MessageSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ApplicationSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialCreatedSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialRequestSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/StringResultSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/TokenRequestSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingListSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ApplicationListSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialListSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsPostSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../rustici-software-cloud-v2-model/MessageSchema'), require('../rustici-software-cloud-v2-model/ApplicationSchema'), require('../rustici-software-cloud-v2-model/CredentialCreatedSchema'), require('../rustici-software-cloud-v2-model/CredentialRequestSchema'), require('../rustici-software-cloud-v2-model/StringResultSchema'), require('../rustici-software-cloud-v2-model/TokenRequestSchema'), require('../rustici-software-cloud-v2-model/SettingListSchema'), require('../rustici-software-cloud-v2-model/ApplicationListSchema'), require('../rustici-software-cloud-v2-model/CredentialListSchema'), require('../rustici-software-cloud-v2-model/SettingsPostSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.ApplicationManagementApi = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.MessageSchema, root.RusticiSoftwareCloudV2.ApplicationSchema, root.RusticiSoftwareCloudV2.CredentialCreatedSchema, root.RusticiSoftwareCloudV2.CredentialRequestSchema, root.RusticiSoftwareCloudV2.StringResultSchema, root.RusticiSoftwareCloudV2.TokenRequestSchema, root.RusticiSoftwareCloudV2.SettingListSchema, root.RusticiSoftwareCloudV2.ApplicationListSchema, root.RusticiSoftwareCloudV2.CredentialListSchema, root.RusticiSoftwareCloudV2.SettingsPostSchema);
  }
}(this, function(ApiClient, MessageSchema, ApplicationSchema, CredentialCreatedSchema, CredentialRequestSchema, StringResultSchema, TokenRequestSchema, SettingListSchema, ApplicationListSchema, CredentialListSchema, SettingsPostSchema) {
  'use strict';

  /**
   * ApplicationManagement service.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi
   * @version 2.0 beta
   */

  /**
   * Constructs a new ApplicationManagementApi. 
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi
   * @class
   * @param {module:rustici-software-cloud-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:rustici-software-cloud-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createApplication operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~createApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ApplicationSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new application
     * @param {String} applicationName 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~createApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ApplicationSchema}
     */
    this.createApplication = function(applicationName, callback) {
      var postBody = null;

      // verify the required parameter 'applicationName' is set
      if (applicationName == undefined || applicationName == null) {
        throw "Missing the required parameter 'applicationName' when calling createApplication";
      }


      var pathParams = {
        'applicationName': applicationName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApplicationSchema;

      return this.apiClient.callApi(
        '/appManagement/applications/{applicationName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCredential operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~createCredentialCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialCreatedSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create credential
     * @param {String} childAppId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialRequestSchema} credentialRequest 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~createCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialCreatedSchema}
     */
    this.createCredential = function(childAppId, credentialRequest, callback) {
      var postBody = credentialRequest;

      // verify the required parameter 'childAppId' is set
      if (childAppId == undefined || childAppId == null) {
        throw "Missing the required parameter 'childAppId' when calling createCredential";
      }

      // verify the required parameter 'credentialRequest' is set
      if (credentialRequest == undefined || credentialRequest == null) {
        throw "Missing the required parameter 'credentialRequest' when calling createCredential";
      }


      var pathParams = {
        'childAppId': childAppId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CredentialCreatedSchema;

      return this.apiClient.callApi(
        '/appManagement/{childAppId}/credentials', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createToken operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~createTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/StringResultSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create token
     * Creates, signs and returns a token based on the provided permissions, if the credentials used to request the token have the permissions being requested. Note: the token is not stored and therefore can not be modified or deleted. The requested permissions are encoded in the token which is then signed. As long as the secret used to create it is not changed the token will be valid until it expires.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TokenRequestSchema} tokenRequest 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~createTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/StringResultSchema}
     */
    this.createToken = function(tokenRequest, callback) {
      var postBody = tokenRequest;

      // verify the required parameter 'tokenRequest' is set
      if (tokenRequest == undefined || tokenRequest == null) {
        throw "Missing the required parameter 'tokenRequest' when calling createToken";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StringResultSchema;

      return this.apiClient.callApi(
        '/appManagement/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteApplication operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~deleteApplicationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application.  If the application contains content, it must first be manually removed before calling this method, else an error will be thrown.
     * @param {String} childAppId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~deleteApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteApplication = function(childAppId, callback) {
      var postBody = null;

      // verify the required parameter 'childAppId' is set
      if (childAppId == undefined || childAppId == null) {
        throw "Missing the required parameter 'childAppId' when calling deleteApplication";
      }


      var pathParams = {
        'childAppId': childAppId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/appManagement/applications/{childAppId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCredential operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~deleteCredentialCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes &#x60;credentialId&#x60; credentials
     * @param {String} childAppId 
     * @param {String} credentialId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~deleteCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCredential = function(childAppId, credentialId, callback) {
      var postBody = null;

      // verify the required parameter 'childAppId' is set
      if (childAppId == undefined || childAppId == null) {
        throw "Missing the required parameter 'childAppId' when calling deleteCredential";
      }

      // verify the required parameter 'credentialId' is set
      if (credentialId == undefined || credentialId == null) {
        throw "Missing the required parameter 'credentialId' when calling deleteCredential";
      }


      var pathParams = {
        'childAppId': childAppId,
        'credentialId': credentialId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/appManagement/{childAppId}/credentials/{credentialId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationConfiguration operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~getApplicationConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingListSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all configuration settings for this level
     * @param {Object} opts Optional parameters
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/String} opts.learningStandard If specified, the request will be scoped to the provided learning standard.
     * @param {Boolean} opts.singleSco Required if learningStandard is specified. Scopes settings to whether a package has only one SCO or assignable unit within it or not. To apply a configuration setting to a learning standard for single and multi-SCO content, it must be set for both scopes.
     * @param {Boolean} opts.includeMetadata  (default to false)
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~getApplicationConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingListSchema}
     */
    this.getApplicationConfiguration = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'learningStandard': opts['learningStandard'],
        'singleSco': opts['singleSco'],
        'includeMetadata': opts['includeMetadata']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SettingListSchema;

      return this.apiClient.callApi(
        '/appManagement/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationList operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~getApplicationListCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ApplicationListSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of all applications in this realm.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~getApplicationListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ApplicationListSchema}
     */
    this.getApplicationList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApplicationListSchema;

      return this.apiClient.callApi(
        '/appManagement/applications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCredentials operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~getCredentialsCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialListSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of credentials
     * @param {String} childAppId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~getCredentialsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialListSchema}
     */
    this.getCredentials = function(childAppId, callback) {
      var postBody = null;

      // verify the required parameter 'childAppId' is set
      if (childAppId == undefined || childAppId == null) {
        throw "Missing the required parameter 'childAppId' when calling getCredentials";
      }


      var pathParams = {
        'childAppId': childAppId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CredentialListSchema;

      return this.apiClient.callApi(
        '/appManagement/{childAppId}/credentials', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setApplicationConfiguration operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~setApplicationConfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set configuration settings for this level.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsPostSchema} configurationSettings 
     * @param {Object} opts Optional parameters
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/String} opts.learningStandard If specified, the request will be scoped to the provided learning standard.
     * @param {Boolean} opts.singleSco Required if learningStandard is specified. Scopes settings to whether a package has only one SCO or assignable unit within it or not. To apply a configuration setting to a learning standard for single and multi-SCO content, it must be set for both scopes.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~setApplicationConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setApplicationConfiguration = function(configurationSettings, opts, callback) {
      opts = opts || {};
      var postBody = configurationSettings;

      // verify the required parameter 'configurationSettings' is set
      if (configurationSettings == undefined || configurationSettings == null) {
        throw "Missing the required parameter 'configurationSettings' when calling setApplicationConfiguration";
      }


      var pathParams = {
      };
      var queryParams = {
        'learningStandard': opts['learningStandard'],
        'singleSco': opts['singleSco']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/appManagement/configuration', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCredential operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~updateCredentialCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the name or status associated with &#x60;credentialId&#x60;
     * @param {String} childAppId 
     * @param {String} credentialId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialRequestSchema} credentialUpdate 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ApplicationManagementApi~updateCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCredential = function(childAppId, credentialId, credentialUpdate, callback) {
      var postBody = credentialUpdate;

      // verify the required parameter 'childAppId' is set
      if (childAppId == undefined || childAppId == null) {
        throw "Missing the required parameter 'childAppId' when calling updateCredential";
      }

      // verify the required parameter 'credentialId' is set
      if (credentialId == undefined || credentialId == null) {
        throw "Missing the required parameter 'credentialId' when calling updateCredential";
      }

      // verify the required parameter 'credentialUpdate' is set
      if (credentialUpdate == undefined || credentialUpdate == null) {
        throw "Missing the required parameter 'credentialUpdate' when calling updateCredential";
      }


      var pathParams = {
        'childAppId': childAppId,
        'credentialId': credentialId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/appManagement/{childAppId}/credentials/{credentialId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
