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
import { ActualPrizeDto } from './actual-prize-dto';
// May contain unused imports in some cases
// @ts-ignore
import { ChipCountDto } from './chip-count-dto';
// May contain unused imports in some cases
// @ts-ignore
import { PlayerSummaryDto } from './player-summary-dto';
// May contain unused imports in some cases
// @ts-ignore
import { RegistrationEventDetailsDto } from './registration-event-details-dto';
// May contain unused imports in some cases
// @ts-ignore
import { RegistrationStatisticsDto } from './registration-statistics-dto';

/**
 * 
 * @export
 * @interface PlayerEventDetailsDto
 */
export interface PlayerEventDetailsDto {
    /**
     * 
     * @type {string}
     * @memberof PlayerEventDetailsDto
     */
    'eventId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerEventDetailsDto
     */
    'playerId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerEventDetailsDto
     */
    'registrationId'?: string;
    /**
     * 
     * @type {number}
     * @memberof PlayerEventDetailsDto
     */
    'position'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PlayerEventDetailsDto
     */
    'payoutPrize'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PlayerEventDetailsDto
     */
    'payoutPrizeUsd'?: number | null;
    /**
     * 
     * @type {ActualPrizeDto}
     * @memberof PlayerEventDetailsDto
     */
    'prize'?: ActualPrizeDto;
    /**
     * 
     * @type {PlayerSummaryDto}
     * @memberof PlayerEventDetailsDto
     */
    'player'?: PlayerSummaryDto;
    /**
     * 
     * @type {RegistrationStatisticsDto}
     * @memberof PlayerEventDetailsDto
     */
    'statistics'?: RegistrationStatisticsDto;
    /**
     * 
     * @type {Array<ChipCountDto>}
     * @memberof PlayerEventDetailsDto
     */
    'chipCountUpdates'?: Array<ChipCountDto> | null;
    /**
     * 
     * @type {Array<RegistrationEventDetailsDto>}
     * @memberof PlayerEventDetailsDto
     */
    'eventsAttended'?: Array<RegistrationEventDetailsDto> | null;
}

