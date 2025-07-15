import React, { useEffect } from 'react';
import './section.css'
import { Container } from 'react-bootstrap';
import AOS from 'aos';





const Section = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,  // مدة الحركة بالملي ثانية
      once: false,      // هل الحركة تظهر مرة واحدة بس ولا مع كل scroll
    });
  }, []);
  return (
    <section className='glass-circle'>
      <Container>

        <h2 className='text text-white text-center p-5' >لِمَاذا نَحنُ؟</h2>

        <div className='card-why-us  ' data-aos="fade-up">
          <div class="card-sec  mx-auto mb-5  " >
            <div class="card__border"></div>
            <div class="card_title__container">
              <h2 class="card_title text fs-4 pt-1">أَكثَرُ أَمانًا</h2>
              <hr class="line" />
            </div>

            <p className='text text-white text-end'>
              لأننا نؤمن بأن الأمان هو أساس الثقة، صمّمنا منصتنا بأعلى معايير الحماية لضمان سرية بياناتك وسلامة تعاملاتك.
              نستخدم تقنيات تشفير متقدمة، ونظام تحقق ثنائي (2FA)، ونراقب النشاطات بشكل دائم للكشف عن أي محاولة اختراق قبل حدوثها.
              بالإضافة إلى ذلك، نخضع لتحديثات أمنية دورية ونلتزم بأفضل الممارسات العالمية في حماية المعلومات.
              معنا، بياناتك في أيدٍ آمنة.
            </p>

          </div>
          <div class="card-sec  mx-auto mb-5 " >
            <div class="card__border"></div>
            <div class="card_title__container">
              <h2 class="card_title text fs-4 pt-1">أدقُّ بحثٍ عقاريٍّ في مصر</h2>
              <hr class="line" />
            </div>
            <p className='text text-white text-end'>  نقدم لك أدق بحث عقاري في مصر، مصمم خصيصًا ليوفر لك تجربة بحث سهلة وذكية.
              سواء كنت تبحث عن شقة، فيلا، مكتب، أو قطعة أرض، منصتنا تتيح لك فلترة دقيقة حسب الموقع، السعر، المساحة، والتفاصيل اللي تهمك فعلًا.
              بفضل قاعدة بيانات محدثة باستمرار وخوارزميات ذكية، بنساعدك تلاقي العقار المناسب في أقل وقت وبأعلى دقة.</p>


          </div>
          <div class="card-sec  mx-auto mb-5 " >
            <div class="card__border"></div>
            <div class="card_title__container">
              <h2 class="card_title text  fs-4 pt-1"> موثوقةٌ من آلافِ العملاء   </h2>
              <hr class="line" />
            </div>
            <p className='text text-white text-end'>
              منصتنا موثوقة من آلاف العملاء في جميع أنحاء مصر، واللي اعتمدوا علينا في العثور على عقارات أحلامهم بدقة وسهولة.
              ثقتهم فينا هي أكبر دليل على جودة خدماتنا ومصداقيتنا.
            </p>


          </div>

        </div>

      </Container>
      <hr />
      <hr />
    </section>


  )
}

export default Section
