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
 * @interface TourEntity
 */
export interface TourEntity {
    /**
     * 
     * @type {string}
     * @memberof TourEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TourEntity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TourEntity
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TourEntity
     */
    abbreviation?: string;
    /**
     * 
     * @type {string}
     * @memberof TourEntity
     */
    logoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof TourEntity
     */
    websiteUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof TourEntity
     */
    thmId?: string;
}

/**
 * Check if a given object implements the TourEntity interface.
 */
export function instanceOfTourEntity(value: object): boolean {
    return true;
}

export function TourEntityFromJSON(json: any): TourEntity {
    return TourEntityFromJSONTyped(json, false);
}

export function TourEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): TourEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'abbreviation': json['abbreviation'] == null ? undefined : json['abbreviation'],
        'logoUrl': json['logoUrl'] == null ? undefined : json['logoUrl'],
        'websiteUrl': json['websiteUrl'] == null ? undefined : json['websiteUrl'],
        'thmId': json['thmId'] == null ? undefined : json['thmId'],
    };
}

export function TourEntityToJSON(value?: TourEntity | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'abbreviation': value['abbreviation'],
        'logoUrl': value['logoUrl'],
        'websiteUrl': value['websiteUrl'],
        'thmId': value['thmId'],
    };
}
