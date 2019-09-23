# rustici-software-cloud-v2

RusticiSoftwareCloudV2 - JavaScript client for rustici-software-cloud-v2
    REST API used for SCORM Cloud integrations.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install rustici-software-cloud-v2 --save
```

##### Local development

To use the library locally without pulling from the npm registry, first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your rustici-software-cloud-v2 from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('rustici-software-cloud-v2')` in javascript files from the directory you ran the last
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
    rules: [
        {
            parser: {
                amd: false
            }
        }
    ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const ScormCloud = require('./src/rustici-software-cloud-v2/index.js');

const defaultClient = ScormCloud.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
const APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'SCORM CLOUD APP ID';
APP_NORMAL.password = 'SECRET KEY FOR APP ID';

    // OR

// Configure OAuth2 access token for authorization: OAUTH
// Note: HTTP basic auth must be configured for the initial call to create an OAuth2 token
const OAUTH = defaultClient.authentications['OAUTH'];
const appManagementApi = new ScormCloud.ApplicationManagementApi();

const expiry = new Date();
expiry.setMinutes(expiry.getMinutes() + 5);

const tokenRequest = {
    permissions: { scopes: ['read:registration'] },
    expiry: expiry
};


appManagementApi.createToken(tokenRequest, function (error, data) {
    if (error) {
        console.error(error.response.text);
    }
    console.log("token is: " + data.result);
    OAUTH.accessToken = data.result;
    // further calls will use OAuth2 for authentication
});
```
