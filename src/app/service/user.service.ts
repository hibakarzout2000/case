import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl ='http://127.0.0.1:8080/CaseTools-0.0.1-SNAPSHOT/rest/case'


  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    const url = `${this.baseUrl}/userlist`;
    return this.http.get<any>(url);
  }

  deleteUser(id:any) {
   
   
  
    return this.http.delete<any>(`${this.baseUrl}/deleteuser/${id}` );
  }

  addUser(user:any){
    return this.http.post(`${this.baseUrl}/add`,user);
  }

  public editUser(id:any,user:any){
    return this.http.put(`${this.baseUrl}/edituser/${id}`,user);
  }

  assignAlertUser(alerts:any){
    return this.http.post(`${this.baseUrl}/assignAlertUser`,alerts);
  }


}
