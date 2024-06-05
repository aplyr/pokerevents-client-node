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
import { ChipCountDto } from './chip-count-dto';
// May contain unused imports in some cases
// @ts-ignore
import { PlayerSummaryDto } from './player-summary-dto';

/**
 * 
 * @export
 * @interface EventPlayerStatisticsItem
 */
export interface EventPlayerStatisticsItem {
    /**
     * 
     * @type {PlayerSummaryDto}
     * @memberof EventPlayerStatisticsItem
     */
    'player': PlayerSummaryDto;
    /**
     * 
     * @type {string}
     * @memberof EventPlayerStatisticsItem
     */
    'registrationId': string;
    /**
     * 
     * @type {Array<ChipCountDto>}
     * @memberof EventPlayerStatisticsItem
     */
    'chipCountUpdates': Array<ChipCountDto> | null;
}

