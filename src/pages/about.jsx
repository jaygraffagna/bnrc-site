import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import ContactUs from '../components/ContactUs';

const About = center => (
  <Layout>
    <Helmet title={'About Us'} />
    <Header title="About Us">Bettendorf Natural Resources Committee</Header>
    <Container center={center}>
      <p>
        We are a committee focused on protecting and restoring natural resources within the City of Bettendorf.
        Our committee members come from different proffessional backgrounds with one goal in mind.
        The committee meets regularly for planning and prospective projects.
      </p>
      <h2>
        Members
      </h2>
      <div>
        <div>
          <b>Candace Egger</b>
        </div>
        Retired Bettendorf School District Teacher
      </div>
      <br/>
      <div>
        <div>
          <b>Spencer Mesick</b>
        </div>
        Bettendorf High Environmental Science Teacher
      </div>
      <br/>
      <div>
        <div>
          <b>Bill Collett</b>
        </div>
        Retired Bettendorf School District Teacher
      </div>
      <br/>
      <div>
        <div>
          <b>Ann Kappeler</b>
        </div>
        Bettendorf Planning &amp; Zoning Commission
      </div>
      <br/>
      <div>
        <div>
          <b>Anne Brockway</b>
        </div>
        Brockway Land Planning Associates
      </div>
      <br/>
      <div>
        <div>
          <b>Kara Mitvalsky</b>
        </div>
        US Army Corp of Engineers
      </div>
      <br/>
      <div>
        <div>
          <b>Jay Graffagna</b>
        </div>
        Software Developer - MidAmerican Energy
      </div>
      <br/>
      <div>
        <div>
          <b>Bob Bryant</b>
        </div>
        Retired Wapsi Center Director, Naturalist
      </div>
      <br/>
      <br/>
      <h4>
        Anyone from the public is welcome to praticpate in the committee
      </h4>
      <ContactUs />
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
