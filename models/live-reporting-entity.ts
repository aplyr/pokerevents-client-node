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
import { DayEntity } from './day-entity';
// May contain unused imports in some cases
// @ts-ignore
import { EventEntity } from './event-entity';
// May contain unused imports in some cases
// @ts-ignore
import { LiveReportingStatisticsDto } from './live-reporting-statistics-dto';
// May contain unused imports in some cases
// @ts-ignore
import { LiveUpdateEntity } from './live-update-entity';
// May contain unused imports in some cases
// @ts-ignore
import { StateType } from './state-type';

/**
 * 
 * @export
 * @interface LiveReportingEntity
 */
export interface LiveReportingEntity {
    /**
     * 
     * @type {string}
     * @memberof LiveReportingEntity
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingEntity
     */
    'eventId'?: string;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingEntity
     */
    'dayId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingEntity
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingEntity
     */
    'description'?: string | null;
    /**
     * 
     * @type {StateType}
     * @memberof LiveReportingEntity
     */
    'state'?: StateType;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingEntity
     */
    'startsAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveReportingEntity
     */
    'finishedAt'?: string | null;
    /**
     * 
     * @type {LiveReportingStatisticsDto}
     * @memberof LiveReportingEntity
     */
    'statistics'?: LiveReportingStatisticsDto;
    /**
     * 
     * @type {EventEntity}
     * @memberof LiveReportingEntity
     */
    'event'?: EventEntity;
    /**
     * 
     * @type {DayEntity}
     * @memberof LiveReportingEntity
     */
    'day'?: DayEntity;
    /**
     * 
     * @type {Array<LiveUpdateEntity>}
     * @memberof LiveReportingEntity
     */
    'updates'?: Array<LiveUpdateEntity> | null;
}



