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
import type { ThmSyncResultItem } from './ThmSyncResultItem';
import {
    ThmSyncResultItemFromJSON,
    ThmSyncResultItemFromJSONTyped,
    ThmSyncResultItemToJSON,
} from './ThmSyncResultItem';

/**
 * 
 * @export
 * @interface ThmSyncResult
 */
export interface ThmSyncResult {
    /**
     * 
     * @type {Array<ThmSyncResultItem>}
     * @memberof ThmSyncResult
     */
    results?: Array<ThmSyncResultItem>;
}

/**
 * Check if a given object implements the ThmSyncResult interface.
 */
export function instanceOfThmSyncResult(value: object): boolean {
    return true;
}

export function ThmSyncResultFromJSON(json: any): ThmSyncResult {
    return ThmSyncResultFromJSONTyped(json, false);
}

export function ThmSyncResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThmSyncResult {
    if (json == null) {
        return json;
    }
    return {
        
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(ThmSyncResultItemFromJSON)),
    };
}

export function ThmSyncResultToJSON(value?: ThmSyncResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(ThmSyncResultItemToJSON)),
    };
}
