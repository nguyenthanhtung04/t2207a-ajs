import{Component} from "@angular/core";

@Component({
  selector:'classroom',
  templateUrl: './classroom.component.html'
})
export class ClassroomComponent {
  className = 'T2207A - SEM 1';
  siso = 27;

  schoolName = 'FPT Academy International';

  themSinhVien() {
    this.siso++;
  }

  giamSinhVien() {
    if (this.siso > 0) {
      this.siso--;
    }
  }

  soBanGai = 1;

  themBanGai() {
    if (this.soBanGai < 6){
    this.soBanGai++;
  }
}
  giamBanGai() {
    if (this.soBanGai > 0) {
      this.soBanGai--;
    }
  }
}
