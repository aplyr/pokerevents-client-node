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
 * ImportApi - axios parameter creator
 * @export
 */
export const ImportApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {File} [playersFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importPlayersPost: async (playersFile?: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/import-players`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (playersFile !== undefined) { 
                localVarFormParams.append('playersFile', playersFile as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ImportApi - functional programming interface
 * @export
 */
export const ImportApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ImportApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {File} [playersFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importPlayersPost(playersFile?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importPlayersPost(playersFile, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ImportApi.importPlayersPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ImportApi - factory interface
 * @export
 */
export const ImportApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ImportApiFp(configuration)
    return {
        /**
         * 
         * @param {File} [playersFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importPlayersPost(playersFile?: File, options?: any): AxiosPromise<void> {
            return localVarFp.importPlayersPost(playersFile, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ImportApi - object-oriented interface
 * @export
 * @class ImportApi
 * @extends {BaseAPI}
 */
export class ImportApi extends BaseAPI {
    /**
     * 
     * @param {File} [playersFile] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImportApi
     */
    public importPlayersPost(playersFile?: File, options?: RawAxiosRequestConfig) {
        return ImportApiFp(this.configuration).importPlayersPost(playersFile, options).then((request) => request(this.axios, this.basePath));
    }
}

