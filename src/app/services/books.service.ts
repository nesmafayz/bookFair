import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BooksService {



  private books = [
    {
      "id":1,
        "bookName": "في قلبي أنثى عبرية",
        "authorName": "خولة حمدي",
        "hall": 1,
        "block": "A29",
        "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/في-قلبي-أنثى-عبرية-كيان-للنشر-و-التوزيع-بيت-الكتب.jpg",
        "publishingYear": "2015",
        "pages": "388",
        "category": "أدب عربي, دراما",
        "soundBook":"https://www.storytel.com/eg/books/في-قلبي-أنثى-عبرية-996135"
      },
      {
        "id":2,
        "bookName": "أرني انظر اليك",
        "authorName": "خولة حمدي",
        "hall": 1,
        "block": "A29",
        "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/ارني-انظر-اليك-كيان-للنشر-و-التوزيع-بيت-الكتب.jpg",
        "publishingYear": "2020",
        "pages": "430",
        "category": "أدب عربي, دراما",
        "soundBook":"https://www.storytel.com/eg/books/أرني-أنظر-إليك-2642122"
      },
{
  "id":3,
    "bookName": "يوتوبيا",
    "authorName": "أحمد خالد توفيق",
    "hall": 1,
    "block": "A29",
    "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/يوتوبيا-دار-الشروق-بيت-الكتب.jpg",
    "publishingYear": "2008",
    "pages": "غير محدد",
    "category": "أدب عربي, دراما",
    "soundBook":"https://www.storytel.com/eg/books/يوتوبيا-483517"
  },
  {
    "id":4,
    "bookName": "سر الغرفة 207 ",
    "authorName": "أحمد خالد توفيق",
    "hall": 1,
    "block": "A29",
    "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/سر-الغرفة-207-غلاف-شاهد-كيان-للنشر-و-التوزيع-بيت-الكتب.jpg",
    "publishingYear": "2022",
    "pages": "220",
    "category": "أدب عربي, تشويق",
    "soundBook":"https://www.storytel.com/eg/books/سر-الغرفة-1026114"
  },
  {
    "id":5,
    "bookName": "أرض زيكولا",
    "authorName": "عمرو عبد الحميد",
    "hall": 1,
    "block": "B41",
    "publishingYear": "2016",
    "pages": "غير محدد",
    "category": "أدب عربي, تشويق",
    "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/أرض-زيكولا-عصير-الكتب-للنشر-بيت-الكتب.jpg",
    "soundBook":"https://www.storytel.com/eg/books/أرض-زيكولا-1025491"
  },
  {
    "id":6,
    "bookName": " دقات الشامو ",
    "authorName": "عمرو عبد الحميد",
    "hall": 1,
    "block": "B41",
    "publishingYear": " 2019",
    "pages": "320",
    
    "category": "أدب عربي, تشويق",
    "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/دقات-الشامو-عصير-الكتب-للنشر-بيت-الكتب.jpg",
    "soundBook":"https://www.storytel.com/eg/books/دقات-الشامو-566078"
  },
  {
    "id":7,
    "bookName": "انتيخريستوس",
    "authorName": "احمد خالد مصطفي",
    "hall": 1,
    "block": "B41",
    "publishingYear": " 2015",
    "publisher": "عصير الكتب للنشر",
    "category": "أدب عربي, أدب عربي, تشويق, روايات رعب",
    "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/انتيخريستوس-عصير-الكتب-للنشر-بيت-الكتب.jpg",
    "soundBook":"https://www.storytel.com/eg/books/أنتيخريستوس-2-1350180"
  },
  {
    "id":8,
    "bookName": "الفيل الأزرق",
    "authorName": "أحمد مراد",
    "hall": 1,
    "block": "B19",
    "publisher": "دار الشروق",
    "publishingYear": " 2012",
    "category":"تشويق",
    "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/الفيل-الأزرق-دار-الشروق-بيت-الكتب.jpg",
    "soundBook":"https://www.storytel.com/eg/books/الفيل-الأزرق-556867"
  }
  ,
  {
    "id":9,
    "bookName": "المنتصف المميت",
    "authorName": "سلوان البري",
    "hall": 2,
    "block": "B45",
    "publisher": "دار نيسان للنشر و التوزيع",
    "publishingYear": " 2024",
    "category": "تشويق",
    "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/المنتصف-المميت-دار-نيسان-للنشر-و-التوزيع-بيت-الكتب.jpg",
    "soundBook":"not exist"
},

  {
    "id":10,
    "bookName": "الجزار",
    "authorName": "حسن الجندي",
    "hall": 1,
    "block": "B11",
    "publisher": "دارك للنشر والتوزيع",
    "publishingYear": "2021",
    "category": "أدب عربي, روايات رعب",
    "imgUrl": "https://admin.thebookhome.com/ControlPanel/Content/BookImgs/الجزار-دارك-للنشر-والتوزيع-بيت-الكتب.jpg",
    "soundBook":"https://www.storytel.com/eg/books/الجزار-1393691"
}
]


  constructor(private http:HttpClient) { 

  }


  getBooks()
  {
     return this.books;
  }
}






// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment.development';
// import { Observable } from 'rxjs';



// @Injectable({
//   providedIn: 'root'
// })
// export class BooksService {

//   constructor(private http:HttpClient) {}

//   getBooksList(pageNo:number,pageSize:number):Observable<any>{
//   return  this.http.get<any>(`${environment.baseUrl}api/Book/Paginated?pageNo=${pageNo}&pagesize=${pageSize}`);
//   }
// }
