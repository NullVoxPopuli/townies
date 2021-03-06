"use strict";
/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Application API Documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: V1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
const portableFetch = require("portable-fetch");
const BASE_PATH = "https://localhost".replace(/\/+$/, "");
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPI {
    constructor(configuration, basePath = BASE_PATH, fetch = portableFetch) {
        this.basePath = basePath;
        this.fetch = fetch;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
    }
}
exports.RequiredError = RequiredError;
/**
 * ManagementApiApi - fetch parameter creator
 * @export
 */
exports.ManagementApiApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Returns a web service's current health status state. Status State String: GOOD, WARN, BAD (or otherwise configured values). WARN is a (graceful) degraded state - service only provides core, required functionality when in this state. If LTM detects non-200 response or BAD, node should be pulled from rotation immediately.
         * @summary Simple LTM monitor API to determine if the node is bad. Responds with text/plain and 200 or 500 code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthCheckGet(options = {}) {
            const localVarPath = `/health_check`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * ManagementApiApi - functional programming interface
 * @export
 */
exports.ManagementApiApiFp = function (configuration) {
    return {
        /**
         * Returns a web service's current health status state. Status State String: GOOD, WARN, BAD (or otherwise configured values). WARN is a (graceful) degraded state - service only provides core, required functionality when in this state. If LTM detects non-200 response or BAD, node should be pulled from rotation immediately.
         * @summary Simple LTM monitor API to determine if the node is bad. Responds with text/plain and 200 or 500 code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthCheckGet(options) {
            const localVarFetchArgs = exports.ManagementApiApiFetchParamCreator(configuration).healthCheckGet(options);
            return (fetch = portableFetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
    };
};
/**
 * ManagementApiApi - factory interface
 * @export
 */
exports.ManagementApiApiFactory = function (configuration, fetch, basePath) {
    return {
        /**
         * Returns a web service's current health status state. Status State String: GOOD, WARN, BAD (or otherwise configured values). WARN is a (graceful) degraded state - service only provides core, required functionality when in this state. If LTM detects non-200 response or BAD, node should be pulled from rotation immediately.
         * @summary Simple LTM monitor API to determine if the node is bad. Responds with text/plain and 200 or 500 code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthCheckGet(options) {
            return exports.ManagementApiApiFp(configuration).healthCheckGet(options)(fetch, basePath);
        },
    };
};
/**
 * ManagementApiApi - object-oriented interface
 * @export
 * @class ManagementApiApi
 * @extends {BaseAPI}
 */
class ManagementApiApi extends BaseAPI {
    /**
     * Returns a web service's current health status state. Status State String: GOOD, WARN, BAD (or otherwise configured values). WARN is a (graceful) degraded state - service only provides core, required functionality when in this state. If LTM detects non-200 response or BAD, node should be pulled from rotation immediately.
     * @summary Simple LTM monitor API to determine if the node is bad. Responds with text/plain and 200 or 500 code.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManagementApiApi
     */
    healthCheckGet(options) {
        return exports.ManagementApiApiFp(this.configuration).healthCheckGet(options)(this.fetch, this.basePath);
    }
}
exports.ManagementApiApi = ManagementApiApi;
//# sourceMappingURL=api.js.map