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
import { LiveReportingOverviewDto } from './live-reporting-overview-dto';
// May contain unused imports in some cases
// @ts-ignore
import { StateType } from './state-type';

/**
 * 
 * @export
 * @interface EventOverview
 */
export interface EventOverview {
    /**
     * 
     * @type {string}
     * @memberof EventOverview
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventOverview
     */
    'name'?: string | null;
    /**
     * 
     * @type {StateType}
     * @memberof EventOverview
     */
    'state': StateType;
    /**
     * 
     * @type {number}
     * @memberof EventOverview
     */
    'priority'?: number;
    /**
     * 
     * @type {string}
     * @memberof EventOverview
     */
    'fromDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventOverview
     */
    'toDate'?: string;
    /**
     * 
     * @type {Array<LiveReportingOverviewDto>}
     * @memberof EventOverview
     */
    'liveReportings': Array<LiveReportingOverviewDto> | null;
}



