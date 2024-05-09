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

import { mapValues } from '../runtime';
import type { MemoryCacheStatistics } from './MemoryCacheStatistics';
import {
    MemoryCacheStatisticsFromJSON,
    MemoryCacheStatisticsFromJSONTyped,
    MemoryCacheStatisticsToJSON,
} from './MemoryCacheStatistics';

/**
 * 
 * @export
 * @interface CacheStatisticsDto
 */
export interface CacheStatisticsDto {
    /**
     * 
     * @type {MemoryCacheStatistics}
     * @memberof CacheStatisticsDto
     */
    eventStatistics?: MemoryCacheStatistics;
    /**
     * 
     * @type {MemoryCacheStatistics}
     * @memberof CacheStatisticsDto
     */
    liveReportingStatistics?: MemoryCacheStatistics;
}

/**
 * Check if a given object implements the CacheStatisticsDto interface.
 */
export function instanceOfCacheStatisticsDto(value: object): boolean {
    return true;
}

export function CacheStatisticsDtoFromJSON(json: any): CacheStatisticsDto {
    return CacheStatisticsDtoFromJSONTyped(json, false);
}

export function CacheStatisticsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CacheStatisticsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'eventStatistics': json['eventStatistics'] == null ? undefined : MemoryCacheStatisticsFromJSON(json['eventStatistics']),
        'liveReportingStatistics': json['liveReportingStatistics'] == null ? undefined : MemoryCacheStatisticsFromJSON(json['liveReportingStatistics']),
    };
}

export function CacheStatisticsDtoToJSON(value?: CacheStatisticsDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'eventStatistics': MemoryCacheStatisticsToJSON(value['eventStatistics']),
        'liveReportingStatistics': MemoryCacheStatisticsToJSON(value['liveReportingStatistics']),
    };
}

