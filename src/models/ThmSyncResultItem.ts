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
/**
 * 
 * @export
 * @interface ThmSyncResultItem
 */
export interface ThmSyncResultItem {
    /**
     * 
     * @type {string}
     * @memberof ThmSyncResultItem
     */
    thmId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ThmSyncResultItem
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ThmSyncResultItem
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof ThmSyncResultItem
     */
    entityId?: string;
}

/**
 * Check if a given object implements the ThmSyncResultItem interface.
 */
export function instanceOfThmSyncResultItem(value: object): boolean {
    return true;
}

export function ThmSyncResultItemFromJSON(json: any): ThmSyncResultItem {
    return ThmSyncResultItemFromJSONTyped(json, false);
}

export function ThmSyncResultItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThmSyncResultItem {
    if (json == null) {
        return json;
    }
    return {
        
        'thmId': json['thmId'] == null ? undefined : json['thmId'],
        'success': json['success'] == null ? undefined : json['success'],
        'error': json['error'] == null ? undefined : json['error'],
        'entityId': json['entityId'] == null ? undefined : json['entityId'],
    };
}

export function ThmSyncResultItemToJSON(value?: ThmSyncResultItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'thmId': value['thmId'],
        'success': value['success'],
        'error': value['error'],
        'entityId': value['entityId'],
    };
}
