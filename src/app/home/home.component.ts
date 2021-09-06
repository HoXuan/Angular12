import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public Name: string = "Xuân";
  public Age: number = 25;
  public TraiCay: string[] = ['Táo', 'Nho', 'Cam'];
  public TraiCay2 = [{ Ten: 'Táo', Gia: -12.356, HaGia: true }, { Ten: 'Nho', Gia: 15.122, HaGia: false }, { Ten: 'Cam', Gia: 18, HaGia: true }];

  public Cities = [
    { City: 'Chọn thành phố', District: []},
    { City: 'An Giang', District: ["Thành phố Long Xuyên", "Thành phố Châu Đốc", "Thị xã Tân Châu", "Huyện An Phú", "Huyện Châu Phú", "Huyện Châu Thành", "Huyện Chợ Mới", "Huyện Phú Tân", "Huyện Thoại Sơn", "Huyện Tịnh Biên", "Huyện Tri Tôn"] },
    { City: 'Bà Rịa Vũng Tàu', District: ["Thành phố Vũng Tàu", "Thị xã Bà Rịa", "Thị xã Phú Mỹ", "Huyện Châu Đức", "Huyện Côn Đảo", "Huyện Đất Đỏ", "Huyện Long Điền", "Huyện Tân Thành", "Huyện Xuyên Mộc"] },
    { City: 'Bạc Liêu', District: ["Thành phố Bạc Liêu", "Huyện Đông Hải", "Huyện Giá Rai", "Huyện Hòa Bình", "Huyện Hồng Dân", "Huyện Phước Long", "Huyện Vĩnh Lợi"] }
  ];

  public Districts: string[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('Trái cây = ', this.Cities);
  }

  public resetName(): void {
    console.log('reset name');
  }

  public changeCity(event: any): void {
    const city = event.target.value;
    if (!city) return;
    //c1
    /*const search = this.Cities.filter(data => data.City === city);
    console.log('City: ', search);
    if (search && search.length > 0){
      this.Districts = search[0].District;
    }*/
    //c2
    this.Districts = this.Cities.find(data => data.City === city)?.District || [];
  }
}
