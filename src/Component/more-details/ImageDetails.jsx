import { useLocation, useNavigate } from 'react-router-dom';
import Navy from '../Navbary/Navy';
import './ImageDetails.css';
import Footer from '../footer/Footer';

const ImageDetails = () => {
    const navigate = useNavigate();

    const Handlebook = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.isLoggedIn) {
            navigate('/formbook'); // صفحة الحجز
        } else {
            navigate('/register'); // صفحة التسجيل
        }
    };

    const { state } = useLocation();

    if (!state) return <p className='fs-1 text text-center p-5 mt-5'>لا يوجد بيانات </p>;

    const { title, price, location, image } = state;

    return (
        <>
            <Navy />
            <div className='pt-5 pb-5'>
                <div className="container details pt-2 ">
                    <div className='img-parent rounded-5 pt-2 pb-4'>
                        <img src={image} alt={title} />
                    </div>
                    <div data-aos="fade-right" className='text-end '>
                        <h3 className='title text-white'>{title}</h3>
                        <p className='desc'>  {price}</p>
                        <p className='desc'> {location}</p>
                        <button className='btn bg-black fs-5 book' onClick={Handlebook}>احجز الآن</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ImageDetails;
