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
 * @interface ChipCountUpdateDto
 */
export interface ChipCountUpdateDto {
    /**
     * 
     * @type {string}
     * @memberof ChipCountUpdateDto
     */
    'playerId'?: string;
    /**
     * 
     * @type {number}
     * @memberof ChipCountUpdateDto
     */
    'chipcount'?: number;
    /**
     * 
     * @type {number}
     * @memberof ChipCountUpdateDto
     */
    'table'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ChipCountUpdateDto
     */
    'seat'?: number | null;
}

