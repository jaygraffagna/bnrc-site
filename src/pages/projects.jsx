import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, ProjectList } from 'components';
import { Layout } from 'layouts';
import styled from '@emotion/styled';

const MapWrapper = styled.div`
  text-align: center;
  margin: 2rem 2rem 0rem 2rem;
`;

const Map = styled.iframe`
  width: 600px;
  height: 400px;
  @media (max-width: 700px) {

    width: 250px;
    height: 300px;
  }
`;

const Projects = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Projects'} />
      <Header title="Projects">Bettendorf Natural Resources Committee</Header>
      {edges.map(({ node }) => (
        <ProjectList
          key={node.id}
          cover={node.frontmatter.cover.childImageSharp.fluid}
          path={node.frontmatter.path}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          tags={node.frontmatter.tags}
          excerpt={node.excerpt}
        />
      ))}
      <MapWrapper>
        <Map src="https://www.google.com/maps/d/embed?mid=1trqr0NFYPmsBpF3IlV8QJK5L1MESKmxP" />
      </MapWrapper>
    </Layout>
  );
};

export default Projects;

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
