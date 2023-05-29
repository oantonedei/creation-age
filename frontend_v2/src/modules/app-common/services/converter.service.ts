// import { Injectable } from '@angular/core';
// import { IAffiliate, IPaginated, IPermission } from '@common/models';
// import { LoginType } from '@modules/settings/enums';
// import { IAffiliateLoginType } from '@modules/settings/models';
// import { IApiAccount, IApiAffiliate, IApiAffiliateLoginType, IApiBalanceDetail, IApiBank, IApiCustomer, IApiCustomerApprovalItem, IApiCustomerRM, IApiPermission, IApiUser, IApiUserGroup, IApiUserGroupReview } from '@services/models';
// import * as moment from 'moment';
// import { IUser, IUserGroup, IUserGroupReview } from '@modules/users/models';
// import { IAccount, IBalanceDetail, IBank, ICustomer, ICustomerRM } from '@modules/customers/models';
// import { ICustomerApprovalItem } from '@modules/customers/models/customer-approval-item.imodel';
// import { CustomerActivity } from '@modules/customers/enums/customer-activity.enum';
// import { CustomerApprovalStatus } from '@modules/customers/enums/customer-approval-status.enum';

// @Injectable({
//   providedIn: 'root'
// })
// export class ConverterService {

//   constructor() { }

//   // public methods
//   toAffiliate(affiliate: IApiAffiliate): IAffiliate {
//     return {
//       id: affiliate.id,
//       code: affiliate.affiliateCode,
//       description: affiliate.affiliateName,
//       region: affiliate.region
//     };
//   }

//   toAffiliateLoginType(affiliateLoginType: IApiAffiliateLoginType): IAffiliateLoginType {
//     return {
//       id: affiliateLoginType.id,
//       affiliateCode: affiliateLoginType.affiliateCode,
//       loginType: affiliateLoginType.loginType as LoginType,
//       createdBy: affiliateLoginType.addedBy,
//       createdAt: affiliateLoginType.dateAdded ? moment(affiliateLoginType.dateAdded).toDate() : undefined,
//       updatedBy: affiliateLoginType.lastUpdatedBy,
//       updatedAt: affiliateLoginType.lastUpdatedOn ? moment(affiliateLoginType.lastUpdatedOn).toDate() : undefined,
//       approvedBy: affiliateLoginType.approvedBy,
//       approvedAt: affiliateLoginType.approvedDate ? moment(affiliateLoginType.approvedDate).toDate() : undefined,
//       approvalComment: affiliateLoginType.approvalMessage
//     };
//   }

//   toUserGroup(userGroup?: IApiUserGroup): IUserGroup {
//     return {
//       id: userGroup?.id!,
//       name: userGroup?.name!,
//       description: userGroup?.description!,
//       affiliateCode: userGroup?.affiliateCode!,
//       modifiedBy: userGroup?.modifyMaker!,
//       modifiedDate: userGroup?.modifyMakerDate ? moment(userGroup?.modifyMakerDate!).toDate() : undefined,
//       modifyApprovedBy: userGroup?.modifyChecker!,
//       modifyApprovedDate: userGroup?.modifyMakerDate ? moment(userGroup?.modifyMakerDate!).toDate() : undefined,
//       authStat: userGroup?.authStat!,
//       createdBy: userGroup?.maker!,
//       createdDate: userGroup?.makerDate ? moment(userGroup?.makerDate!).toDate() : undefined,
//       approvedBy: userGroup?.checker!,
//       approvedDate: userGroup?.checkerDate ? moment(userGroup?.checkerDate!).toDate() : undefined,
//       approveAction: userGroup?.approveAction!,
//       moduleStatus: userGroup?.moduleStatus!,
//       type: userGroup?.type!,
//       permissions: userGroup?.permissions as IPermission[]
//     }
//   }

//   toPaginatedUserGroup(paginatedItem: IPaginated<IApiUserGroup>): IPaginated<IUserGroup> {
//     return {
//       pageNo: paginatedItem.pageNo,
//       pageSize: paginatedItem.pageSize,
//       totalItemCount: paginatedItem.totalItemCount,
//       content: paginatedItem.content?.map(x => this.toUserGroup(x))
//     }
//   }

//   toUserGroupReview(userGroupReview: IApiUserGroupReview): IUserGroupReview {
//     return {
//       userGroup : this.toUserGroup((userGroupReview.userGroups as Array<IApiUserGroup>)[0]),
//       editedUserGroup: this.toUserGroup((userGroupReview.editedUserGroups! as Array<IApiUserGroup>)[0]),
//       permission: (userGroupReview.permissions! as Array<IPermission>),
//       editedPermission: (userGroupReview.editedPermissions! as Array<IPermission>),
//       users: userGroupReview.users?.map(user => this.toUser(user)),
//       editedUsers: userGroupReview.editedUsers?.map(user => this.toUser(user)),
//     }
//   }

//   toUser(user: IApiUser): IUser {
//     const userG: IUserGroup[] = [];
//     // if(user.userGroups !== undefined){
//     user.userGroups?.forEach(x => {
//       const data = this.toUserGroup(x)!;
//       userG.push(data);
//     });
//     // }
//     return {
//       userId: user.userId,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       emailAddress: user.emailAddress,
//       userType: user.userType,
//       affiliateCode: user.affiliateCode,
//       affiliateName: user.affiliateName,
//       createdBy: user.maker,
//       createdDate: user.makerDate ? moment(user.makerDate).toDate() : undefined,
//       approvedBy: user.checker,
//       approvedDate: user.checkerDate ? moment(user.checkerDate).toDate() : undefined,
//       status: user.status,
//       clusterId: user.clusterId,
//       agentId: user.agentId,
//       authStat: user.authStat,
//       approvAction: user.approvAction,
//       modifiedBy: user.modifyMaker,
//       modifiedDate: user.modifyMakerDate ? moment(user.modifyMakerDate).toDate() : undefined,
//       modifyApprovedBy: user.modifyChecker,
//       modifyApprovedDate: user.modifyMakerDate ? moment(user.modifyMakerDate).toDate() : undefined,
//       tellerBrnCode: user.tellerBrnCode,
//       tellerTill: user.tellerTill,
//       ipAddress: user.ipAddress,
//       userGroups: userG,
//       permissions: user.permissions as IPermission[],
//     }
//   }

//   toPaginatedUser(paginatedItem: IPaginated<IApiUser>): IPaginated<IUser> {
//     return {
//       pageNo: paginatedItem.pageNo,
//       pageSize: paginatedItem.pageSize,
//       totalItemCount: paginatedItem.totalItemCount,
//       content: paginatedItem.content?.map(x => this.toUser(x))
//     }
//   }

//   toCustomerRM(rm?: IApiCustomerRM): ICustomerRM {
//     return {
//       name: rm?.name,
//       email: rm?.email,
//       phone: rm?.phone
//     };
//   }

//   toApiCustomerRM(rm?: ICustomerRM):IApiCustomerRM{
//     return {
//       name: rm?.name,
//       email: rm?.email,
//       phone: rm?.phone
//     };
//   }

//   toBank(bank?: IApiBank): IBank {
//     return {
//       address: bank?.address,
//       name: bank?.name,
//       swiftCode: bank?.swiftCode
//     };
//   }

//   toApiBank(bank?: IBank): IApiBank {
//     return {
//       address: bank?.address,
//       name: bank?.name,
//       swiftCode: bank?.swiftCode
//     };
//   }

//   toBalanceDetail(balance?: IApiBalanceDetail): IBalanceDetail {
//     return {
//       advanceAgainstUnclearedFundsLimit: balance?.advanceAgainstUnclearedFundsLimit,
//       amountOnHold: balance?.mountOnHold,
//       availableBalance: balance?.availableBalance,
//       unclearedFunds: balance?.unclearedFunds
//     };
//   }

//   toApiBalanceDetail(balance?: IBalanceDetail): IApiBalanceDetail {
//     return {
//       advanceAgainstUnclearedFundsLimit: balance?.advanceAgainstUnclearedFundsLimit,
//       mountOnHold: balance?.amountOnHold,
//       availableBalance: balance?.availableBalance,
//       unclearedFunds: balance?.unclearedFunds
//     };
//   }

//   toAccount(account: IApiAccount): IAccount {
//     return {
//       accountNumber: account.accountNumber,
//       accountAlias: account.accountAlias,
//       currencyCode: account.currencyCode,
//       accountTypeCode: account.accountTypeCode,
//       accountStatus: account.accountStatus,
//       customerID: account.customerID,
//       accountName: account.accountName,
//       email: account.email,
//       phone: account.phone,
//       mobileNos: account.mobileNos,
//       customerType: account.customerType,
//       iban: account.iban,
//       rib_CLE: account.rib_CLE,
//       bank: this.toBank(account?.bank),
//       balanceDetails: this.toBalanceDetail(account.balanceDetails),
//       crm: this.toCustomerRM(account.crm)
//     };
//   }

//   toApiAccount(account: IAccount): IApiAccount {
//     return {
//       accountNumber: account.accountNumber,
//       accountAlias: account.accountAlias,
//       currencyCode: account.currencyCode,
//       accountTypeCode: account.accountTypeCode,
//       accountStatus: account.accountStatus,
//       customerID: account.customerID,
//       accountName: account.accountName,
//       email: account.email,
//       phone: account.phone,
//       mobileNos: account.mobileNos,
//       customerType: account.customerType,
//       iban: account.iban,
//       rib_CLE: account.rib_CLE,
//       bank: this.toApiBank(account?.bank),
//       balanceDetails: this.toApiBalanceDetail(account.balanceDetails),
//       crm: this.toApiCustomerRM(account.crm)
//     };
//   }

//   toCustomer(customer: IApiCustomer): ICustomer | undefined {
//     return !customer? undefined : {
//       id: customer.id,
//       customerId: customer.customerId,
//       firstName: customer.firstname,
//       surname: customer.lastname,
//       email: customer.email,
//       affiliateCountry: customer.affiliateCountry,
//       msisdn: customer.mobileNo,
//       bvn: customer.bvn,
//       accounts: !customer.accounts ? [] : customer.accounts.map(a => this.toAccount(a)),
//       accountAlias: !customer.accounts ? undefined : customer.accounts[0].accountAlias,
//       accountNumber: !customer.accounts ? undefined : customer.accounts[0].accountNumber
//     };
//   }

//   toApiCustomer(customer: ICustomer): IApiCustomer {
//     return {
//       id: customer.id,
//       customerId: customer.customerId,
//       firstname: customer.firstName,
//       lastname: customer.surname,
//       email: customer.email,
//       affiliateCountry: customer.affiliateCountry,
//       mobileNo: customer.msisdn,
//       bvn: customer.bvn,
//       accounts: !customer.accounts ? [] : customer.accounts.map(a => this.toAccount(a))
//     };
//   }

//   toCustomerApprovalItem(item: IApiCustomerApprovalItem): ICustomerApprovalItem{
//     return {
//       id:item.id,
//       encryptedRequest:item.encryptedRequestPayload,
//       encryptedResponse:item.encryptedResponsePayload,
//       activity:item.activity as CustomerActivity,
//       maker:item.maker,
//       makerDate: item.makerDate? new Date(item.makerDate):undefined,
//       checker:item.checker,
//       checkerDate:item.checkerDate?new Date(item.checkerDate):undefined,
//       status:item.authStat as CustomerApprovalStatus,
//       customer:this.toCustomer(item.mobileProfile!)
//     };
//   }

//   toPaginatedCustomerApprovalItem(pageItem:IPaginated<IApiCustomerApprovalItem>):IPaginated<ICustomerApprovalItem>{
//     return{
//       pageNo:pageItem.pageNo,
//       pageSize:pageItem.pageSize,
//       totalItemCount:pageItem.totalItemCount,
//       content: pageItem.content?.map(i=> this.toCustomerApprovalItem(i))
//     };
//   }

//   textToBase64(text: string) {
//     return btoa(text);
//   }

//   base64ToText(base64: string) {
//     try {
//       return atob(base64);
//     } catch {
//       return '';
//     }
//   }
//   // private methods


// }
