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
/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    twoFactorCode?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    twoFactorRecoveryCode?: string;
}

/**
 * Check if a given object implements the LoginRequest interface.
 */
export function instanceOfLoginRequest(value: object): boolean {
    return true;
}

export function LoginRequestFromJSON(json: any): LoginRequest {
    return LoginRequestFromJSONTyped(json, false);
}

export function LoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'password': json['password'] == null ? undefined : json['password'],
        'twoFactorCode': json['twoFactorCode'] == null ? undefined : json['twoFactorCode'],
        'twoFactorRecoveryCode': json['twoFactorRecoveryCode'] == null ? undefined : json['twoFactorRecoveryCode'],
    };
}

export function LoginRequestToJSON(value?: LoginRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'password': value['password'],
        'twoFactorCode': value['twoFactorCode'],
        'twoFactorRecoveryCode': value['twoFactorRecoveryCode'],
    };
}
