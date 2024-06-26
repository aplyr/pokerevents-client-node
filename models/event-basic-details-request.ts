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
import { StateType } from './state-type';

/**
 * 
 * @export
 * @interface EventBasicDetailsRequest
 */
export interface EventBasicDetailsRequest {
    /**
     * 
     * @type {string}
     * @memberof EventBasicDetailsRequest
     */
    'festivalId': string;
    /**
     * 
     * @type {string}
     * @memberof EventBasicDetailsRequest
     */
    'venueId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventBasicDetailsRequest
     */
    'name': string | null;
    /**
     * 
     * @type {number}
     * @memberof EventBasicDetailsRequest
     */
    'priority': number;
    /**
     * 
     * @type {StateType}
     * @memberof EventBasicDetailsRequest
     */
    'state': StateType;
    /**
     * 
     * @type {string}
     * @memberof EventBasicDetailsRequest
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventBasicDetailsRequest
     */
    'summary'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventBasicDetailsRequest
     */
    'fromDate': string;
    /**
     * 
     * @type {string}
     * @memberof EventBasicDetailsRequest
     */
    'toDate': string;
    /**
     * 
     * @type {string}
     * @memberof EventBasicDetailsRequest
     */
    'thmId'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof EventBasicDetailsRequest
     */
    'photos'?: Array<string> | null;
}



