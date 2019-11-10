import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import ContactUs from '../components/ContactUs';
import Container from '../layouts/Container';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 2rem 0rem 2rem;
`;
 const Info = styled.h4`

 text-align: center;

 margin: auto;
 padding: 2rem  1rem;
 width: 60%;
 max-width: ${props => props.theme.layout[props.type]};
 height: 100%;
 flex: 1;

 @media (max-width: ${props => props.theme.breakpoints.m}) {
   width: 90%;
 }

 @media (max-width: ${props => props.theme.breakpoints.s}) {
   width: 95%;
 }
 `;
const EventWrapper = styled.div`
margin: 0rem 8rem 2rem 8rem;
border: 2px solid ${props => props.theme.colors.background.dark};
border-radius: 8px;
  text-align: center;
  height: 100px;
  @media (max-width: 1000px) {
    margin: 0rem 2rem 2rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 0rem 2rem 2rem 2rem;
  }
`;

const EventTitle = styled.p`

border: 2px solid ${props => props.theme.colors.white.light};
border-radius: 8px;
font-size: 16pt;
background: ${props => props.theme.gradient.leftToRight};
color: ${props => props.theme.colors.white.light};
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })
  let titleTxt = isTabletOrMobile ? 'BNRC' : 'Bettendorf Natrual Resources Committee';
  return (
    <Layout>
      <Helmet title={'Bettendorf Natural Resources Committee'} />
      <Header title={titleTxt}>Restoring &amp; Protecting <br/> Bettendorf's Natural Resources</Header>

      <Info>
        A Citizens Advisory group to help assist in preserving and enhancing the natural areas in and around our community
      </Info>
      <EventWrapper>
        <EventTitle>Events</EventTitle>
        no upcoming
      </EventWrapper>
      <PostWrapper>
        {edges.map(({ node }) => (
          <PostList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </PostWrapper>
      <ContactUs/><br/>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
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
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
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
