import React, { useEffect, useState } from "react";
import { echo } from "../capacitorService";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrendingVideos.css";
function TrendingVideos() {
  const [videosData, setVideosData] = useState(null);
  const fetchTrendingVideos = async () => {
    const apiUrl =
      "https://communityapi.infinitylearn.com/video_playlist/get/videos/4/115/4";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjE3MjQyODksImlhdCI6MTcyMTYzNzg4OSwiREJJZCI6IjIzMDM2NzEiLCJGaXJzdE5hbWUiOiJNYWxsaWsiLCJMYXN0TmFtZSI6IlRvbmRlcHUiLCJ1aWQiOiIiLCJUZW5hbnRJZCI6MSwiVGVuYW50Q29kZSI6ImluZmluaXR5bGVhcm4iLCJSb2xlTmFtZSI6IlN0dWRlbnQsU3VwZXIgQWRtaW4iLCJSb2xlSWQiOiIxLDUiLCJ1YW1faWQiOjIzMDM2NzEsImNybl9pZCI6IkNSTlAzMDBUMDAwMDFKRkpVWlpQIn0.cNr9qkdx0PPUFOTu9t5a9fgww8YuXrqS11U6GYpwUTU";
    try {
      const response = await fetch(apiUrl, {
        method: "GET", // HTTP method
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
          Userid: "2303671",
          "X-Platfrom": "web",
          "X-Tenant": "infinitylearn",
          "Ot-Tenant": "infinitylearn",
          "X-DeviceId": "127.0.0.1",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the response as JSON
      const res = await response.json();
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (!videosData) {
      fetchTrendingVideos()
        .then((data) => {
          console.log("Fetched data:", data[0].videos);
          setVideosData(data[0].videos);
        })
        .catch((error) => {
          console.error("Error in fetchData:", error);
        });
    }
  }, [videosData]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return videosData ? (
    <div className="slider-container">
      <h3>Trending Videos</h3>
      <Slider {...settings}>
        {videosData?.map((video) => (
          <div key={video.videoId} className="trending-video">
            <img
              src={video?.thumbnailURL}
              alt="video image"
              className="video-thumnail"
            />
            <p>{video?.title}</p>
            <a href={video.videoURL}>Go to video</a>
          </div>
        ))}
      </Slider>
    </div>
  ) : (
    <div>Loading trending videos...</div>
  );
}

export default TrendingVideos;
