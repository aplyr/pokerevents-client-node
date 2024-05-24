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
import { EventSummaryDto } from './event-summary-dto';

/**
 * 
 * @export
 * @interface FestivalDetailsDto
 */
export interface FestivalDetailsDto {
    /**
     * 
     * @type {string}
     * @memberof FestivalDetailsDto
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof FestivalDetailsDto
     */
    'seasonId': string;
    /**
     * 
     * @type {string}
     * @memberof FestivalDetailsDto
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof FestivalDetailsDto
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FestivalDetailsDto
     */
    'fromDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof FestivalDetailsDto
     */
    'toDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof FestivalDetailsDto
     */
    'countryIso'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FestivalDetailsDto
     */
    'websiteUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FestivalDetailsDto
     */
    'thmId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FestivalDetailsDto
     */
    'seasonName': string;
    /**
     * 
     * @type {Array<EventSummaryDto>}
     * @memberof FestivalDetailsDto
     */
    'activeEvents'?: Array<EventSummaryDto> | null;
}

