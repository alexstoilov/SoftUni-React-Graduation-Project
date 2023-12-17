import React from "react";
import { Typography, Container, Box } from "@material-ui/core";

function About() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Passion Connect
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to Passion Connect, a place where words matter. We make it
          easy for you to share your ideas and stories, and connect with others.
          Our platform is designed to help you express your thoughts, share your
          knowledge, and discover what others have to say.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Whether you're a seasoned writer or just getting started, our app
          provides all the tools you need to bring your stories to life. You can
          write about any topic you're passionate about, from technology and
          business to travel and wellness.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We believe in the power of words to create, inspire, and inform. Join
          us in our mission to foster a global community of thinkers and
          writers.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
