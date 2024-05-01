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
import { EventSummaryDto } from './event-summary-dto';
// May contain unused imports in some cases
// @ts-ignore
import { LiveReportingStatisticsDto } from './live-reporting-statistics-dto';
// May contain unused imports in some cases
// @ts-ignore
import { LiveUpdateDto } from './live-update-dto';
// May contain unused imports in some cases
// @ts-ignore
import { StateType } from './state-type';

/**
 * 
 * @export
 * @interface LiveReportingDetailsDto
 */
export interface LiveReportingDetailsDto {
    /**
     * 
     * @type {string}
     * @memberof LiveReportingDetailsDto
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingDetailsDto
     */
    'eventId'?: string;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingDetailsDto
     */
    'dayId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingDetailsDto
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingDetailsDto
     */
    'description'?: string | null;
    /**
     * 
     * @type {StateType}
     * @memberof LiveReportingDetailsDto
     */
    'state'?: StateType;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingDetailsDto
     */
    'startsAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingDetailsDto
     */
    'finishedAt'?: string | null;
    /**
     * 
     * @type {LiveReportingStatisticsDto}
     * @memberof LiveReportingDetailsDto
     */
    'statistics'?: LiveReportingStatisticsDto;
    /**
     * 
     * @type {EventSummaryDto}
     * @memberof LiveReportingDetailsDto
     */
    'event'?: EventSummaryDto;
    /**
     * 
     * @type {Array<LiveUpdateDto>}
     * @memberof LiveReportingDetailsDto
     */
    'updates'?: Array<LiveUpdateDto> | null;
}



