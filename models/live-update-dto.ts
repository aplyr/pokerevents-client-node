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
import { BlindLevelDto } from './blind-level-dto';
// May contain unused imports in some cases
// @ts-ignore
import { EditorDto } from './editor-dto';
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
 * @interface LiveUpdateDto
 */
export interface LiveUpdateDto {
    /**
     * 
     * @type {string}
     * @memberof LiveUpdateDto
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof LiveUpdateDto
     */
    'liveReportingId'?: string;
    /**
     * 
     * @type {string}
     * @memberof LiveUpdateDto
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof LiveUpdateDto
     */
    'modifiedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof LiveUpdateDto
     */
    'recordedAt'?: string;
    /**
     * 
     * @type {EditorDto}
     * @memberof LiveUpdateDto
     */
    'createdBy'?: EditorDto;
    /**
     * 
     * @type {EditorDto}
     * @memberof LiveUpdateDto
     */
    'modifiedBy'?: EditorDto;
    /**
     * 
     * @type {string}
     * @memberof LiveUpdateDto
     */
    'title'?: string | null;
    /**
     * 
     * @type {LiveUpdateState}
     * @memberof LiveUpdateDto
     */
    'state'?: LiveUpdateState;
    /**
     * 
     * @type {LiveUpdateType}
     * @memberof LiveUpdateDto
     */
    'type'?: LiveUpdateType;
    /**
     * 
     * @type {any}
     * @memberof LiveUpdateDto
     */
    'content'?: any | null;
    /**
     * 
     * @type {Array<SectionDto>}
     * @memberof LiveUpdateDto
     */
    'sections'?: Array<SectionDto> | null;
    /**
     * 
     * @type {Array<PlayerSummaryDto>}
     * @memberof LiveUpdateDto
     */
    'players'?: Array<PlayerSummaryDto> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LiveUpdateDto
     */
    'tags'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof LiveUpdateDto
     */
    'blindLevelId'?: string | null;
    /**
     * 
     * @type {BlindLevelDto}
     * @memberof LiveUpdateDto
     */
    'blindLevel'?: BlindLevelDto;
}



