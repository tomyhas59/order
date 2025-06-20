import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

const Gsap = () => {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const sections = [mainRef, aboutRef, projectsRef, contactRef];

    sections.forEach((ref) => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    });

    gsap.to(titleRef.current, {
      text: "👋 Welcome to My GSAP Portfolio",
      duration: 2,
      delay: 0.5,
      ease: "power2.out",
    });
  }, []);

  const scrollToSection = (ref) => {
    gsap.to(window, { duration: 1, scrollTo: ref.current });
  };

  return (
    <Wrapper>
      <Navbar>
        <NavButton onClick={() => scrollToSection(mainRef)}>Main</NavButton>
        <NavButton onClick={() => scrollToSection(aboutRef)}>About</NavButton>
        <NavButton onClick={() => scrollToSection(projectsRef)}>
          Projects
        </NavButton>
        <NavButton onClick={() => scrollToSection(contactRef)}>
          Contact
        </NavButton>
      </Navbar>

      <Section ref={mainRef} id="main">
        <HeroTitle ref={titleRef}>👋</HeroTitle>
        <Text>
          This is the main section introducing the site with animated title.
        </Text>
      </Section>

      <Section ref={aboutRef} id="about">
        <Title>🙋‍♂️ About Me</Title>
        <Text>
          I am a frontend developer passionate about UI and animation.
        </Text>
        <Bubble />
      </Section>

      <Section ref={projectsRef} id="projects">
        <Title>🛠 Projects</Title>
        <CardContainer>
          {[
            "Portfolio Site",
            "ToDo App",
            "Shopping Mall",
            "Animation Demo",
          ].map((item, i) => (
            <Card key={item} className="project-card">
              {item}
            </Card>
          ))}
        </CardContainer>
      </Section>

      <Section ref={contactRef} id="contact">
        <Title>📬 Contact</Title>
        <Text>tmsport.netlify.app</Text>
        <Wave />
      </Section>
    </Wrapper>
  );
};

export default Gsap;

// Styled Components
const Wrapper = styled.div`
  overflow-x: hidden;
  background: #fff;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  z-index: 999;
`;

const NavButton = styled.button`
  background: #4caf50;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #43a047;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 120px 20px 100px;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  min-height: 3rem;
  margin-bottom: 20px;
  color: #2e7d32;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #444;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;

const Card = styled.div`
  width: 200px;
  height: 120px;
  background: linear-gradient(135deg, #66bb6a, #43a047);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Bubble = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(76, 175, 80, 0.2);
  border-radius: 50%;
  top: 20%;
  left: 10%;
  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to top, #e0f2f1, transparent);
`;
