import React from "react";
import Loader from "./components/Loading";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { fetchContent } from "./utils/api";
import "./styles/App.scss";

// Language options for the dropdown
const languages = [
  { lang: "Svenska", flag: "/SE.png", value: "swedish" },
  { lang: "English", flag: "/GB.png", value: "english" },
];

function App() {
  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[1]);
  const [content, setContent] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  // Fetch content based on the selected language
  React.useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const data = await fetchContent(selectedLanguage.lang);
        setContent(data);
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, [selectedLanguage.lang]);

  return (
    <div className="main-container">
      {/* Background Image */}
      <div className="background">
        <img
          src="/background.jpg"
          alt="Background"
          className="background-image"
        />
      </div>

      {/* Header Component */}
      <Header
        languages={languages}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      {/* Loader or Main Content */}
      {!content.id ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <MainContent content={content} loading={loading} />
      )}
    </div>
  );
}

export default App;
