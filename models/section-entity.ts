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


// May contain unused imports in some cases
// @ts-ignore
import { LiveUpdateEntity } from './live-update-entity';
// May contain unused imports in some cases
// @ts-ignore
import { SectionType } from './section-type';

/**
 * 
 * @export
 * @interface SectionEntity
 */
export interface SectionEntity {
    /**
     * 
     * @type {string}
     * @memberof SectionEntity
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SectionEntity
     */
    'liveUpdateId'?: string;
    /**
     * 
     * @type {SectionType}
     * @memberof SectionEntity
     */
    'type'?: SectionType;
    /**
     * 
     * @type {number}
     * @memberof SectionEntity
     */
    'order'?: number;
    /**
     * 
     * @type {any}
     * @memberof SectionEntity
     */
    'content'?: any | null;
    /**
     * 
     * @type {LiveUpdateEntity}
     * @memberof SectionEntity
     */
    'liveUpdate'?: LiveUpdateEntity;
}



