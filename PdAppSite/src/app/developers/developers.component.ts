import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  developers;
  constructor() { }

  ngOnInit(): void {
    this.developers= [
      {
        FIO:"Петров Д.В.",
        GroupNum:"171-334",
        Role:"Team leader, методические материалы, визуализация",
        Contact:"	https://github.com/DanielPetrow"
    },
    {
      FIO:"Миронов А.Ю.",
      GroupNum:"171-334",
      Role:"Методические материалы, визуализация",
      Contact:"https://github.com/TheDycik"
  },
  {
    FIO:"Пугачева Е.О.",
    GroupNum:"171-334",
    Role:"Методические материалы, визуализация",
    Contact:"https://github.com/Nlalalay"
},
{
  FIO:"Мова В.М.",
  GroupNum:"171-334",
  Role:"Методические материалы, визуализация",
  Contact:"https://github.com/Sabakana"
},
{
  FIO:"Чулкин Д.С.",
  GroupNum:"171-334",
  Role:"Разработчик сайта для проектной деятельности",
  Contact:"https://github.com/Bydmak"
},
{
  FIO:"Яранцев В.А.",
  GroupNum:"171-334",
  Role:"Разработчик сайта для проектной деятельности, full stack разработчик",
  Contact:"https://github.com/iconini13ya"
},
{
  FIO:"Муравьёв А.Г.",
  GroupNum:"191-325",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:"https://github.com/D4vvon"
},
{
  FIO:"Соловьева Е.А.",
  GroupNum:"191-324",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:"https://github.com/EujeSol"
},
{
  FIO:"Евтухов В.Д.",
  GroupNum:"191-323",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:"https://github.com/VladEvtuhov191"
},
{
  FIO:"Платонов Д.А.",
  GroupNum:"191-323",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:"https://github.com/M4rtlon"
},
{
  FIO:"Иванов А.А.",
  GroupNum:"191-323",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:""
},
{
  FIO:"Андреев Р.А.",
  GroupNum:"191-325",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:"	https://github.com/andreevrustem"
},
{
  FIO:"Балобанов А.А.",
  GroupNum:"191-323",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:"https://github.com/alexalexdoc"
},
{
  FIO:"Рахметов Р.Р.",
  GroupNum:"181-325",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:"https://github.com/Dustate"
},
{
  FIO:"Петренко А.А.",
  GroupNum:"181-325",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:"https://github.com/PierSent"
},
{
  FIO:"Толстых С.С.",
  GroupNum:"181-325",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:"https://github.com/StepanTolstyh"
},
{
  FIO:"Терешин Н.",
  GroupNum:"181-325",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:""
},
{
  FIO:"Смирнова М.В.",
  GroupNum:"191-324",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:"	https://github.com/MbllllbMidori"
},
{
  FIO:"	Аюпов С.А.",
  GroupNum:"191-323",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:""
},
{
  FIO:"Усвяцов А.Д.",
  GroupNum:"191-325",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:""
},
{
  FIO:"Соболевский В.Д.",
  GroupNum:"191-324",
  Role:"Помощники по программному продукту Maya 3D, Bifrost",
  Contact:""
}

    ]
  }


}
