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
import { ExtensionStatus } from './extension-status';
// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';
// May contain unused imports in some cases
// @ts-ignore
import { VersionInfo } from './version-info';

/**
 * 
 * @export
 * @interface Result
 */
export interface Result {
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'raw'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    'httpStatusCode'?: number;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'fileId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'name'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    'size'?: number;
    /**
     * 
     * @type {VersionInfo}
     * @memberof Result
     */
    'versionInfo'?: VersionInfo;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'filePath'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'url'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'fileType'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    'height'?: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    'width'?: number;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'thumbnailUrl'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Result
     */
    'tags'?: Array<string> | null;
    /**
     * 
     * @type {any}
     * @memberof Result
     */
    'aiTags'?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    'isPrivateFile'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'customCoordinates'?: string | null;
    /**
     * 
     * @type {Metadata}
     * @memberof Result
     */
    'metadata'?: Metadata;
    /**
     * 
     * @type {ExtensionStatus}
     * @memberof Result
     */
    'extensionStatus'?: ExtensionStatus;
}

