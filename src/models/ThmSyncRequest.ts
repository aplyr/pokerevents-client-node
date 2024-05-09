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
 * @interface ThmSyncRequest
 */
export interface ThmSyncRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof ThmSyncRequest
     */
    thmIds: Array<string>;
}

/**
 * Check if a given object implements the ThmSyncRequest interface.
 */
export function instanceOfThmSyncRequest(value: object): boolean {
    if (!('thmIds' in value)) return false;
    return true;
}

export function ThmSyncRequestFromJSON(json: any): ThmSyncRequest {
    return ThmSyncRequestFromJSONTyped(json, false);
}

export function ThmSyncRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThmSyncRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'thmIds': json['thmIds'],
    };
}

export function ThmSyncRequestToJSON(value?: ThmSyncRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'thmIds': value['thmIds'],
    };
}

