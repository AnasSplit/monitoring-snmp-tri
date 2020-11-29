import { MonitoringComponent } from './../monitoring/monitoring.component';

export class Monitoring {
  constructor(
    public today = new Date(),
    public time: any,
    public choixDate: string,
    public choixEquipement: string,
    public selected: any,
    public choixDateSelectionnee: any,
  ) { }
}
