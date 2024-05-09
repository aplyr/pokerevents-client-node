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
import type { ActualPrizeDto } from './ActualPrizeDto';
import {
    ActualPrizeDtoFromJSON,
    ActualPrizeDtoFromJSONTyped,
    ActualPrizeDtoToJSON,
} from './ActualPrizeDto';
import type { RegistrationStatisticsDto } from './RegistrationStatisticsDto';
import {
    RegistrationStatisticsDtoFromJSON,
    RegistrationStatisticsDtoFromJSONTyped,
    RegistrationStatisticsDtoToJSON,
} from './RegistrationStatisticsDto';

/**
 * 
 * @export
 * @interface RegistrationEntity
 */
export interface RegistrationEntity {
    /**
     * 
     * @type {string}
     * @memberof RegistrationEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationEntity
     */
    eventId?: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationEntity
     */
    playerId?: string;
    /**
     * 
     * @type {number}
     * @memberof RegistrationEntity
     */
    position?: number;
    /**
     * 
     * @type {ActualPrizeDto}
     * @memberof RegistrationEntity
     */
    prize?: ActualPrizeDto;
    /**
     * 
     * @type {RegistrationStatisticsDto}
     * @memberof RegistrationEntity
     */
    statistics?: RegistrationStatisticsDto;
}

/**
 * Check if a given object implements the RegistrationEntity interface.
 */
export function instanceOfRegistrationEntity(value: object): boolean {
    return true;
}

export function RegistrationEntityFromJSON(json: any): RegistrationEntity {
    return RegistrationEntityFromJSONTyped(json, false);
}

export function RegistrationEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'eventId': json['eventId'] == null ? undefined : json['eventId'],
        'playerId': json['playerId'] == null ? undefined : json['playerId'],
        'position': json['position'] == null ? undefined : json['position'],
        'prize': json['prize'] == null ? undefined : ActualPrizeDtoFromJSON(json['prize']),
        'statistics': json['statistics'] == null ? undefined : RegistrationStatisticsDtoFromJSON(json['statistics']),
    };
}

export function RegistrationEntityToJSON(value?: RegistrationEntity | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'eventId': value['eventId'],
        'playerId': value['playerId'],
        'position': value['position'],
        'prize': ActualPrizeDtoToJSON(value['prize']),
        'statistics': RegistrationStatisticsDtoToJSON(value['statistics']),
    };
}

