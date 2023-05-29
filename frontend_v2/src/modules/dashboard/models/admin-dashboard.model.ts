//import { ApiAdminDashboard } from "src/api-services/models/api-admin-dashboard.model";

export class AdminDashboard {
    adminUserCount?: number;
    teamsCount?:number;
    myTeamsCount?:number;
    teamsLeadByCount?:number;

    constructor();
    constructor(adminUserCount?: number, teamsCount?:number, 
        myTeamsCount?:number, teamsLeadByCount?:number);
        constructor(adminUserCount?: number, teamsCount?:number, 
            myTeamsCount?:number, teamsLeadByCount?:number) {
        this.adminUserCount = adminUserCount;
        this.teamsCount = teamsCount;
        this.myTeamsCount=myTeamsCount;
        this.teamsLeadByCount=teamsLeadByCount;
    }

    // toApiAdminDashboard():ApiAdminDashboard{
    //     var dashboard = new ApiAdminDashboard(this.adminUserCount, this.teamsCount, this.myTeamsCount, this.teamsLeadByCount);
    //     return dashboard;
    // }

    // static fromApiAdminDashboard(obj:ApiAdminDashboard):AdminDashboard{
    //     var dashboard=  new AdminDashboard(obj.numOfAdminUsers, obj.numOfTeamsAdministeredByUser, obj.numOfTeamsForUser, obj.numOfTeamsLeadByUser);
    //     return dashboard;
    // }
}