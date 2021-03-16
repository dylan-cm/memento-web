import "./Home.css";
import Layout from "../organisms/Layout";
import Section from "../molecules/Section"

const Home = () => {
  return (
    <Layout>
      <Section id="hero">
      <h1>Hero Section</h1>
      <h2>Hero Section</h2>
      <h3>Hero Section</h3>
      <h4>Hero Section</h4>
      <h5>Hero Section</h5>
      <h6>Hero Section</h6>
      <p>Hero Section</p>
      <em>Hero Section</em>
      <strong>Hero Section</strong>
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
      Download the App Section
      </Section>
    </Layout>
  );
};

export default Home;
