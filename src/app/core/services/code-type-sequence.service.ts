import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface CodeTypeSequenceRequest {
    nameEn: string;
    codeTypeId: number;
    startWith: number;
    minValue: number;
    maxValue: number;
    cycling: number;
}

export interface CodeTypeSequenceData {
    id: number;
    nameEn: string;
    codeTypeId: number;
    startWith: number;
    minValue: number;
    maxValue: number;
    currentValue: number;
    cycling: number;
    createdAt: string;
}

export interface CodeTypeSequenceResponse {
    statusCode: number;
    message: string;
    data: CodeTypeSequenceData;
}

@Injectable({
    providedIn: 'root'
})
export class CodeTypeSequenceService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    createCodeTypeSequence(data: CodeTypeSequenceRequest): Observable<CodeTypeSequenceResponse> {
        return this.http.post<CodeTypeSequenceResponse>(
            `${this.apiUrl}/CodeTypeSequences/Create`,
            data
        );
    }
}
