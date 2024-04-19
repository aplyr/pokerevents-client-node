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
import { BlindLevelEntity } from './blind-level-entity';
// May contain unused imports in some cases
// @ts-ignore
import { DayEntity } from './day-entity';
// May contain unused imports in some cases
// @ts-ignore
import { EventMetaDto } from './event-meta-dto';
// May contain unused imports in some cases
// @ts-ignore
import { EventStatisticsDto } from './event-statistics-dto';
// May contain unused imports in some cases
// @ts-ignore
import { FestivalDetailsDto } from './festival-details-dto';
// May contain unused imports in some cases
// @ts-ignore
import { PayoutDetailsDto } from './payout-details-dto';
// May contain unused imports in some cases
// @ts-ignore
import { StateType } from './state-type';
// May contain unused imports in some cases
// @ts-ignore
import { VenueDetailsDto } from './venue-details-dto';

/**
 * 
 * @export
 * @interface EventDetailsDto
 */
export interface EventDetailsDto {
    /**
     * 
     * @type {string}
     * @memberof EventDetailsDto
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventDetailsDto
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventDetailsDto
     */
    'thmId'?: string | null;
    /**
     * 
     * @type {StateType}
     * @memberof EventDetailsDto
     */
    'state'?: StateType;
    /**
     * 
     * @type {number}
     * @memberof EventDetailsDto
     */
    'priority'?: number;
    /**
     * 
     * @type {string}
     * @memberof EventDetailsDto
     */
    'fromDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventDetailsDto
     */
    'toDate'?: string;
    /**
     * 
     * @type {EventMetaDto}
     * @memberof EventDetailsDto
     */
    'meta'?: EventMetaDto;
    /**
     * 
     * @type {EventStatisticsDto}
     * @memberof EventDetailsDto
     */
    'statistics'?: EventStatisticsDto;
    /**
     * 
     * @type {VenueDetailsDto}
     * @memberof EventDetailsDto
     */
    'venue'?: VenueDetailsDto;
    /**
     * 
     * @type {Array<string>}
     * @memberof EventDetailsDto
     */
    'photos'?: Array<string> | null;
    /**
     * 
     * @type {FestivalDetailsDto}
     * @memberof EventDetailsDto
     */
    'festival'?: FestivalDetailsDto;
    /**
     * 
     * @type {Array<DayEntity>}
     * @memberof EventDetailsDto
     */
    'days'?: Array<DayEntity> | null;
    /**
     * 
     * @type {Array<BlindLevelEntity>}
     * @memberof EventDetailsDto
     */
    'blindLevels'?: Array<BlindLevelEntity> | null;
    /**
     * 
     * @type {Array<PayoutDetailsDto>}
     * @memberof EventDetailsDto
     */
    'payouts'?: Array<PayoutDetailsDto> | null;
}



