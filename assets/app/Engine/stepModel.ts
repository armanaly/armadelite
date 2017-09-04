export class StepModel {
    constructor ( public step_id: number, public type: string, public name: string, public logo_url: string,
                  public configuration: any, public master_name: string, public master_type: string,
                  public conditions: Array<any>, public datas: Array<any>) {

    }
}