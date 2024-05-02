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
import { BlindLevelDto } from './blind-level-dto';

/**
 * 
 * @export
 * @interface LiveReportingStatisticsDto
 */
export interface LiveReportingStatisticsDto {
    /**
     * 
     * @type {number}
     * @memberof LiveReportingStatisticsDto
     */
    'entries'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LiveReportingStatisticsDto
     */
    'reEntries'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LiveReportingStatisticsDto
     */
    'addOns'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LiveReportingStatisticsDto
     */
    'playersIn'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LiveReportingStatisticsDto
     */
    'totalChipCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof LiveReportingStatisticsDto
     */
    'averageStack'?: number;
    /**
     * 
     * @type {BlindLevelDto}
     * @memberof LiveReportingStatisticsDto
     */
    'currentBlindLevel'?: BlindLevelDto;
}

