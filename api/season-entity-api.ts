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
import { SeasonEntity } from '../models';
/**
 * SeasonEntityApi - axios parameter creator
 * @export
 */
export const SeasonEntityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {SeasonEntity} seasonEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSeasonEntity: async (seasonEntity: SeasonEntity, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'seasonEntity' is not null or undefined
            assertParamExists('createSeasonEntity', 'seasonEntity', seasonEntity)
            const localVarPath = `/api/SeasonEntity`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(seasonEntity, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSeasonEntity: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteSeasonEntity', 'id', id)
            const localVarPath = `/api/SeasonEntity/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * @param {string} [tourId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllSeasonEntities: async (tourId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/SeasonEntity`;
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

            if (tourId !== undefined) {
                localVarQueryParameter['tourId'] = tourId;
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
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSeasonEntityById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSeasonEntityById', 'id', id)
            const localVarPath = `/api/SeasonEntity/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @param {string} id 
         * @param {SeasonEntity} seasonEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSeasonEntity: async (id: string, seasonEntity: SeasonEntity, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateSeasonEntity', 'id', id)
            // verify required parameter 'seasonEntity' is not null or undefined
            assertParamExists('updateSeasonEntity', 'seasonEntity', seasonEntity)
            const localVarPath = `/api/SeasonEntity/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(seasonEntity, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SeasonEntityApi - functional programming interface
 * @export
 */
export const SeasonEntityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SeasonEntityApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {SeasonEntity} seasonEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSeasonEntity(seasonEntity: SeasonEntity, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SeasonEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSeasonEntity(seasonEntity, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SeasonEntityApi.createSeasonEntity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSeasonEntity(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSeasonEntity(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SeasonEntityApi.deleteSeasonEntity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [tourId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllSeasonEntities(tourId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SeasonEntity>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllSeasonEntities(tourId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SeasonEntityApi.getAllSeasonEntities']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSeasonEntityById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SeasonEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSeasonEntityById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SeasonEntityApi.getSeasonEntityById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {SeasonEntity} seasonEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSeasonEntity(id: string, seasonEntity: SeasonEntity, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSeasonEntity(id, seasonEntity, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SeasonEntityApi.updateSeasonEntity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SeasonEntityApi - factory interface
 * @export
 */
export const SeasonEntityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SeasonEntityApiFp(configuration)
    return {
        /**
         * 
         * @param {SeasonEntity} seasonEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSeasonEntity(seasonEntity: SeasonEntity, options?: any): AxiosPromise<SeasonEntity> {
            return localVarFp.createSeasonEntity(seasonEntity, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSeasonEntity(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteSeasonEntity(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [tourId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllSeasonEntities(tourId?: string, options?: any): AxiosPromise<Array<SeasonEntity>> {
            return localVarFp.getAllSeasonEntities(tourId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSeasonEntityById(id: string, options?: any): AxiosPromise<SeasonEntity> {
            return localVarFp.getSeasonEntityById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {SeasonEntity} seasonEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSeasonEntity(id: string, seasonEntity: SeasonEntity, options?: any): AxiosPromise<void> {
            return localVarFp.updateSeasonEntity(id, seasonEntity, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SeasonEntityApi - object-oriented interface
 * @export
 * @class SeasonEntityApi
 * @extends {BaseAPI}
 */
export class SeasonEntityApi extends BaseAPI {
    /**
     * 
     * @param {SeasonEntity} seasonEntity 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SeasonEntityApi
     */
    public createSeasonEntity(seasonEntity: SeasonEntity, options?: RawAxiosRequestConfig) {
        return SeasonEntityApiFp(this.configuration).createSeasonEntity(seasonEntity, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SeasonEntityApi
     */
    public deleteSeasonEntity(id: string, options?: RawAxiosRequestConfig) {
        return SeasonEntityApiFp(this.configuration).deleteSeasonEntity(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [tourId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SeasonEntityApi
     */
    public getAllSeasonEntities(tourId?: string, options?: RawAxiosRequestConfig) {
        return SeasonEntityApiFp(this.configuration).getAllSeasonEntities(tourId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SeasonEntityApi
     */
    public getSeasonEntityById(id: string, options?: RawAxiosRequestConfig) {
        return SeasonEntityApiFp(this.configuration).getSeasonEntityById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {SeasonEntity} seasonEntity 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SeasonEntityApi
     */
    public updateSeasonEntity(id: string, seasonEntity: SeasonEntity, options?: RawAxiosRequestConfig) {
        return SeasonEntityApiFp(this.configuration).updateSeasonEntity(id, seasonEntity, options).then((request) => request(this.axios, this.basePath));
    }
}

