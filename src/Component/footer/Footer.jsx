import './Footer.css'


const Footer = () => {

    return (
        <div>
            <footer class="footer" >
                <div class="container">
                    <div class="footer-section">
                        <h2> <img src="/images/logo.svg" alt="" /></h2>
                        <ul>
                            <li>أدق قاعدة بيانات لعقارات مصر في كل المناطق  </li>
                            <li>معلومات حقيقية بأسعار السوق</li>
                            <li>صور موثوقة ومخططات واضحة</li>
                            <li>فلترة ذكية حسب ميزانيتك واحتياجاتك</li>
                            <li>دعم مباشر وخدمة عملاء تساعدك في كل خطوة
                            </li>

                        </ul>
                    </div>

                    <div class="footer-section">
                        <h2>روابط سريعة</h2>
                        <ul>
                            <li><a href="#home">الرئيسية</a></li>
                            <li><a href="#">من نحن</a></li>
                            <li><a href="#">الخدمات</a></li>
                            <li><a href="#">تواصل معنا</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h2>تابعنا</h2>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    &copy; <span id="year"></span> جميع الحقوق محفوظة لـ عبد الرحمن أحمد
                </div>
            </footer>

        </div>
    )
}

export default Footer
