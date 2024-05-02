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
import { LiveUpdateState } from './live-update-state';
// May contain unused imports in some cases
// @ts-ignore
import { LiveUpdateType } from './live-update-type';
// May contain unused imports in some cases
// @ts-ignore
import { PlayerSummaryDto } from './player-summary-dto';
// May contain unused imports in some cases
// @ts-ignore
import { SectionDto } from './section-dto';

/**
 * 
 * @export
 * @interface LiveUpdateRequest
 */
export interface LiveUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof LiveUpdateRequest
     */
    'blindLevelId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LiveUpdateRequest
     */
    'title'?: string | null;
    /**
     * 
     * @type {LiveUpdateState}
     * @memberof LiveUpdateRequest
     */
    'state'?: LiveUpdateState;
    /**
     * 
     * @type {LiveUpdateType}
     * @memberof LiveUpdateRequest
     */
    'type'?: LiveUpdateType;
    /**
     * 
     * @type {any}
     * @memberof LiveUpdateRequest
     */
    'content'?: any | null;
    /**
     * 
     * @type {Array<SectionDto>}
     * @memberof LiveUpdateRequest
     */
    'sections'?: Array<SectionDto> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LiveUpdateRequest
     */
    'tags'?: Array<string> | null;
    /**
     * 
     * @type {Array<PlayerSummaryDto>}
     * @memberof LiveUpdateRequest
     */
    'players'?: Array<PlayerSummaryDto> | null;
}



