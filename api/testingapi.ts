/* tslint:disable */
/* eslint-disable */
/**
 * PokerEvents.Api, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
/**
 * TESTINGApi - axios parameter creator
 * @export
 */
export const TESTINGApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} liveReportingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testSignalRLiveReportingIdPost: async (liveReportingId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'liveReportingId' is not null or undefined
            assertParamExists('testSignalRLiveReportingIdPost', 'liveReportingId', liveReportingId)
            const localVarPath = `/test/SignalR/{liveReportingId}`
                .replace(`{${"liveReportingId"}}`, encodeURIComponent(String(liveReportingId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TESTINGApi - functional programming interface
 * @export
 */
export const TESTINGApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TESTINGApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} liveReportingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testSignalRLiveReportingIdPost(liveReportingId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testSignalRLiveReportingIdPost(liveReportingId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TESTINGApi.testSignalRLiveReportingIdPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TESTINGApi - factory interface
 * @export
 */
export const TESTINGApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TESTINGApiFp(configuration)
    return {
        /**
         * 
         * @param {string} liveReportingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testSignalRLiveReportingIdPost(liveReportingId: string, options?: any): AxiosPromise<void> {
            return localVarFp.testSignalRLiveReportingIdPost(liveReportingId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TESTINGApi - object-oriented interface
 * @export
 * @class TESTINGApi
 * @extends {BaseAPI}
 */
export class TESTINGApi extends BaseAPI {
    /**
     * 
     * @param {string} liveReportingId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TESTINGApi
     */
    public testSignalRLiveReportingIdPost(liveReportingId: string, options?: RawAxiosRequestConfig) {
        return TESTINGApiFp(this.configuration).testSignalRLiveReportingIdPost(liveReportingId, options).then((request) => request(this.axios, this.basePath));
    }
}
