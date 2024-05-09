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

/**
 * 
 * @export
 * @enum {string}
 */
export enum BlindLevelType {
    Level = 'Level',
    Break = 'Break',
    EndOfDay = 'EndOfDay'
}


export function instanceOfBlindLevelType(value: any): boolean {
    return Object.values(BlindLevelType).includes(value);
}

export function BlindLevelTypeFromJSON(json: any): BlindLevelType {
    return BlindLevelTypeFromJSONTyped(json, false);
}

export function BlindLevelTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlindLevelType {
    return json as BlindLevelType;
}

export function BlindLevelTypeToJSON(value?: BlindLevelType | null): any {
    return value as any;
}
