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
 * @interface HttpValidationProblemDetails
 */
export interface HttpValidationProblemDetails {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof HttpValidationProblemDetails
     */
    'type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HttpValidationProblemDetails
     */
    'title'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof HttpValidationProblemDetails
     */
    'status'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof HttpValidationProblemDetails
     */
    'detail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HttpValidationProblemDetails
     */
    'instance'?: string | null;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof HttpValidationProblemDetails
     */
    'errors'?: { [key: string]: Array<string>; } | null;
}

