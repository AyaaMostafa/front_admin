import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface CodeAttributeTypeItem {
    id: number;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    isActive: boolean;
    createdAt: string;
    createdBy: string;
}

export interface CodeAttributeTypeRequest {
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
}

export interface CodeAttributeTypeUpdateRequest {
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    isActive: boolean;
}

export interface CodeAttributeTypeResponse {
    statusCode: number;
    message: string;
    data: CodeAttributeTypeItem;
}

export interface CodeAttributeTypeListResponse {
    statusCode: number;
    message: string;
    data: CodeAttributeTypeItem[];
}

@Injectable({
    providedIn: 'root'
})
export class CodeAttributeTypeService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    createCodeAttributeType(data: CodeAttributeTypeRequest): Observable<CodeAttributeTypeResponse> {
        return this.http.post<CodeAttributeTypeResponse>(
            `${this.apiUrl}/CodeAttributeTypes/Create`,
            data
        );
    }

    getAllCodeAttributeTypes(): Observable<CodeAttributeTypeListResponse> {
        return this.http.get<CodeAttributeTypeListResponse>(
            `${this.apiUrl}/CodeAttributeTypes/GetAll`
        );
    }

    updateCodeAttributeType(id: number, data: CodeAttributeTypeUpdateRequest): Observable<CodeAttributeTypeResponse> {
        return this.http.put<CodeAttributeTypeResponse>(
            `${this.apiUrl}/CodeAttributeTypes/Update?id=${id}`,
            data
        );
    }
}
