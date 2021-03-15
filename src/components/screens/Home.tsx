import "./Home.css";
import Layout from "../organisms/Layout";
import Section from "../molecules/Section"

const Home = () => {
  return (
    <Layout>
      <Section id="hero">
      Hero Section
      </Section>
      <Section id="value-prop">
      Value Proposition Section
      </Section>
      <Section id="user-stories">
      User Stories Section
      </Section>
      <Section id="how-it-works">
      How It Works Section
      </Section>
      <Section id="download-app">
      Dowload the App Section
      </Section>
    </Layout>
  );
};

export default Home;
