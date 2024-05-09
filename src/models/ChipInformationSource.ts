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
export enum ChipInformationSource {
    Official = 'Official',
    Reporter = 'Reporter',
    Player = 'Player',
    Other = 'Other'
}


export function instanceOfChipInformationSource(value: any): boolean {
    return Object.values(ChipInformationSource).includes(value);
}

export function ChipInformationSourceFromJSON(json: any): ChipInformationSource {
    return ChipInformationSourceFromJSONTyped(json, false);
}

export function ChipInformationSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChipInformationSource {
    return json as ChipInformationSource;
}

export function ChipInformationSourceToJSON(value?: ChipInformationSource | null): any {
    return value as any;
}

