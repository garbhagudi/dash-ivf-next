import React from 'react';
import { CustomCarousel } from './CustomCarousel';

interface TestimonialsProps {
  onBookConsultation: () => void;
  onPlayVideo: (videoUrl: string) => void;
}

interface TestimonialItem {
  name: string;
  surname: string;
  feedback: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  onBookConsultation,
  onPlayVideo,
}) => {
  const testimonialsList: TestimonialItem[] = [
    {
      name: 'Anjali',
      surname: 'Khadtare',
      feedback:
        'The service at garbhagudi IVF Centre was very good. All staffs and Doctor were ready to assist at anytime. We are very pleased and thankful for the help, assistance and support provided by the Doctor and their staff. Wonderful efforts of them resulted in us for a joyful and successful life. Thanks to all.',
    },
    {
      name: 'Sonal',
      surname: 'Thorat',
      feedback:
        'I cannot express how much thankful I am to the entire team of GarbhaGudi hospital. We got positive results in the first visit itself. Front desk staff nurses and doctors all are very cooperative. I request to visit this branch once if you are struggling with infertility issues. And one of the best things is the front desk team will follow up with you give reminders for all visits and scans.. overall 10/10 !!!',
    },
    {
      name: 'Manikandan',
      surname: 'Hariharan',
      feedback:
        'Extremely happy today. My wife is 90 days pregnant. The timely follow-ups with the treatment made by the doctor and her team is highly appreciated, without which the end result might not have been possible. Also, the hospital won’t levy unnecessary treatment costs or treatments. Every procedure had its own cause and a good outcome. I strongly recommend this GarbhaGudi Marathahalli branch for those who are dealing with infertility issues.',
    },
    {
      name: 'Kavitha',
      surname: '',
      feedback:
        'I am very happy that I visited garbhagudi hospital, they provided the best treatment.. Doctors are very supportive in my treatment she explained all medical details, she is to friendly and took at most care and responsibility towards my pregnancy, all sister and staff took good responsibility and supported us very well we got positive results from IVF treatment and waiting for a lifetime gift that we received from GarbhaGudi team …. We wholeheartedly are very thankful to Dr Asha mam, Dr. Anitha mam and the entire team of GARBHAGUDI 🙏❤️',
    },
  ];

  const videoData = [
    { thumb: '/assets/img/1.jpg', url: 'https://www.youtube.com/embed/QvqzdxDY0yg?si=9we312XLWGEtMewp' },
    { thumb: '/assets/img/1a.jpg', url: 'https://www.youtube.com/embed/pUIA2UY4s3s?si=uuyjKcpAgRuvqllB' },
    { thumb: '/assets/img/2.jpg', url: 'https://www.youtube.com/embed/QXzAK0B1iWo?si=T_UajW1xsWVLY83w' },
    { thumb: '/assets/img/2a.jpg', url: 'https://www.youtube.com/embed/IVGTfUBrDtY?si=G-qwWnFDeRz9hWPo' },
    { thumb: '/assets/img/3.jpg', url: 'https://www.youtube.com/embed/bhIrvMPMFPo?si=52J2cr_bbCSEsSKi' },
    { thumb: '/assets/img/3a.jpg', url: 'https://www.youtube.com/embed/Btao6HyfrRY?si=1y2OuW4xEWjQ9LQJ' },
    { thumb: '/assets/img/4.jpg', url: 'https://www.youtube.com/embed/ri8mGxvr7go?si=RycjUi6VmBVtvn5v' },
    { thumb: '/assets/img/4a.jpg', url: 'https://www.youtube.com/embed/4p0-NtYjwTs?si=dTkytRiB4Zv0jnOv' },
    { thumb: '/assets/img/5.jpg', url: 'https://www.youtube.com/embed/-Xuuq4yN2ws?si=xLDai1qGdTM1iLGW' },
  ];

  return (
    <section className="commanSection sectionSevan">
      <div className="container">
        <h5 className="smallHeading">Testimonials</h5>
        <h2 className="mainHeading">
          See What Our <b>Patients</b> Say
        </h2>
        <p className="subText">
          <b>Thousands of couples</b> have found their path to parenthood with GarbhaGudi. Here's what some
          of them have to say.
        </p>

        {/* Written Testimonials Carousel */}
        <div className="testimonials-slider">
          <CustomCarousel desktopItems={2} mobileItems={1} gap={20}>
            {testimonialsList.map((item, idx) => (
              <div key={idx} className="boxTestimonials">
                <div className="innerTestimonials">
                  <div className="imgStar">
                    <img src="/assets/img/start.svg" alt="Rating Stars" />
                  </div>
                  <p>{item.feedback}</p>
                  <div className="boxInfo">
                    <h6>{item.name}</h6>
                    {item.surname && <h5>{item.surname}</h5>}
                  </div>
                </div>
              </div>
            ))}
          </CustomCarousel>
        </div>

        {/* Video Testimonials Carousel */}
        <div className="video-slider">
          <CustomCarousel desktopItems={3} mobileItems={1} gap={20}>
            {videoData.map((video, idx) => (
              <div key={idx} className="item">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    onPlayVideo(video.url);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={video.thumb} alt={`Video Thumbnail ${idx + 1}`} style={{ width: '100%' }} />
                  <span className="iconPlay">
                    <img src="/assets/img/play-button.svg" alt="Play Button" />
                  </span>
                </a>
              </div>
            ))}
          </CustomCarousel>
        </div>

        <p className="textCenter">
          <button 
            onClick={onBookConsultation} 
            className="btn btn-primary"
          >
            Book Free Consultation
          </button>
        </p>
      </div>
    </section>
  );
};
