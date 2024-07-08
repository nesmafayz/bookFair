import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-reviews-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-reviews-all.component.html',
  styleUrls: ['./book-reviews-all.component.css']
})
export class BookReviewsAllComponent {
  reviews: any[] = [
    {
      username: 'محمد',
      timeAgo: 'قبل 5 دقائق',
      title: 'أرض زيكولا',
      description: 'رواية رائعة تأخذك إلى عالم مختلف تماماً. أنصح الجميع بقراءتها!',
      imageUrl: 'https://www.workitdaily.com/media-library/professional-man-creating-an-outstanding-personal-branding-statement.jpg?id=22025730&width=1200&height=600&coordinates=0%2C23%2C0%2C24'
    },
    {
      username: 'أحمد',
      timeAgo: 'قبل ساعة',
      title: 'أرني أنظر إليك',
      description: 'الكتاب مشوق ويجعل القارئ يتفكر في معاني الحياة. أحببته جداً.',
      imageUrl: 'https://example.com/image2.jpg'
    },
    {
      username: 'ليلى',
      timeAgo: 'قبل 3 ساعات',
      title: 'يوتوبيا',
      description: 'الكتاب لم يكن كما توقعت، بعض الأجزاء كانت مملة قليلاً.',
      imageUrl: 'https://example.com/image3.jpg'
    },
    {
      username: 'سارة',
      timeAgo: 'قبل يوم',
      title: 'الفيل الأزرق',
      description: 'كتاب لا بد من قراءته لعشاق الأدب المصري. رائع بكل المقاييس!',
      imageUrl: 'https://example.com/image4.jpg'
    },
    {
      username: 'يوسف',
      timeAgo: 'قبل يومين',
      title: 'سر الغرفة 207',
      description: 'كتاب مليء بالإثارة والغموض. أحببت كيف تم تطوير القصة.',
      imageUrl: 'https://example.com/image5.jpg'
    }
  
  ];
}
