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



/**
 * 
 * @export
 * @interface GetFileListRequest
 */
export interface GetFileListRequest {
    /**
     * 
     * @type {string}
     * @memberof GetFileListRequest
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFileListRequest
     */
    'type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFileListRequest
     */
    'sort'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFileListRequest
     */
    'path'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFileListRequest
     */
    'searchQuery'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFileListRequest
     */
    'fileType'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GetFileListRequest
     */
    'limit'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetFileListRequest
     */
    'skip'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetFileListRequest
     */
    'tags'?: Array<string> | null;
}
