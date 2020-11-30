export class HostFields {

    Host: string = '';
    IP: string = '';
    OID: string = '';

    constructor(hostFormObj: any = {}) {
        if (hostFormObj.firstName !== undefined) {
            this.Host = hostFormObj.Host;
            this.IP = hostFormObj.IP;
            this.OID = hostFormObj.OID;
        }
    }
}