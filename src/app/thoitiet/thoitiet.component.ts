import {Component, Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:'thoitiet',
  templateUrl: './thoitiet.component.html'
})
export class ThoitietComponent {
  city: string ='Hanoi'
  temp: number = 31;
  hump: number = 70;
  press: number = 1000;
  constructor(private http: HttpClient) {
  }
  ngOnInit(){ // hàm này tự động chy sau khi in ra html
    this.hanoi();
  }

  hanoi(){
    // lay thong tin thoi tiet ha noi
    const url ='https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric&fbclid=IwAR1wt62bdBxLXYutQ-h3_tCOu6CEMnwj1A6d279p98wbCavl3Mnv-pOpwWo'
    this.http.get<any>(url)
       .subscribe(data=>{
         this.temp = data.main.temp;
         this.hump = data.main.humidity;
         this.hump = data.main.pressure;
         this.city = data.name +","+ data.sys.country;
    })
  }
}
