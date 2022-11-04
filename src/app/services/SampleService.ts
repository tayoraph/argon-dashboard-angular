import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseHttpService } from "../utils/shared/BaseHttp/base-http.service";
import { Constants } from "../utils/shared/constants/constants";

@Injectable()
export class SampleService {

    constructor(public httpClient: HttpClient,
      
        ) {
    //   super()
     }
}