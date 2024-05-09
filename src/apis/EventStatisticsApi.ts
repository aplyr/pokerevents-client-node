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


import * as runtime from '../runtime';
import type {
  EventPlayerStatistics,
} from '../models/index';
import {
    EventPlayerStatisticsFromJSON,
    EventPlayerStatisticsToJSON,
} from '../models/index';

export interface ApiEventStatisticsEventIdPlayersGetRequest {
    eventId: string;
}

/**
 * 
 */
export class EventStatisticsApi extends runtime.BaseAPI {

    /**
     */
    async apiEventStatisticsEventIdPlayersGetRaw(requestParameters: ApiEventStatisticsEventIdPlayersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EventPlayerStatistics>> {
        if (requestParameters['eventId'] == null) {
            throw new runtime.RequiredError(
                'eventId',
                'Required parameter "eventId" was null or undefined when calling apiEventStatisticsEventIdPlayersGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/api/EventStatistics/{eventId}/players`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters['eventId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventPlayerStatisticsFromJSON(jsonValue));
    }

    /**
     */
    async apiEventStatisticsEventIdPlayersGet(requestParameters: ApiEventStatisticsEventIdPlayersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EventPlayerStatistics> {
        const response = await this.apiEventStatisticsEventIdPlayersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
