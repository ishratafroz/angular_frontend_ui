import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Message {
  userId: string;
  username: string;
  content: string;
  time: string;
  image: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:5000/api/QnA/ask';

  constructor(private http: HttpClient) {}

  sendMessage(question: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, question);
  }

  Test(question: string): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/QnA/test', question);
  }
}
