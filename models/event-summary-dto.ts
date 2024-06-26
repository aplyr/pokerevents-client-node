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
 * @interface EventSummaryDto
 */
export interface EventSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof EventSummaryDto
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryDto
     */
    'name': string | null;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryDto
     */
    'thmId'?: string | null;
    /**
     * 
     * @type {StateType}
     * @memberof EventSummaryDto
     */
    'state': StateType;
    /**
     * 
     * @type {number}
     * @memberof EventSummaryDto
     */
    'priority'?: number;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryDto
     */
    'fromDate': string;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryDto
     */
    'toDate': string;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryDto
     */
    'festivalId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryDto
     */
    'festivalName': string | null;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryDto
     */
    'festivalThmId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryDto
     */
    'venueId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryDto
     */
    'venueName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryDto
     */
    'venueThmId'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof EventSummaryDto
     */
    'daysCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EventSummaryDto
     */
    'registrationsCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EventSummaryDto
     */
    'liveReportingsCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EventSummaryDto
     */
    'blindLevelsCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EventSummaryDto
     */
    'payoutsCount'?: number;
}



