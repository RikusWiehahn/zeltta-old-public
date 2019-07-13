import React from 'react';
import styled from '@emotion/styled';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../atoms/Logo';
import ShowEmail from '../molecules/ShowEmail';
import { Heading, Paragraph } from '../atoms/Fonts';

const App = (props) => {
  return (
    <Container style={{ backgroundColor: '#000' }}>
      <div style={{
        height: '500vh',
        width: '100vw',
        overflow: 'hidden'
      }}>
      {props.children}
      </div>
    </Container>
  )
}

const Layout = (props) => {
  const { style, children } = props;
  const innerStyle = props.innerStyle ? props.innerStyle : {};
  const InnerDiv = styled.div({
    ...style,
    width: '1000px',
    display: 'flex',
    flexDirection: 'row',
    '@media screen and (max-width: 1000px)': {
      width: '100vw',
      flexDirection: 'column',
    },
  });
  return (
    <Row style={{
      ...innerStyle,
      flex: 1,
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <InnerDiv>
        {children}
      </InnerDiv>
    </Row>
  )
}

const CutPathDiv = ({ top, backgroundColor, children, height }) => {
  return (
    <Row style={{ 
      height: height ? height : '112vh',
      position: 'relative',
      backgroundColor: backgroundColor ? backgroundColor : '#000',
      top : top ? top : '0vh',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'center',
      clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0 100%)', 
      WebkitClipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0 100%)'}}>
        {children}
    </Row>
  )
}

const HeroSection = (props) => {
  const { style, children } = props;
  return (
    <Row style={{
      backgroundColor: '#000', 
          backgroundImage: 'url(/static/hero-image.jpeg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          flexDirection: 'column',
          display: 'flex',
          height: '100vh',
    }}>
    <Row style={{
          backgroundColor: 'rgba(10,0,80,0.5)',
          flex: 1,
          display: 'flex',
    }}>
      <Layout style={{
        display: 'flex',
        
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1, padding: '20px' }}>
            <Heading style={{ color: '#fff' }}> Inspired <br/> Technology <br/> Products</Heading>
        </div>
        </Layout>
      </Row>
    </Row>
  )
}

const FooterSection = (props) => {
  const { style, children } = props;
  return (
    <Row style={{
      backgroundColor: '#000', 
      position: 'relative',
      top: '-36vh',
      flexDirection: 'column',
      display: 'flex',
      height: '100vh',
    }}>
      <Row style={{
        backgroundColor: 'rgba(10,0,80,0.5)',
        flex: 1,
        display: 'flex',
      }}>
        <Layout style={{
          display: 'flex',
        }}>
          <Col style={{ flex: 1, padding: '20px' }}>
            <Heading style={{ color: '#fff' }}> Contact</Heading>
            <ShowEmail />
          </Col>
        </Layout>
      </Row>
    </Row>
  )
}

const Index = () => {
  return (
    <App>
      <Logo />
        <HeroSection />
        <CutPathDiv top={'-12vh'} backgroundColor={'#4400ff'}>
          <Layout innerStyle={{
              paddingTop: '35px'
            }}>
            <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Heading style={{ color: '#fff' }}>Design first</Heading>
              <Paragraph style={{ color: '#fff' }}>Great products always start with an obsessive focus on end users. Excellence thereafter becomes the result of well-structured planning, design, measurement and iteration.</Paragraph>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/static/phone.png" alt="phone design image"/>
            </div>
          </Layout>
        </CutPathDiv>
        <CutPathDiv top={'-24vh'} backgroundColor={'#ff0086'}>
          <Layout style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Col style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Heading style={{ color: '#fff' }}>Full Stack</Heading>
              <Paragraph style={{ color: '#fff' }}>Choose whichever front-end, hardware and features you want to provide for your users.</Paragraph>
            </Col>
            <Col style={{ flex: 1 }}>
              <img src="/static/stack.svg" alt="stack logo" style={{ height: '40vh', width: '40vh', minHeight: '200px', minWidth: '200px'  }} />
            </Col>
          </Layout>
        </CutPathDiv>
        <CutPathDiv top={'-36vh'} backgroundColor={'#fff'} height={'112vh'}>
          <Layout style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Col style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Heading>Integrations</Heading>
              <Paragraph style={{ color: '#000' }}>Choose any 3rd party integrations you'd like in order to provide a richer feature set for your users.</Paragraph>
            </Col>
            <Col style={{ flex: 1 }}>
              <img src="/static/plugins.svg" alt="integrations graphic" style={{ height: '40vh', width: '40vh', minHeight: '200px', minWidth: '200px' }} />
            </Col>
          </Layout>
        </CutPathDiv>
        <FooterSection />
    </App>
  )
}

export default Index;