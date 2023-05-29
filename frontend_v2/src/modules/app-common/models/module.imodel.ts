import { IPermission } from ".";

export interface IPermissionList {
    id: number;
    name: string;
    permissionList: IPermission[];
}

export interface IPermissionsModel {
    userId: string;
    userGroupId: number;
    permissionIds: number[];
}

export interface IUsersAddModel {
    userGroupId: number;
    affiliateId: string;
    userIdList:  string[];
}