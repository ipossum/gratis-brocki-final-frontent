/**
 * GratisBrockiBackend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: @springdoc.version@
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import {FileDto} from "./fileDto";

export interface ItemUpdateDto {
    title?: string;
    description?: string;
    zipCode?: number;
    category?: ItemUpdateDto.CategoryEnum;
    condition?: ItemUpdateDto.ConditionEnum;
    pictures?: Array<FileDto>;
}
export namespace ItemUpdateDto {
    export type CategoryEnum = 'CHILDREN' | 'CLOTHING' | 'GARDEN' | 'HOUSEHOLD' | 'SPORT' | 'VEHICLE' | 'OTHER';
    export const CategoryEnum = {
        Children: 'CHILDREN' as CategoryEnum,
        Clothing: 'CLOTHING' as CategoryEnum,
        Garden: 'GARDEN' as CategoryEnum,
        Household: 'HOUSEHOLD' as CategoryEnum,
        Sport: 'SPORT' as CategoryEnum,
        Vehicle: 'VEHICLE' as CategoryEnum,
        Other: 'OTHER' as CategoryEnum
    };
    export type ConditionEnum = 'USED' | 'NEW' | 'DEFECTIVE';
    export const ConditionEnum = {
        Used: 'USED' as ConditionEnum,
        New: 'NEW' as ConditionEnum,
        Defective: 'DEFECTIVE' as ConditionEnum
    };
}


