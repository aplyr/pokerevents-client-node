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
import { FestivalOverviewDto } from './festival-overview-dto';

/**
 * 
 * @export
 * @interface SeasonOverviewDto
 */
export interface SeasonOverviewDto {
    /**
     * 
     * @type {string}
     * @memberof SeasonOverviewDto
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SeasonOverviewDto
     */
    'name': string | null;
    /**
     * 
     * @type {Array<FestivalOverviewDto>}
     * @memberof SeasonOverviewDto
     */
    'festivals': Array<FestivalOverviewDto> | null;
}

