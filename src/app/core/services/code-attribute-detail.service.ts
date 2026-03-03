import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface CodeAttributeDetailItem {
    id: number;
    code: string;
    attributeMainId: number;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    parentDetailId: number | null;
    sortOrder?: number;
    isActive: boolean;
    createdAt: string;
    createdBy: string;
}

export interface CodeAttributeDetailRequest {
    code: string;
    attributeMainId: number;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    parentDetailId?: number;
    sortOrder: number;
}

export interface CodeAttributeDetailUpdateRequest {
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    isActive: boolean;
}

export interface CodeAttributeDetailResponse {
    statusCode: number;
    message: string;
    data: CodeAttributeDetailItem;
}

export interface CodeAttributeDetailListResponse {
    statusCode: number;
    message: string;
    data: CodeAttributeDetailItem[];
}

export interface CodeAttributeDetailBulkResponse {
    statusCode: number;
    message: string;
    data: CodeAttributeDetailItem[];
}

@Injectable({
    providedIn: 'root'
})
export class CodeAttributeDetailService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    createCodeAttributeDetail(data: CodeAttributeDetailRequest): Observable<CodeAttributeDetailResponse> {
        return this.http.post<CodeAttributeDetailResponse>(
            `${this.apiUrl}/CodeAttributeDetails/Create`,
            data
        );
    }

    getAllCodeAttributeDetails(): Observable<CodeAttributeDetailListResponse> {
        return this.http.get<CodeAttributeDetailListResponse>(
            `${this.apiUrl}/CodeAttributeDetails/GetAll`
        );
    }

    createCodeAttributeDetailsBulk(data: CodeAttributeDetailRequest[]): Observable<CodeAttributeDetailBulkResponse> {
        return this.http.post<CodeAttributeDetailBulkResponse>(
            `${this.apiUrl}/CodeAttributeDetails/CreateBulk`,
            data
        );
    }

    updateCodeAttributeDetail(id: number, data: CodeAttributeDetailUpdateRequest): Observable<CodeAttributeDetailResponse> {
        return this.http.put<CodeAttributeDetailResponse>(
            `${this.apiUrl}/CodeAttributeDetails/Update?id=${id}`,
            data
        );
    }
}
