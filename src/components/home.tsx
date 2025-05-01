import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect } from "react";

const newsItems = [
  {
    id: 1,
    title:
      "Camrelizumab Seems Promising As New Triple-Negative Breast Cancer Treatment",
    summary:
      "Adding the immunotherapy medicine camrelizumab to chemotherapy offered better outcomes than chemotherapy alone for TNBC.",
    date: "Apr 15, 2025",
  },
  {
    id: 2,
    title:
      "One Chemo Medicine Before Surgery for Early-Stage HER2-Positive Breast Cancer May Be Better Than Two",
    summary:
      "Abraxane instead of Taxotere and carboplatin led to a better response and fewer serious side effects.",
    date: "Feb 6, 2025",
  },
  {
    id: 3,
    title:
      "After Early-Stage Breast Cancer, Risk of Metastatic Recurrence Higher for Younger People",
    summary:
      "Some breast cancers may be more likely to come back as metastatic disease five to 10 years after surgery in people ages 35 and younger.",
    date: "Jan 17, 2025",
  },
];

const helpfulLinks = [
  {
    title: "National Breast Cancer Foundation",
    url: "https://www.nationalbreastcancer.org/",
  },
  {
    title: "Breastcancer.org",
    url: "https://www.breastcancer.org/",
  },
  {
    title: "CDC - Breast Cancer",
    url: "https://www.cdc.gov/cancer/breast/",
  },
  {
    title: "Susan G. Komen",
    url: "https://www.komen.org/",
  },
  {
    title: "fpasrilanka.org",
    url: "https://www.fpasrilanka.org/en/content/everything-you-need-know-about-breast-cancer",
  },
  {
    title: "National Cancer Control Programme Sri Lanka",
    url: "https://www.nccp.health.gov.lk/storage/post/pdfs/National%20Guidelines-%20Management%20of%20Breast%20Cancers%20in%20Sri%20Lanka.pdf",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Refs for scrolling to sections
  const newsRef = useRef(null);
  const awarenessRef = useRef(null);
  const resourcesRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to section if location has hash
  useEffect(() => {
    const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    switch (location.hash) {
      case "#news":
        scrollToSection(newsRef);
        break;
      case "#awareness":
        scrollToSection(awarenessRef);
        break;
      case "#resources":
        scrollToSection(resourcesRef);
        break;
      case "#contact":
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
  }, [location]);

  const handleStartDetecting = () => {
    navigate("/input");
  };

  return (
    <div className="to-white flex flex-col p-6 min-h-screen w-full from-[#2a0522] bg-[url('https://storage.googleapis.com/tempo-public-images/github%7C148965502-1745647287964-pinkribbonbreastcancerawarenessmonthseamlessbackgroundillustrationvectorjpg')]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-16"
      >
        {/* Main Title Section */}
        <div className="text-center mb-12 font-serif">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-pink-600 tracking-tight font-sans"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            BREAST CANCER DETECTION
          </motion.h1>

          <motion.p
            className="md:text-2xl text-pink-400 mb-8 italic font-bold font-sans text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Early Detection Saves Lives
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-sans"
          >
            <Button
              onClick={handleStartDetecting}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-md"
            >
              Start Detecting
            </Button>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-xl text-pink-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Our mission is to enhance early breast cancer detection through the
          use of the most accurate and reliable diagnostic tool
        </motion.p>

        {/* News Section */}
        <motion.div
          ref={newsRef}
          id="news"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="w-full mt-8"
        >
          <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
            Recent News & Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card
                key={item.id}
                className="border-pink-200 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-pink-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <p className="text-sm text-pink-400">{item.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Awareness Section */}
        <div
          ref={awarenessRef}
          id="awareness"
          className="w-full mt-16 relative"
        >
          <Card className="border-pink-200 shadow-lg overflow-hidden bg-[url('https://storage.googleapis.com/tempo-public-images/github%7C148965502-1745866800431-strongerthancancerbreastawareness600nw1827639542webp')] bg-[#ffffff]">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 min-h-[300px] flex items-center justify-center p-4 bg-[url('https://storage.googleapis.com/tempo-public-images/github%7C148965502-1745866975124-istockphoto1421057987612x612jpg')]"></div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-gray-700 leading-relaxed"
                  >
                    <p className="mb-4">
                      When breast cancer is found at an early stage, treatments
                      are often more effective, less aggressive, and offer a
                      much higher chance of survival. Regular screenings,
                      self-examinations, and being aware of the warning signs
                      can lead to earlier diagnoses and better outcomes.
                    </p>
                    <p>
                      Empower yourself with knowledge, take proactive steps, and
                      encourage others to do the same — because early detection
                      truly makes all the difference.
                    </p>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <motion.p
          className="text-sm text-gray-500 mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          A Professional Tool For Healthcare Providers
        </motion.p>

        {/* Resources Section */}
        <motion.div
          ref={resourcesRef}
          id="resources"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="w-full mt-12"
        >
          <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {helpfulLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-900 hover:underline font-medium"
              >
                {link.title}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <div
          ref={contactRef}
          id="contact"
          className="w-full mt-12 flex justify-end"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-right"
          >
            <p className="text-pink-700 font-medium mb-2">
              Cancer information, answers, and hope.
              <br />
              Available every minute of every day.
            </p>
            <p className="text-pink-800 font-bold text-xl">011 288 88 88</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
