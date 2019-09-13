import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Purpose = center => (
  <Layout>
    <Helmet title={'Purpose'} />
    <Header title="Purpose">Bettendorf Natural Resources Committee</Header>
    <Container >
      <h4>
        A Citizens Advisory group to help assist in preserving and enhancing the natural areas in and around our community.
      </h4>
      <br/>
      <h4>
        General Goals
      </h4>
      <ul>
        <li>Openly seek the input of interested citizens and resource people</li>
        <li>Assist and promote volunteer community events and educational activities</li>
        <li>Enhance the city’s prospects in receiving grant funds</li>
        <li>Collect and preserve (catalogue) baseline data of flora and fauna and species and communities within selected areas</li>
        <li>Act as a sounding board for city administrators on city projects or proposals</li>
        <li>Promote the sustainability of more ‘natural’ areas through non-mow places, wildflower plantings, pollinator habitat, decreasing erosion, increasing biodiversity with native species</li>
        <li>Provide education and awareness of invasive species and strategies to help contain and control their spread</li>
        <li>        Make biodiversity real to help convey the connection to the quality of life of Bettendorf citizens and integrate the conservation of biodiversity into ongoing development and planning</li>
      </ul>
      <h4>
        Objectives for 2019
      </h4>
      <ol>
        <li>Reestablish the committee’s purpose and goals and define it’s working relationship with the city</li>
        <li>Learn more about individual committee members, the assets, and diversity we have within the group</li>
        <li>Plan late summer/fall volunteer events</li>
      </ol>
    </Container>
  </Layout>
);

export default Purpose;

Container.propTypes = {
  center: PropTypes.object,
};
