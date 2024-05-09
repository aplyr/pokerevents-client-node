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

import { mapValues } from '../runtime';
import type { ErrorTypes } from './ErrorTypes';
import {
    ErrorTypesFromJSON,
    ErrorTypesFromJSONTyped,
    ErrorTypesToJSON,
} from './ErrorTypes';

/**
 * 
 * @export
 * @interface Result
 */
export interface Result {
    /**
     * 
     * @type {any}
     * @memberof Result
     */
    value?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    readonly isSuccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    readonly isFailure?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    readonly errorMessage?: string;
    /**
     * 
     * @type {ErrorTypes}
     * @memberof Result
     */
    errorCode?: ErrorTypes;
    /**
     * 
     * @type {Array<Error>}
     * @memberof Result
     */
    readonly errors?: Array<Error>;
}

/**
 * Check if a given object implements the Result interface.
 */
export function instanceOfResult(value: object): boolean {
    return true;
}

export function ResultFromJSON(json: any): Result {
    return ResultFromJSONTyped(json, false);
}

export function ResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): Result {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'] == null ? undefined : json['value'],
        'isSuccess': json['isSuccess'] == null ? undefined : json['isSuccess'],
        'isFailure': json['isFailure'] == null ? undefined : json['isFailure'],
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : ErrorTypesFromJSON(json['errorCode']),
        'errors': json['errors'] == null ? undefined : json['errors'],
    };
}

export function ResultToJSON(value?: Omit<Result, 'isSuccess'|'isFailure'|'errorMessage'|'errors'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'value': value['value'],
        'errorCode': ErrorTypesToJSON(value['errorCode']),
    };
}

