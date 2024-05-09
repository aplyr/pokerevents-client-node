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
import type { PlayerSummaryDto } from './PlayerSummaryDto';
import {
    PlayerSummaryDtoFromJSON,
    PlayerSummaryDtoFromJSONTyped,
    PlayerSummaryDtoToJSON,
} from './PlayerSummaryDto';

/**
 * 
 * @export
 * @interface EventMetaDto
 */
export interface EventMetaDto {
    /**
     * 
     * @type {number}
     * @memberof EventMetaDto
     */
    number?: number;
    /**
     * 
     * @type {string}
     * @memberof EventMetaDto
     */
    type?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EventMetaDto
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EventMetaDto
     */
    game?: string;
    /**
     * 
     * @type {number}
     * @memberof EventMetaDto
     */
    startingChips?: number;
    /**
     * 
     * @type {number}
     * @memberof EventMetaDto
     */
    buyIn?: number;
    /**
     * 
     * @type {number}
     * @memberof EventMetaDto
     */
    fee?: number;
    /**
     * 
     * @type {string}
     * @memberof EventMetaDto
     */
    currency?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EventMetaDto
     */
    isRebuyEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EventMetaDto
     */
    isAddOnEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EventMetaDto
     */
    isRestricted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EventMetaDto
     */
    useAnte?: boolean;
    /**
     * 
     * @type {PlayerSummaryDto}
     * @memberof EventMetaDto
     */
    winner?: PlayerSummaryDto;
}

/**
 * Check if a given object implements the EventMetaDto interface.
 */
export function instanceOfEventMetaDto(value: object): boolean {
    return true;
}

export function EventMetaDtoFromJSON(json: any): EventMetaDto {
    return EventMetaDtoFromJSONTyped(json, false);
}

export function EventMetaDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventMetaDto {
    if (json == null) {
        return json;
    }
    return {
        
        'number': json['number'] == null ? undefined : json['number'],
        'type': json['type'] == null ? undefined : json['type'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'game': json['game'] == null ? undefined : json['game'],
        'startingChips': json['startingChips'] == null ? undefined : json['startingChips'],
        'buyIn': json['buyIn'] == null ? undefined : json['buyIn'],
        'fee': json['fee'] == null ? undefined : json['fee'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'isRebuyEnabled': json['isRebuyEnabled'] == null ? undefined : json['isRebuyEnabled'],
        'isAddOnEnabled': json['isAddOnEnabled'] == null ? undefined : json['isAddOnEnabled'],
        'isRestricted': json['isRestricted'] == null ? undefined : json['isRestricted'],
        'useAnte': json['useAnte'] == null ? undefined : json['useAnte'],
        'winner': json['winner'] == null ? undefined : PlayerSummaryDtoFromJSON(json['winner']),
    };
}

export function EventMetaDtoToJSON(value?: EventMetaDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'number': value['number'],
        'type': value['type'],
        'tags': value['tags'],
        'game': value['game'],
        'startingChips': value['startingChips'],
        'buyIn': value['buyIn'],
        'fee': value['fee'],
        'currency': value['currency'],
        'isRebuyEnabled': value['isRebuyEnabled'],
        'isAddOnEnabled': value['isAddOnEnabled'],
        'isRestricted': value['isRestricted'],
        'useAnte': value['useAnte'],
        'winner': PlayerSummaryDtoToJSON(value['winner']),
    };
}

