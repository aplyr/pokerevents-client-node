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
import { PlayerEntity } from '../models';
/**
 * PlayerEntityApi - axios parameter creator
 * @export
 */
export const PlayerEntityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {PlayerEntity} playerEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlayerEntity: async (playerEntity: PlayerEntity, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'playerEntity' is not null or undefined
            assertParamExists('createPlayerEntity', 'playerEntity', playerEntity)
            const localVarPath = `/api/PlayerEntity`;
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
            await setApiKeyToObject(localVarQueryParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(playerEntity, localVarRequestOptions, configuration)

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
        deletePlayerEntity: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deletePlayerEntity', 'id', id)
            const localVarPath = `/api/PlayerEntity/{id}`
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
         * @param {number} [pageSize] 
         * @param {number} [page] 
         * @param {string} [q] 
         * @param {string} [eventId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPlayerEntities: async (pageSize?: number, page?: number, q?: string, eventId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/PlayerEntity`;
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

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (eventId !== undefined) {
                localVarQueryParameter['eventId'] = eventId;
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
        getPlayerEntityById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPlayerEntityById', 'id', id)
            const localVarPath = `/api/PlayerEntity/{id}`
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
         * @param {string} id 
         * @param {PlayerEntity} playerEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePlayerEntity: async (id: string, playerEntity: PlayerEntity, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updatePlayerEntity', 'id', id)
            // verify required parameter 'playerEntity' is not null or undefined
            assertParamExists('updatePlayerEntity', 'playerEntity', playerEntity)
            const localVarPath = `/api/PlayerEntity/{id}`
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
            await setApiKeyToObject(localVarQueryParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(playerEntity, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlayerEntityApi - functional programming interface
 * @export
 */
export const PlayerEntityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlayerEntityApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {PlayerEntity} playerEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPlayerEntity(playerEntity: PlayerEntity, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayerEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPlayerEntity(playerEntity, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PlayerEntityApi.createPlayerEntity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePlayerEntity(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePlayerEntity(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PlayerEntityApi.deletePlayerEntity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} [pageSize] 
         * @param {number} [page] 
         * @param {string} [q] 
         * @param {string} [eventId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllPlayerEntities(pageSize?: number, page?: number, q?: string, eventId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PlayerEntity>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllPlayerEntities(pageSize, page, q, eventId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PlayerEntityApi.getAllPlayerEntities']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlayerEntityById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayerEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlayerEntityById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PlayerEntityApi.getPlayerEntityById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {PlayerEntity} playerEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePlayerEntity(id: string, playerEntity: PlayerEntity, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePlayerEntity(id, playerEntity, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PlayerEntityApi.updatePlayerEntity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PlayerEntityApi - factory interface
 * @export
 */
export const PlayerEntityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlayerEntityApiFp(configuration)
    return {
        /**
         * 
         * @param {PlayerEntity} playerEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlayerEntity(playerEntity: PlayerEntity, options?: any): AxiosPromise<PlayerEntity> {
            return localVarFp.createPlayerEntity(playerEntity, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePlayerEntity(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deletePlayerEntity(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [pageSize] 
         * @param {number} [page] 
         * @param {string} [q] 
         * @param {string} [eventId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPlayerEntities(pageSize?: number, page?: number, q?: string, eventId?: string, options?: any): AxiosPromise<Array<PlayerEntity>> {
            return localVarFp.getAllPlayerEntities(pageSize, page, q, eventId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerEntityById(id: string, options?: any): AxiosPromise<PlayerEntity> {
            return localVarFp.getPlayerEntityById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {PlayerEntity} playerEntity 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePlayerEntity(id: string, playerEntity: PlayerEntity, options?: any): AxiosPromise<void> {
            return localVarFp.updatePlayerEntity(id, playerEntity, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PlayerEntityApi - object-oriented interface
 * @export
 * @class PlayerEntityApi
 * @extends {BaseAPI}
 */
export class PlayerEntityApi extends BaseAPI {
    /**
     * 
     * @param {PlayerEntity} playerEntity 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayerEntityApi
     */
    public createPlayerEntity(playerEntity: PlayerEntity, options?: RawAxiosRequestConfig) {
        return PlayerEntityApiFp(this.configuration).createPlayerEntity(playerEntity, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayerEntityApi
     */
    public deletePlayerEntity(id: string, options?: RawAxiosRequestConfig) {
        return PlayerEntityApiFp(this.configuration).deletePlayerEntity(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [pageSize] 
     * @param {number} [page] 
     * @param {string} [q] 
     * @param {string} [eventId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayerEntityApi
     */
    public getAllPlayerEntities(pageSize?: number, page?: number, q?: string, eventId?: string, options?: RawAxiosRequestConfig) {
        return PlayerEntityApiFp(this.configuration).getAllPlayerEntities(pageSize, page, q, eventId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayerEntityApi
     */
    public getPlayerEntityById(id: string, options?: RawAxiosRequestConfig) {
        return PlayerEntityApiFp(this.configuration).getPlayerEntityById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {PlayerEntity} playerEntity 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayerEntityApi
     */
    public updatePlayerEntity(id: string, playerEntity: PlayerEntity, options?: RawAxiosRequestConfig) {
        return PlayerEntityApiFp(this.configuration).updatePlayerEntity(id, playerEntity, options).then((request) => request(this.axios, this.basePath));
    }
}

