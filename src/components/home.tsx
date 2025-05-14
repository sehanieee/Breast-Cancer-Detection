import React, { useRef, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ProviderLoginDialog from "./ProviderLoginDialog";
import PatientLoginDialog from "./PatientLoginDialog";
import { Twitter } from "lucide-react";

// Export newsItems so it can be imported in NewsDetail.tsx
export const newsItems = [
  {
    id: 1,
    title:
      "Camrelizumab Seems Promising As New Triple-Negative Breast Cancer Treatment",
    summary:
      "Adding the immunotherapy medicine camrelizumab to chemotherapy offered better outcomes than chemotherapy alone for TNBC.",
    date: "Apr 15, 2025",
    url: "https://www.breastcancer.org/research-news/camrelizumab-triple-negative-breast-cancer",
  },
  {
    id: 2,
    title:
      "One Chemo Medicine Before Surgery for Early-Stage HER2-Positive Breast Cancer May Be Better Than Two",
    summary:
      "Abraxane instead of Taxotere and carboplatin led to a better response and fewer serious side effects.",
    date: "Feb 6, 2025",
    url: "https://community.breastcancer.org/en/discussion/886578/one-chemo-medicine-before-surgery-for-early-stage-her2-positive-breast-cancer-may-be-better-than-two",
  },
  {
    id: 3,
    title:
      "After Early-Stage Breast Cancer, Risk of Metastatic Recurrence Higher for Younger People",
    summary:
      "Some breast cancers may be more likely to come back as metastatic disease five to 10 years after surgery in people ages 35 and younger.",
    date: "Jan 17, 2025",
    url: "https://www.breastcancer.org/research-news/late-metastatic-recurrence-risk-higher-for-young-people",
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
  const [providerLoginDialogOpen, setProviderLoginDialogOpen] = useState(false);
  const [patientLoginDialogOpen, setPatientLoginDialogOpen] = useState(false);

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
    // Show provider login dialog instead of direct navigation
    setProviderLoginDialogOpen(true);
  };

  const handlePatientLogin = () => {
    // Show patient login dialog
    setPatientLoginDialogOpen(true);
  };

  return (
    <div className="to-white flex flex-col p-6 min-h-screen w-full from-[#2a0522] bg-white">
      <ProviderLoginDialog
        open={providerLoginDialogOpen}
        onOpenChange={setProviderLoginDialogOpen}
      />
      <PatientLoginDialog
        open={patientLoginDialogOpen}
        onOpenChange={setPatientLoginDialogOpen}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-16"
      >
        {/* Main Title Section */}
        <div className="text-center mb-12 font-serif">
          <motion.h1
            className="mb-4 tracking-tight font-sans font-medium text-pink-600 text-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            WELCOME TO MammoBloom !
          </motion.h1>

          <motion.p
            className="md:text-2xl mb-8 italic font-bold font-sans text-4xl text-[#746b6b]"
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
            className="font-sans flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleStartDetecting}
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-md w-full"
              >
                Start Detecting
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col"
            >
              <Button
                onClick={handlePatientLogin}
                className="bg-white hover:bg-gray-100 text-pink-600 border-2 border-pink-600 px-8 py-6 text-lg rounded-full shadow-md w-full"
              >
                Login
              </Button>
              <p className="text-center text-pink-600 mt-2 text-sm font-medium">
                Please login to download your report
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-pink-600 font-medium text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Our mission is to enhance early breast cancer detection through the
          use of the most accurate and reliable diagnostic tool.
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
          <h2 className="text-2xl font-bold mb-6 text-center text-pink-700">
            Recent News & Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                className="block hover:no-underline"
              >
                <Card className="border-pink-200 shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-pink-400">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-pink-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.summary}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-pink-400">{item.date}</p>
                      <p className="text-sm text-pink-600 font-medium">
                        Read more →
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
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

        {/* Resources Section */}
        <motion.div
          ref={resourcesRef}
          id="resources"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="w-full mt-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-[3f3f3f] text-pink-700">
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
      </motion.div>
      {/* Footer */}
      <footer
        ref={contactRef}
        id="contact"
        className="mt-12 w-full from-pink-100 to-pink-200 border-t border-pink-300 shadow-inner"
      >
        <div className="max-w-7xl mx-auto p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            {/* Description */}
            <div className="text-pink-800 font-medium max-w-md">
              <p>
                Cancer information, answers, and hope.
                <br />
                Available every minute of every day.
              </p>
            </div>

            {/* Contact Info */}
            <div className="text-pink-800">
              <h3 className="text-xl font-bold mb-2">Contact Info</h3>
              <p>📞 Phone: 011 288 88 88</p>
              <p>
                📧 Email:{" "}
                <a href="mailto:mammobloom@gmail.com" className="underline">
                  mammobloom@gmail.com
                </a>
              </p>
              <p>📍 Location: Colombo, Sri Lanka</p>
            </div>

            {/* Social Media */}
            <div className="text-right text-pink-800">
              <h3 className="text-xl font-bold mb-2">Follow us on X</h3>
              <div className="flex items-center justify-center md:justify-end">
                <Twitter className="h-5 w-5 text-pink-700 mr-2" />
                <span>@MammoBloom</span>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
