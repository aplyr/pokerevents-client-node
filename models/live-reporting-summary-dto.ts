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
import { LiveReportingStatisticsDto } from './live-reporting-statistics-dto';
// May contain unused imports in some cases
// @ts-ignore
import { StateType } from './state-type';

/**
 * 
 * @export
 * @interface LiveReportingSummaryDto
 */
export interface LiveReportingSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof LiveReportingSummaryDto
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingSummaryDto
     */
    'eventId'?: string;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingSummaryDto
     */
    'dayId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingSummaryDto
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingSummaryDto
     */
    'description'?: string | null;
    /**
     * 
     * @type {StateType}
     * @memberof LiveReportingSummaryDto
     */
    'state'?: StateType;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingSummaryDto
     */
    'startsAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingSummaryDto
     */
    'finishedAt'?: string | null;
    /**
     * 
     * @type {LiveReportingStatisticsDto}
     * @memberof LiveReportingSummaryDto
     */
    'statistics'?: LiveReportingStatisticsDto;
    /**
     * 
     * @type {number}
     * @memberof LiveReportingSummaryDto
     */
    'updatesCount'?: number;
}


