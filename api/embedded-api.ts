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
import { EmbeddedPlayerDto } from '../models';
// @ts-ignore
import { EventDetailsDto } from '../models';
// @ts-ignore
import { EventEmbedSummaryDto } from '../models';
// @ts-ignore
import { EventImagesDto } from '../models';
// @ts-ignore
import { EventSummaryDto } from '../models';
// @ts-ignore
import { ImageDto } from '../models';
// @ts-ignore
import { LiveReportingMetadataDto } from '../models';
// @ts-ignore
import { LiveUpdateDto } from '../models';
// @ts-ignore
import { PlayerEventDetailsDto } from '../models';
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
        apiEmbeddedEventsEventIdEmbeddedGet: async (eventId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('apiEmbeddedEventsEventIdEmbeddedGet', 'eventId', eventId)
            const localVarPath = `/api/Embedded/events/{eventId}/embedded`
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
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
         * @param {string} eventId 
         * @param {number} [page] 
         * @param {Array<string>} [tags] 
         * @param {string} [playerId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedEventsEventIdImagesGet: async (eventId: string, page?: number, tags?: Array<string>, playerId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('apiEmbeddedEventsEventIdImagesGet', 'eventId', eventId)
            const localVarPath = `/api/Embedded/events/{eventId}/images`
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (tags) {
                localVarQueryParameter['tags'] = tags;
            }

            if (playerId !== undefined) {
                localVarQueryParameter['playerId'] = playerId;
            }


    
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
         * @param {string} eventId 
         * @param {string} playerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedEventsEventIdPlayersPlayerIdGet: async (eventId: string, playerId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('apiEmbeddedEventsEventIdPlayersPlayerIdGet', 'eventId', eventId)
            // verify required parameter 'playerId' is not null or undefined
            assertParamExists('apiEmbeddedEventsEventIdPlayersPlayerIdGet', 'playerId', playerId)
            const localVarPath = `/api/Embedded/events/{eventId}/players/{playerId}`
                .replace(`{${"eventId"}}`, encodeURIComponent(String(eventId)))
                .replace(`{${"playerId"}}`, encodeURIComponent(String(playerId)));
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
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
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedEventsEventIdSummaryGet: async (eventId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('apiEmbeddedEventsEventIdSummaryGet', 'eventId', eventId)
            const localVarPath = `/api/Embedded/events/{eventId}/summary`
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
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
         * @param {string} festivalId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedFestivalsFestivalIdEventsGet: async (festivalId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'festivalId' is not null or undefined
            assertParamExists('apiEmbeddedFestivalsFestivalIdEventsGet', 'festivalId', festivalId)
            const localVarPath = `/api/Embedded/festivals/{festivalId}/events`
                .replace(`{${"festivalId"}}`, encodeURIComponent(String(festivalId)));
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
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
         * @param {string} [eventId] 
         * @param {string} [playerId] 
         * @param {Array<string>} [tags] 
         * @param {number} [page] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedImagesGet: async (eventId?: string, playerId?: string, tags?: Array<string>, page?: number, pageSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Embedded/images`;
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (eventId !== undefined) {
                localVarQueryParameter['eventId'] = eventId;
            }

            if (playerId !== undefined) {
                localVarQueryParameter['playerId'] = playerId;
            }

            if (tags) {
                localVarQueryParameter['tags'] = tags;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }


    
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
        apiEmbeddedLivereportingsLiveReportingIdMetadataGet: async (liveReportingId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'liveReportingId' is not null or undefined
            assertParamExists('apiEmbeddedLivereportingsLiveReportingIdMetadataGet', 'liveReportingId', liveReportingId)
            const localVarPath = `/api/Embedded/livereportings/{liveReportingId}/metadata`
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
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
         * @param {number} [page] 
         * @param {string} [sortOrder] 
         * @param {string} [playerId] 
         * @param {string} [blindLevelId] 
         * @param {string} [liveUpdateId] 
         * @param {string} [tag] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedLivereportingsLiveReportingIdUpdatesGet: async (liveReportingId: string, page?: number, sortOrder?: string, playerId?: string, blindLevelId?: string, liveUpdateId?: string, tag?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'liveReportingId' is not null or undefined
            assertParamExists('apiEmbeddedLivereportingsLiveReportingIdUpdatesGet', 'liveReportingId', liveReportingId)
            const localVarPath = `/api/Embedded/livereportings/{liveReportingId}/updates`
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
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (playerId !== undefined) {
                localVarQueryParameter['playerId'] = playerId;
            }

            if (blindLevelId !== undefined) {
                localVarQueryParameter['blindLevelId'] = blindLevelId;
            }

            if (liveUpdateId !== undefined) {
                localVarQueryParameter['liveUpdateId'] = liveUpdateId;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }


    
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
        async apiEmbeddedEventsEventIdEmbeddedGet(eventId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmbeddedPlayerDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEmbeddedEventsEventIdEmbeddedGet(eventId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmbeddedApi.apiEmbeddedEventsEventIdEmbeddedGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
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
         * @param {string} eventId 
         * @param {number} [page] 
         * @param {Array<string>} [tags] 
         * @param {string} [playerId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmbeddedEventsEventIdImagesGet(eventId: string, page?: number, tags?: Array<string>, playerId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventImagesDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEmbeddedEventsEventIdImagesGet(eventId, page, tags, playerId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmbeddedApi.apiEmbeddedEventsEventIdImagesGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} eventId 
         * @param {string} playerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmbeddedEventsEventIdPlayersPlayerIdGet(eventId: string, playerId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayerEventDetailsDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEmbeddedEventsEventIdPlayersPlayerIdGet(eventId, playerId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmbeddedApi.apiEmbeddedEventsEventIdPlayersPlayerIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmbeddedEventsEventIdSummaryGet(eventId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventEmbedSummaryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEmbeddedEventsEventIdSummaryGet(eventId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmbeddedApi.apiEmbeddedEventsEventIdSummaryGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} festivalId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmbeddedFestivalsFestivalIdEventsGet(festivalId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EventSummaryDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEmbeddedFestivalsFestivalIdEventsGet(festivalId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmbeddedApi.apiEmbeddedFestivalsFestivalIdEventsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [eventId] 
         * @param {string} [playerId] 
         * @param {Array<string>} [tags] 
         * @param {number} [page] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmbeddedImagesGet(eventId?: string, playerId?: string, tags?: Array<string>, page?: number, pageSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ImageDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEmbeddedImagesGet(eventId, playerId, tags, page, pageSize, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmbeddedApi.apiEmbeddedImagesGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} liveReportingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmbeddedLivereportingsLiveReportingIdMetadataGet(liveReportingId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LiveReportingMetadataDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEmbeddedLivereportingsLiveReportingIdMetadataGet(liveReportingId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmbeddedApi.apiEmbeddedLivereportingsLiveReportingIdMetadataGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} liveReportingId 
         * @param {number} [page] 
         * @param {string} [sortOrder] 
         * @param {string} [playerId] 
         * @param {string} [blindLevelId] 
         * @param {string} [liveUpdateId] 
         * @param {string} [tag] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmbeddedLivereportingsLiveReportingIdUpdatesGet(liveReportingId: string, page?: number, sortOrder?: string, playerId?: string, blindLevelId?: string, liveUpdateId?: string, tag?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LiveUpdateDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiEmbeddedLivereportingsLiveReportingIdUpdatesGet(liveReportingId, page, sortOrder, playerId, blindLevelId, liveUpdateId, tag, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmbeddedApi.apiEmbeddedLivereportingsLiveReportingIdUpdatesGet']?.[localVarOperationServerIndex]?.url;
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
        apiEmbeddedEventsEventIdEmbeddedGet(eventId: string, options?: any): AxiosPromise<EmbeddedPlayerDto> {
            return localVarFp.apiEmbeddedEventsEventIdEmbeddedGet(eventId, options).then((request) => request(axios, basePath));
        },
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
         * @param {string} eventId 
         * @param {number} [page] 
         * @param {Array<string>} [tags] 
         * @param {string} [playerId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedEventsEventIdImagesGet(eventId: string, page?: number, tags?: Array<string>, playerId?: string, options?: any): AxiosPromise<EventImagesDto> {
            return localVarFp.apiEmbeddedEventsEventIdImagesGet(eventId, page, tags, playerId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} eventId 
         * @param {string} playerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedEventsEventIdPlayersPlayerIdGet(eventId: string, playerId: string, options?: any): AxiosPromise<PlayerEventDetailsDto> {
            return localVarFp.apiEmbeddedEventsEventIdPlayersPlayerIdGet(eventId, playerId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedEventsEventIdSummaryGet(eventId: string, options?: any): AxiosPromise<EventEmbedSummaryDto> {
            return localVarFp.apiEmbeddedEventsEventIdSummaryGet(eventId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} festivalId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedFestivalsFestivalIdEventsGet(festivalId: string, options?: any): AxiosPromise<Array<EventSummaryDto>> {
            return localVarFp.apiEmbeddedFestivalsFestivalIdEventsGet(festivalId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [eventId] 
         * @param {string} [playerId] 
         * @param {Array<string>} [tags] 
         * @param {number} [page] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedImagesGet(eventId?: string, playerId?: string, tags?: Array<string>, page?: number, pageSize?: number, options?: any): AxiosPromise<Array<ImageDto>> {
            return localVarFp.apiEmbeddedImagesGet(eventId, playerId, tags, page, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} liveReportingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedLivereportingsLiveReportingIdMetadataGet(liveReportingId: string, options?: any): AxiosPromise<LiveReportingMetadataDto> {
            return localVarFp.apiEmbeddedLivereportingsLiveReportingIdMetadataGet(liveReportingId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} liveReportingId 
         * @param {number} [page] 
         * @param {string} [sortOrder] 
         * @param {string} [playerId] 
         * @param {string} [blindLevelId] 
         * @param {string} [liveUpdateId] 
         * @param {string} [tag] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmbeddedLivereportingsLiveReportingIdUpdatesGet(liveReportingId: string, page?: number, sortOrder?: string, playerId?: string, blindLevelId?: string, liveUpdateId?: string, tag?: string, options?: any): AxiosPromise<Array<LiveUpdateDto>> {
            return localVarFp.apiEmbeddedLivereportingsLiveReportingIdUpdatesGet(liveReportingId, page, sortOrder, playerId, blindLevelId, liveUpdateId, tag, options).then((request) => request(axios, basePath));
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
    public apiEmbeddedEventsEventIdEmbeddedGet(eventId: string, options?: RawAxiosRequestConfig) {
        return EmbeddedApiFp(this.configuration).apiEmbeddedEventsEventIdEmbeddedGet(eventId, options).then((request) => request(this.axios, this.basePath));
    }

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
     * @param {string} eventId 
     * @param {number} [page] 
     * @param {Array<string>} [tags] 
     * @param {string} [playerId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmbeddedApi
     */
    public apiEmbeddedEventsEventIdImagesGet(eventId: string, page?: number, tags?: Array<string>, playerId?: string, options?: RawAxiosRequestConfig) {
        return EmbeddedApiFp(this.configuration).apiEmbeddedEventsEventIdImagesGet(eventId, page, tags, playerId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} eventId 
     * @param {string} playerId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmbeddedApi
     */
    public apiEmbeddedEventsEventIdPlayersPlayerIdGet(eventId: string, playerId: string, options?: RawAxiosRequestConfig) {
        return EmbeddedApiFp(this.configuration).apiEmbeddedEventsEventIdPlayersPlayerIdGet(eventId, playerId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} eventId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmbeddedApi
     */
    public apiEmbeddedEventsEventIdSummaryGet(eventId: string, options?: RawAxiosRequestConfig) {
        return EmbeddedApiFp(this.configuration).apiEmbeddedEventsEventIdSummaryGet(eventId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} festivalId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmbeddedApi
     */
    public apiEmbeddedFestivalsFestivalIdEventsGet(festivalId: string, options?: RawAxiosRequestConfig) {
        return EmbeddedApiFp(this.configuration).apiEmbeddedFestivalsFestivalIdEventsGet(festivalId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [eventId] 
     * @param {string} [playerId] 
     * @param {Array<string>} [tags] 
     * @param {number} [page] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmbeddedApi
     */
    public apiEmbeddedImagesGet(eventId?: string, playerId?: string, tags?: Array<string>, page?: number, pageSize?: number, options?: RawAxiosRequestConfig) {
        return EmbeddedApiFp(this.configuration).apiEmbeddedImagesGet(eventId, playerId, tags, page, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} liveReportingId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmbeddedApi
     */
    public apiEmbeddedLivereportingsLiveReportingIdMetadataGet(liveReportingId: string, options?: RawAxiosRequestConfig) {
        return EmbeddedApiFp(this.configuration).apiEmbeddedLivereportingsLiveReportingIdMetadataGet(liveReportingId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} liveReportingId 
     * @param {number} [page] 
     * @param {string} [sortOrder] 
     * @param {string} [playerId] 
     * @param {string} [blindLevelId] 
     * @param {string} [liveUpdateId] 
     * @param {string} [tag] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmbeddedApi
     */
    public apiEmbeddedLivereportingsLiveReportingIdUpdatesGet(liveReportingId: string, page?: number, sortOrder?: string, playerId?: string, blindLevelId?: string, liveUpdateId?: string, tag?: string, options?: RawAxiosRequestConfig) {
        return EmbeddedApiFp(this.configuration).apiEmbeddedLivereportingsLiveReportingIdUpdatesGet(liveReportingId, page, sortOrder, playerId, blindLevelId, liveUpdateId, tag, options).then((request) => request(this.axios, this.basePath));
    }
}

