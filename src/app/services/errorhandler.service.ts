import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        if(error instanceof HttpErrorResponse) {
            console.log(error);
        }
        
    }
}