import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface CodeTypeItem {
    id: number;
    codeTypeCode: string;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    isActive: boolean;
    createdAt: string;
    createdBy: string;
    approvedAt: string | null;
    approvedBy: string | null;
}

/** Body for POST /CodeTypes/Create */
export interface CodeTypeCreateRequest {
    codeTypeCode: string;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
}

/** Body for PUT /CodeTypes/Update?id= */
export interface CodeTypeUpdateRequest {
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    isActive: boolean;
}

export interface CodeTypeResponse {
    statusCode: number;
    message: string;
    data: CodeTypeItem;
}

export interface CodeTypeListResponse {
    statusCode: number;
    message: string;
    data: CodeTypeItem[];
}

// ─── Keep old name as alias so existing components don't break ────────────────
export type CodeTypeRequest = CodeTypeCreateRequest;

// ─── Service ─────────────────────────────────────────────────────────────────

@Injectable({
    providedIn: 'root'
})
export class CodeTypeService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    /** GET /CodeTypes/GetAll */
    getAllCodeTypes(): Observable<CodeTypeListResponse> {
        return this.http.get<CodeTypeListResponse>(
            `${this.apiUrl}/CodeTypes/GetAll`
        );
    }

    /** POST /CodeTypes/Create */
    createCodeType(data: CodeTypeCreateRequest): Observable<CodeTypeResponse> {
        return this.http.post<CodeTypeResponse>(
            `${this.apiUrl}/CodeTypes/Create`,
            data
        );
    }

    /** PUT /CodeTypes/Update?id={id} */
    updateCodeType(id: number, data: CodeTypeUpdateRequest): Observable<CodeTypeResponse> {
        return this.http.put<CodeTypeResponse>(
            `${this.apiUrl}/CodeTypes/Update?id=${id}`,
            data
        );
    }
}
