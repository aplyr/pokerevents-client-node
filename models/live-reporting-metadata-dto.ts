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
// May contain unused imports in some cases
// @ts-ignore
import { LiveReportingStatisticsDto } from './live-reporting-statistics-dto';
// May contain unused imports in some cases
// @ts-ignore
import { PlayerSummaryDto } from './player-summary-dto';

/**
 * 
 * @export
 * @interface LiveReportingMetadataDto
 */
export interface LiveReportingMetadataDto {
    /**
     * 
     * @type {string}
     * @memberof LiveReportingMetadataDto
     */
    'id'?: string;
    /**
     * 
     * @type {LiveReportingStatisticsDto}
     * @memberof LiveReportingMetadataDto
     */
    'statistics'?: LiveReportingStatisticsDto;
    /**
     * 
     * @type {Array<string>}
     * @memberof LiveReportingMetadataDto
     */
    'allTags': Array<string> | null;
    /**
     * 
     * @type {Array<PlayerSummaryDto>}
     * @memberof LiveReportingMetadataDto
     */
    'allPlayers': Array<PlayerSummaryDto> | null;
    /**
     * 
     * @type {Array<BlindLevelDto>}
     * @memberof LiveReportingMetadataDto
     */
    'allBlindLevels': Array<BlindLevelDto> | null;
}

