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
  FestivalEntity,
} from '../models/index';
import {
    FestivalEntityFromJSON,
    FestivalEntityToJSON,
} from '../models/index';

export interface CreateFestivalEntityRequest {
    festivalEntity: FestivalEntity;
}

export interface DeleteFestivalEntityRequest {
    id: string;
}

export interface GetAllFestivalEntitiesRequest {
    seasonId?: string;
}

export interface GetFestivalEntityByIdRequest {
    id: string;
}

export interface UpdateFestivalEntityRequest {
    id: string;
    festivalEntity: FestivalEntity;
}

/**
 * 
 */
export class FestivalEntityApi extends runtime.BaseAPI {

    /**
     */
    async createFestivalEntityRaw(requestParameters: CreateFestivalEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FestivalEntity>> {
        if (requestParameters['festivalEntity'] == null) {
            throw new runtime.RequiredError(
                'festivalEntity',
                'Required parameter "festivalEntity" was null or undefined when calling createFestivalEntity().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/api/FestivalEntity`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FestivalEntityToJSON(requestParameters['festivalEntity']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FestivalEntityFromJSON(jsonValue));
    }

    /**
     */
    async createFestivalEntity(requestParameters: CreateFestivalEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FestivalEntity> {
        const response = await this.createFestivalEntityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteFestivalEntityRaw(requestParameters: DeleteFestivalEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteFestivalEntity().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/api/FestivalEntity/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteFestivalEntity(requestParameters: DeleteFestivalEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteFestivalEntityRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllFestivalEntitiesRaw(requestParameters: GetAllFestivalEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FestivalEntity>>> {
        const queryParameters: any = {};

        if (requestParameters['seasonId'] != null) {
            queryParameters['seasonId'] = requestParameters['seasonId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/api/FestivalEntity`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FestivalEntityFromJSON));
    }

    /**
     */
    async getAllFestivalEntities(requestParameters: GetAllFestivalEntitiesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FestivalEntity>> {
        const response = await this.getAllFestivalEntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getFestivalEntityByIdRaw(requestParameters: GetFestivalEntityByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FestivalEntity>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getFestivalEntityById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/api/FestivalEntity/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FestivalEntityFromJSON(jsonValue));
    }

    /**
     */
    async getFestivalEntityById(requestParameters: GetFestivalEntityByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FestivalEntity> {
        const response = await this.getFestivalEntityByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateFestivalEntityRaw(requestParameters: UpdateFestivalEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateFestivalEntity().'
            );
        }

        if (requestParameters['festivalEntity'] == null) {
            throw new runtime.RequiredError(
                'festivalEntity',
                'Required parameter "festivalEntity" was null or undefined when calling updateFestivalEntity().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/api/FestivalEntity/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FestivalEntityToJSON(requestParameters['festivalEntity']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updateFestivalEntity(requestParameters: UpdateFestivalEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateFestivalEntityRaw(requestParameters, initOverrides);
    }

}
