import { ApodInterface } from './apod.interface';

export class Apod implements ApodInterface {
  public explanation: string = '';
  public copyright: string = '';
  public media_type: string = '';
  public service_version: string = '';
  public date: string = '';
  public hdurl: string = '';
  public url: string = '';
  public title: string = '';
}
