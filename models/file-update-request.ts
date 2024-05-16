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


// May contain unused imports in some cases
// @ts-ignore
import { Extension } from './extension';

/**
 * 
 * @export
 * @interface FileUpdateRequest
 */
export interface FileUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof FileUpdateRequest
     */
    'fileId'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof FileUpdateRequest
     */
    'removeAITags'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof FileUpdateRequest
     */
    'webhookUrl'?: string | null;
    /**
     * 
     * @type {Array<Extension>}
     * @memberof FileUpdateRequest
     */
    'extensions'?: Array<Extension> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof FileUpdateRequest
     */
    'tags'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof FileUpdateRequest
     */
    'customCoordinates'?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof FileUpdateRequest
     */
    'customMetadata'?: { [key: string]: any; } | null;
}

