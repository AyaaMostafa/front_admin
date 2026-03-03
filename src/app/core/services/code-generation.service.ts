import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface CodeGenerationRequest {
    codeTypeId: number;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    externalSystem: string;
    externalReferenceId: string;
}

export interface CodeItem {
    id: number;
    codeTypeId: number;
    codeTypeCode: string;
    codeTypeNameEn: string;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    codeGenerated: string;
    status: string;
    externalSystem: string;
    externalReferenceId: string;
    createdBy: string;
    createdAt: string;
    approvedAt: string | null;
    approvedBy: string | null;
}

export interface CodeGenerationResponse {
    statusCode: number;
    message: string;
    data: CodeItem;
}

export interface CodesListResponse {
    statusCode: number;
    message: string;
    data: CodeItem[];
}

@Injectable({
    providedIn: 'root'
})
export class CodeGenerationService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    generateCode(data: CodeGenerationRequest): Observable<CodeGenerationResponse> {
        return this.http.post<CodeGenerationResponse>(
            `${this.apiUrl}/Codes`,
            data
        );
    }

    getAllCodes(): Observable<CodesListResponse> {
        return this.http.get<CodesListResponse>(
            `${this.apiUrl}/Codes`
        );
    }
}
