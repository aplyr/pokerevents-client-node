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
 * @interface PlayerEntity
 */
export interface PlayerEntity {
    /**
     * 
     * @type {string}
     * @memberof PlayerEntity
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerEntity
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof PlayerEntity
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlayerEntity
     */
    'nickname'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlayerEntity
     */
    'countryIso'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlayerEntity
     */
    'photoUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlayerEntity
     */
    'thmId'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PlayerEntity
     */
    'photos'?: Array<string> | null;
}

