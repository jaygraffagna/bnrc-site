import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Us'} />
    <Header title="About Us">Bettendorf Natural Resources Committee</Header>
    <Container center={center}>
      <h2>
        Members
      </h2>
      <div>
        <div>
          <b>Candace Egger</b>
        </div>
        Retired Bettendorf Teacher
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
        Bettendorf High Environmental Science Teacher
      </div>
      <br/>
      <div>
        <div>
          <b>Ann Kappeler</b>
        </div>
        Retired City Administator
      </div>
      <br/>
      <div>
        <div>
          <b>Kara Mitvalsky</b>
        </div>
        Community Memeber
      </div>
      <br/>
      <div>
        <div>
          <b>Anne Brockway</b>
        </div>
        Community Memeber
      </div>
      <br/>
      <div>
        <div>
          <b>Jay Graffagna</b>
        </div>
        Website Development Resource
      </div>
      <br/>
      <div>
        <div>
          <b>Bob Bryant</b>
        </div>
        Local Botanist
      </div>
      <br/>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
