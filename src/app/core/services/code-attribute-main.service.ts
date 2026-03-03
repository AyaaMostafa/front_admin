import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface CodeAttributeMainItem {
    id: number;
    codeTypeId: number;
    code: string;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    codeAttributeTypeId: number;
    isActive: boolean;
    createdAt: string;
    createdBy: string;
}

export interface CodeAttributeMainRequest {
    codeTypeId: number;
    code: string;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    codeAttributeTypeId: number;
}

export interface CodeAttributeMainUpdateRequest {
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    isActive: boolean;
}

export interface CodeAttributeMainResponse {
    statusCode: number;
    message: string;
    data: CodeAttributeMainItem;
}

export interface CodeAttributeMainBulkResponse {
    statusCode: number;
    message: string;
    data: CodeAttributeMainItem[];
}

export interface CodeAttributeMainListResponse {
    statusCode: number;
    message: string;
    data: CodeAttributeMainItem[];
}

@Injectable({
    providedIn: 'root'
})
export class CodeAttributeMainService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    createCodeAttributeMain(data: CodeAttributeMainRequest): Observable<CodeAttributeMainResponse> {
        return this.http.post<CodeAttributeMainResponse>(
            `${this.apiUrl}/CodeAttributeMains/Create`,
            data
        );
    }

    createCodeAttributeMainsBulk(data: CodeAttributeMainRequest[]): Observable<CodeAttributeMainBulkResponse> {
        return this.http.post<CodeAttributeMainBulkResponse>(
            `${this.apiUrl}/CodeAttributeMains/CreateBulk`,
            data
        );
    }

    getAllCodeAttributeMains(): Observable<CodeAttributeMainListResponse> {
        return this.http.get<CodeAttributeMainListResponse>(
            `${this.apiUrl}/CodeAttributeMains/GetAll`
        );
    }

    updateCodeAttributeMain(id: number, data: CodeAttributeMainUpdateRequest): Observable<CodeAttributeMainResponse> {
        return this.http.put<CodeAttributeMainResponse>(
            `${this.apiUrl}/CodeAttributeMains/Update?id=${id}`,
            data
        );
    }
}
