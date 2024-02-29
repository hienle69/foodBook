import React, { useEffect } from 'react';
import './main.css';
import { CiLocationOn } from "react-icons/ci";
import { LuClipboardCheck } from "react-icons/lu";

import img from '../../Assets/travel-scenery-img.jpg';
import img1 from '../../Assets/travel-scenery-img(1).jpg';
import img2 from '../../Assets/travel-scenery-img(2).jpg';
import img3 from '../../Assets/travel-scenery-img(3).jpg';
import img4 from '../../Assets/travel-scenery-img(4).jpg';
import img5 from '../../Assets/travel-scenery-img(5).jpg';
import img6 from '../../Assets/travel-scenery-img(6).jpg';
import img7 from '../../Assets/travel-scenery-img(7).jpg';
import img8 from '../../Assets/travel-scenery-img(8).jpg';
import img9 from '../../Assets/travel-scenery-img(9).jpg';

import Aos from "aos";
import 'aos/dist/aos.css'

// travel data
const  dataTravel = [

            {
                id: 1,
                imgSrc: img,
                desTitle: "Du lịch thiên nhiên Tây Bắc",
                location: "Vietnam",
                grade: "Thư giãn giữa thiên nhiên",
                fees: "$500",
                description: "Ngược dòng Mê Kông trải nghiệm cuộc sống độc đáo của người dân đôi bờ cùng với những chuyến du ngoạn trên bờ đầy hấp dẫn, hứa hẹn đem lại những bức ảnh và trải nghiệm đáng nhớ."   
            },
            {
                id: 2,
                imgSrc: img1,
                desTitle: "Ngôi nhà hạnh phúc",
                location: "Japan",
                grade: "Thư giãn giữa thiên nhiên",
                fees: "$900",
                description: "Ngược dòng Mê Kông trải nghiệm cuộc sống độc đáo của người dân đôi bờ cùng với những chuyến du ngoạn trên bờ đầy hấp dẫn, hứa hẹn đem lại những bức ảnh và trải nghiệm đáng nhớ."   
            },
            {
                id: 3,
                imgSrc: img2,
                desTitle: "Núi Phú Sĩ - Nhật Bản",
                location: "Japan",
                grade: "Thư giãn giữa thiên nhiên",
                fees: "$500",
                description: "Ngược dòng Mê Kông trải nghiệm cuộc sống độc đáo của người dân đôi bờ cùng với những chuyến du ngoạn trên bờ đầy hấp dẫn, hứa hẹn đem lại những bức ảnh và trải nghiệm đáng nhớ."   
            },
            {
                id: 4,
                imgSrc: img3,
                desTitle: "Tollymore Forest Park",
                location: "Ireland",
                grade: "Thư giãn giữa thiên nhiên",
                fees: "$800",
                description: "Đầu tiên, tour sẽ đưa du khách đến thăm Tollymore Forest Park, nơi được chọn để quay cảnh Khaleesi phát hiện ra bầy rồng của mình. Bạn sẽ tham gia các chuyến tham quan bằng tàu hoặc đi bộ để khám phá những mảnh đá đặc biệt hình bậc thang, được hình thành từ hàng nghìn năm trước."   
            },
            {
                id: 5,
                imgSrc: img4,
                desTitle: "Hồ Ngọc Bích thông xanh",
                location: "Canada",
                grade: "Thư giãn giữa thiên nhiên",
                fees: "$700",
                description: "Ngược dòng Mê Kông trải nghiệm cuộc sống độc đáo của người dân đôi bờ cùng với những chuyến du ngoạn trên bờ đầy hấp dẫn, hứa hẹn đem lại những bức ảnh và trải nghiệm đáng nhớ."   
            },
            {
                id: 6,
                imgSrc: img5,
                desTitle: "Hải cảng Ánh sáng",
                location: "Pháp",
                grade: "Thư giãn giữa thiên nhiên",
                fees: "$960",
                description: "Ngược dòng Mê Kông trải nghiệm cuộc sống độc đáo của người dân đôi bờ cùng với những chuyến du ngoạn trên bờ đầy hấp dẫn, hứa hẹn đem lại những bức ảnh và trải nghiệm đáng nhớ."   
            },
            {
                id: 7,
                imgSrc: img6,
                desTitle: "Biển hòn đá đỏ",
                location: "Tây Ban Nha",
                grade: "Thư giãn giữa thiên nhiên",
                fees: "$600",
                description: "Ngược dòng Mê Kông trải nghiệm cuộc sống độc đáo của người dân đôi bờ cùng với những chuyến du ngoạn trên bờ đầy hấp dẫn, hứa hẹn đem lại những bức ảnh và trải nghiệm đáng nhớ."   
            },
            {
                id: 8,
                imgSrc: img7,
                desTitle: "Núi băng trắng tuyết",
                location: "Nga",
                grade: "Thư giãn giữa thiên nhiên",
                fees: "$850",
                description: "Ngược dòng Mê Kông trải nghiệm cuộc sống độc đáo của người dân đôi bờ cùng với những chuyến du ngoạn trên bờ đầy hấp dẫn, hứa hẹn đem lại những bức ảnh và trải nghiệm đáng nhớ."   
            },
            {
                id: 9,
                imgSrc: img8,
                desTitle: "Khu trượt tuyết",
                location: "Thuỵ Sĩ",
                grade: "Thư giãn giữa thiên nhiên",
                fees: "$880",
                description: "Ngược dòng Mê Kông trải nghiệm cuộc sống độc đáo của người dân đôi bờ cùng với những chuyến du ngoạn trên bờ đầy hấp dẫn, hứa hẹn đem lại những bức ảnh và trải nghiệm đáng nhớ."   
            },
            {
                id: 10,
                imgSrc: img9,
                desTitle: "Rừng xanh thiên hạ",
                location: "Brazil",
                grade: "Thư giãn giữa thiên nhiên",
                fees: "$900",
                description: "Ngược dòng Mê Kông trải nghiệm cuộc sống độc đáo của người dân đôi bờ cùng với những chuyến du ngoạn trên bờ đầy hấp dẫn, hứa hẹn đem lại những bức ảnh và trải nghiệm đáng nhớ."   
            },
        ]

const Main = () => {

    // create a react hook to scroll animation
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (        
        <section className='main container section'>

            <div data-aos="fade-right" className='secTitle'>
                <h3 className='title'>
                    Most visited destinations
                </h3>
            </div>

            <div className='secContent grid'>
                {
                    dataTravel.map(({id, imgSrc, desTitle, location, grade, fees, description}) => 
                        {
                            return (
                                <div key={id}
                                    data-aos="fade-up"
                                    className='singleDestination'>

                                    <div className='imgDiv'>
                                        <img src={imgSrc} alt={desTitle} />
                                    </div>

                                    <div className='cardInfo'>
                                        <h4 className='desTitle'>{desTitle}</h4>
                                        <span className='continent flex'>
                                            <CiLocationOn className='icon'/>
                                            <span className='name'>{location}</span>
                                        </span>
                                    
                                        <div className='fees flex'>
                                            <div className='grade'>
                                                <span>{grade}<small>+1</small></span>
                                            </div>
                                            <div className='price'>
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>

                                        <div className='description'>
                                            <p>{description}</p>
                                        </div>

                                        <button className='btn flex'>
                                            Chi tiết <LuClipboardCheck className='icon'/>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    )
                    
                }
                
            </div>
            
        </section>
    )
};

export default Main;