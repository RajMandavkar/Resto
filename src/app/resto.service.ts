import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = "http://localhost:3000/restaurants"
  rooturl = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }
  getlist() {
    return this.http.get(this.url);
  }

  saveResto(data: object) {
    // console.warn(data);

    return this.http.post(this.url, data);
  }

  deleteResto(id: any) {
    return this.http.delete(this.url + '/' + id)
  }

  getCurrentResto(id: number) {
    //return this.http.get('${this.url}/${id}')
    return this.http.get(this.url + '/' + id)

  }

  updateResto(id: number, data: object) {

    return this.http.put(this.url+ '/' + id, data)

  }

  registerUser(data: any) {
    // this.http.post(this.rooturl + "users", data)/
    //return data;
    return this.http.post(this.rooturl,data);

  }

}

