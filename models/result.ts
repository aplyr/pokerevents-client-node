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
import { ErrorTypes } from './error-types';

/**
 * 
 * @export
 * @interface Result
 */
export interface Result {
    /**
     * 
     * @type {any}
     * @memberof Result
     */
    'value'?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    'isSuccess'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    'isFailure'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    'errorMessage'?: string | null;
    /**
     * 
     * @type {ErrorTypes}
     * @memberof Result
     */
    'errorCode'?: ErrorTypes;
    /**
     * 
     * @type {Array<Error>}
     * @memberof Result
     */
    'errors'?: Array<Error> | null;
}


