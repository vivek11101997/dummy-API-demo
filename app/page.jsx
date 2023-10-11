'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoadingPage from './loading';
import useWindowSize from './hooks/UseWindowSize';
import Image from "next/image";
import Photos from './componets/Photos';
import Slider from './componets/Slider';


const HomePage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
    const width = useWindowSize().width;

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/photos');
      const data = await res.json();
      setPhotos(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <section className="section_background">
        <div className="container">
          <div className="OurServices_Wraper">
            <h1 className="heading">Our services</h1>
            <div className="line" />
            <p className="description">
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment with our highly
              qualified doctors you can consult with us which type of service is
              suitable for your health
            </p>
          </div>

          {width < 992 ? (
            <Slider />
          ) : (
            <div className="card_wraper">
              <Photos photos={photos} />
            </div>
          )}

          <div className="btn_wrap">
            <button type="button" className="btn">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
