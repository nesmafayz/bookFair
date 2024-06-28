import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IBook } from '../../../models/ibook';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: IBook[];
  customOptions: OwlOptions = {};

  constructor(private router :Router) {



    

    this.books= [
      {
       "bookName": "في قلبي أنثى عبرية",
       "authorName": "خولة حمدي",
       "price": {
         "beforeOffer": "275.00 ج.م",
         "afterOffer": "247.50 ج.م"
       },
       "hall": 1,
       "block": "A29",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/في-قلبي-أنثى-عبرية-كيان-للنشر-و-التوزيع-بيت-الكتب.jpg",
       "publishingYear": "2015",
       "publisher": " كيان للنشر والتوزيع",
    
       "category": "أدب عربي, دراما"
     },
     {
       "bookName": "أرني انظر اليك",
       "authorName": "خولة حمدي",
       "price": {
         "beforeOffer": "300.00 ج.م",
         "afterOffer": "270.00 ج.م"
       },
       "hall": 1,
       "block": "A29",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/ارني-انظر-اليك-كيان-للنشر-و-التوزيع-بيت-الكتب.jpg",
       "publishingYear": "2020",
       "publisher": " كيان للنشر والتوزيع",
    
       "category": "أدب عربي, دراما"
     },
     {
       "bookName": "يوتوبيا",
       "authorName": "أحمد خالد توفيق",
       "price": {
         "beforeOffer": "155.00 ج.م",
         "afterOffer": "139.50 ج.م"
       },
       "hall": 1,
       "block": "A29",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/يوتوبيا-دار-الشروق-بيت-الكتب.jpg",
       "publishingYear": "2008",
       "publisher": " كيان للنشر والتوزيع",
    
       "category": "أدب عربي, دراما"
     },
     {
       "bookName": "سر الغرفة 207 ",
       "authorName": "أحمد خالد توفيق",
       "price": {
         "beforeOffer": "170.00 ج.م",
         "afterOffer": "153.00 ج.م"
       },
       "hall": 1,
       "block": "A29",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/سر-الغرفة-207-غلاف-شاهد-كيان-للنشر-و-التوزيع-بيت-الكتب.jpg",
       "publishingYear": "2022",
       "publisher": " كيان للنشر والتوزيع",
    
       "category": "أدب عربي, تشويق"
     },
     {
       "bookName": "أرض زيكولا",
       "authorName": "عمرو عبد الحميد",
       "price": {
         "beforeOffer": "225.00 ج.م",
         "afterOffer": "202.50 ج.م"
       },
       "hall": 1,
       "block": "B41",
       "publishingYear": "2016",
       "publisher": "عصير الكتب للنشر",
    
       "category": "أدب عربي, تشويق",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/أرض-زيكولا-عصير-الكتب-للنشر-بيت-الكتب.jpg"
     },
     {
       "bookName": "فتاة الياقة الزرقاء",
       "authorName": "عمرو عبد الحميد",
       "price": {
         "beforeOffer": "225.00 ج.م",
         "afterOffer": "202.50 ج.م"
       },
       "hall": 1,
       "block": "B41",
       "publishingYear": " 2021",
       "publisher": "عصير الكتب للنشر",
    
       "category": "أدب عربي, تشويق",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/فتاة-الياقة-الزرقاء-عصير-الكتب-للنشر-بيت-الكتب.jpg"
     },
     {
       "bookName": "انتيخريستوس",
       "authorName": "احمد خالد مصطفي",
       "price": {
         "beforeOffer": "225.00 ج.م",
         "afterOffer": "202.50 ج.م"
       },
       "hall": 1,
       "block": "B41",
       "publishingYear": " 2015",
       "publisher": "عصير الكتب للنشر",
       "category": "أدب عربي, أدب عربي, تشويق, روايات رعب",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/انتيخريستوس-عصير-الكتب-للنشر-بيت-الكتب.jpg"
     },
     {
       "bookName": "الفيل الأزرق",
       "authorName": "أحمد مراد",
       "price": {
         "beforeOffer": "170.00 ج.م",
         "afterOffer": "153.00 ج.م"
       },
       "hall": 1,
       "block": "B19",
       "publisher": "دار الشروق",
       "publishingYear": " 2012",
       "category": "تشويق",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/الفيل-الأزرق-دار-الشروق-بيت-الكتب.jpg"
     },
     {
       "bookName": "بالطو و فانلة و تاب",
       "authorName": "أحمد عاطف",
       "price": {
           "beforeOffer": "130.00 ج.م",
           "afterOffer": "117.00 ج.م"
       },
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/بالطو-و-فانلة-و-تاب-السراج-للنشر-و-التوزيع-بيت-الكتب.jpg",
       "publisher": "السراج للنشر و التوزيع",
       "category": "أدب عربي, أدب ساخر",
       "hall": 1,
       "block": "C43",
       "publishingYear": "2016"
     },
     {
       "bookName": "المنتصف المميت",
       "authorName": "سلوان البري",
       "price": {
         "beforeOffer": "100.00 ج.م",
         "afterOffer": "65.00 ج.م"
       },
       "hall": 2,
       "block": "B45",
       "publisher": "دار نيسان للنشر و التوزيع",
       "publishingYear": " 2024",
       "category": "تشويق",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/المنتصف-المميت-دار-نيسان-للنشر-و-التوزيع-بيت-الكتب.jpg"
     },
     {
       "bookName": "لوكاندة بير الوطاويط",
       "authorName": "أحمد مراد",
       "price": {
         "beforeOffer": "210.00 ج.م",
         "afterOffer": "189.00 ج.م"
       },
       "hall": 1,
       "block": "B19",
       "publisher": "دار الشروق",
       "publishingYear": " 2021",
       "category": "تشويق",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/لوكاندة-بير-الوطاويط-دار-الشروق-بيت-الكتب.jpg"
     },
     
     {
       "bookName": "منزل ابو خطوة - ليلة فى جهنم",
       "authorName": "حسن الجندي",
       "price": {
         "beforeOffer": "130.00 ج.م",
         "afterOffer": "117.00 ج.م"
       },
       "hall": 1,
       "block": "B11",
       "publisher": "دارك للنشر والتوزيع",
       "publishingYear": "2017",
       "category": "أدب عربي, روايات رعب",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/منزل-ابو-خطوة-ليلة-فى-جهنم-دارك-للنشر-والتوزيع-بيت-الكتب.jpg"
     },
     {
       "bookName": "الجزار",
       "authorName": "حسن الجندي",
       "price": {
         "beforeOffer": "130.00 ج.م",
         "afterOffer": "117.00 ج.م"
       },
       "hall": 1,
       "block": "B11",
       "publisher": "دارك للنشر والتوزيع",
       "publishingYear": "2021",
       "category": "أدب عربي, روايات رعب",
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/الجزار-دارك-للنشر-والتوزيع-بيت-الكتب.jpg"
     },
     
     {
       "bookName": "السادس أحمر",
       "authorName": "أحمد خيري العمري",
       "price": {
           "beforeOffer": "375.00 ج.م",
           "afterOffer": "337.50 ج.م"
       },
       "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/السادس-أحمر-عصير-الكتب-للنشر-بيت-الكتب.jpg",
       "publishingYear": "2024",
       "publisher": "عصير الكتب للنشر",
       "category": "أدب عربي, دراما",
       "hall": 1,
       "block": "B41"
    },
    {
     "bookName": "مملكة البلاغة1 : إيكادولي",
     "authorName": "حنان لاشين",
     "price": {
         "beforeOffer": "225.00 ج.م",
         "afterOffer": "202.50 ج.م"
     },
     "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/ايكادولي-عصير-الكتب-للنشر-بيت-الكتب.jpg",
     "publishingYear": "2017",
     "publisher": "عصير الكتب للنشر", 
     "category": "أدب عربي, دراما",
     "hall": 1,
     "block": "B41"
    },
    {
     "bookName": "هيبتا",
     "authorName": "محمد صادق",
     "price": {
       "beforeOffer": "115.00 ج.م",
       "afterOffer": "103.50 ج.م"
     },
     "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/هيبتا-الرواق-للنشر-والتوزيع-بيت-الكتب.jpg",
     "publishingYear": "2016",
     "publisher": "الرواق للنشر و التوزيع",
     "category": "أدب عربي, روايات رومانسية, دراما",
     "hall": 2,
     "block": "C6"
    },
    {
     "bookName": "إذما",
     "authorName": "محمد صادق",
     "price": {
       "beforeOffer": "175.00 ج.م",
       "afterOffer": "157.50 ج.م"
     },
     "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/إذما-الرواق-للنشر-والتوزيع-بيت-الكتب.jpg",
     "publishingYear": "2020",
     "publisher": "الرواق للنشر و التوزيع",
     "category": "أدب عربي, روايات رومانسية, دراما",
     "hall": 2,
     "block": "C6"
    },
    {
     "bookName": "في ممر الفئران",
     "authorName": "أحمد خالد توفيق",
     "price": {
       "beforeOffer": "180.00 ج.م",
       "afterOffer": "162.00 ج.م"
     },
     "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/في-ممر-الفئران-دار-الكرمة-للنشر-بيت-الكتب.jpg",
     "publishingYear": "2016",
     "publisher": "دار الكرمة للنشر",
     "category": "أدب عربي, دراما, تشويق",
     "hall": 1,
     "block": "لآ22"
    
    }
    
    ]
  }

  ngOnInit(): void {
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['←', '→'],
      responsive: {
        0: {
          items: 1,
        },
        556: {
          items: 3,
        },
        768: {
          items: 4,
        },
        991: {
          items: 6,
        },
      },
      nav: true,
    };

  }
  
  navigateToBooking(){
    this.router.navigate(['/bookingTicket']);
  }
}