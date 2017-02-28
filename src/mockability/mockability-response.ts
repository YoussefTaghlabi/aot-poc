import { RequestMethod, Response } from '@angular/http';

export type ResponseFunction = () => Response;

export interface MockabilityResponse {
  method: RequestMethod;
  // url: RegExp | string;
  url: any;
  response: Response | ResponseFunction;
}

export type MockabilityResponses = MockabilityResponse[];
