export class UserFields {

    Host: string = '';
    IP: string = '';
    OID: string = '';

    constructor(userFormObj: any = {}) {
        if (userFormObj.firstName !== undefined) {
            this.Host = userFormObj.Host;
            this.IP = userFormObj.IP;
            this.OID = userFormObj.OID;
        }
    }
}