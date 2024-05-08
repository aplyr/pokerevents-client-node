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
// @ts-ignore
import { EventDetailsDto } from '../models';
// @ts-ignore
import { LiveReportingDetailsDto } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
// @ts-ignore
import { Result } from '../models';
/**
 * EmbeddedApi - axios parameter creator
 * @export
 */
export const EmbeddedApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedEventsEventIdGet: async (eventId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('apiEmbeddedEventsEventIdGet', 'eventId', eventId)
            const localVarPath = `/api/Embedded/events/{eventId}`
                .replace(`{${"eventId"}}`, encodeURIComponent(String(eventId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarQueryParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} liveReportingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedLivereportingsLiveReportingIdGet: async (liveReportingId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'liveReportingId' is not null or undefined
            assertParamExists('apiEmbeddedLivereportingsLiveReportingIdGet', 'liveReportingId', liveReportingId)
            const localVarPath = `/api/Embedded/livereportings/{liveReportingId}`
                .replace(`{${"liveReportingId"}}`, encodeURIComponent(String(liveReportingId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarQueryParameter, "Authorization", configuration)


    
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
 * EmbeddedApi - functional programming interface
 * @export
 */
export const EmbeddedApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmbeddedApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmbeddedEventsEventIdGet(eventId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventDetailsDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEmbeddedEventsEventIdGet(eventId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmbeddedApi.apiEmbeddedEventsEventIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} liveReportingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmbeddedLivereportingsLiveReportingIdGet(liveReportingId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LiveReportingDetailsDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEmbeddedLivereportingsLiveReportingIdGet(liveReportingId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmbeddedApi.apiEmbeddedLivereportingsLiveReportingIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * EmbeddedApi - factory interface
 * @export
 */
export const EmbeddedApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmbeddedApiFp(configuration)
    return {
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedEventsEventIdGet(eventId: string, options?: any): AxiosPromise<EventDetailsDto> {
            return localVarFp.apiEmbeddedEventsEventIdGet(eventId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} liveReportingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedLivereportingsLiveReportingIdGet(liveReportingId: string, options?: any): AxiosPromise<LiveReportingDetailsDto> {
            return localVarFp.apiEmbeddedLivereportingsLiveReportingIdGet(liveReportingId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmbeddedApi - object-oriented interface
 * @export
 * @class EmbeddedApi
 * @extends {BaseAPI}
 */
export class EmbeddedApi extends BaseAPI {
    /**
     * 
     * @param {string} eventId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmbeddedApi
     */
    public apiEmbeddedEventsEventIdGet(eventId: string, options?: RawAxiosRequestConfig) {
        return EmbeddedApiFp(this.configuration).apiEmbeddedEventsEventIdGet(eventId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} liveReportingId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmbeddedApi
     */
    public apiEmbeddedLivereportingsLiveReportingIdGet(liveReportingId: string, options?: RawAxiosRequestConfig) {
        return EmbeddedApiFp(this.configuration).apiEmbeddedLivereportingsLiveReportingIdGet(liveReportingId, options).then((request) => request(this.axios, this.basePath));
    }
}
