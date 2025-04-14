import React from "react";
import "./containercard.css";
import "@radix-ui/themes/styles.css";
import { Box, Card, Text } from "@radix-ui/themes";

const ContainerCard = () => {
  return (
    <main id="about" className="myself" role="main">
      <section className="more-info" aria-labelledby="about-heading">
        <div className="block">
          <header>
            <h1 className="title" aria-label="get to know more"> Get to Know More </h1>
            <h2 id="about-heading" className="title-2">
              About Me
            </h2>
          </header>

          <div className="info-container">
            <div className="card-img" aria-label="me"></div>

            <div className="mini-card">
              <Box maxWidth="350px">
                <Card asChild>
                    <article>
                      <Text as="div" size="2" weight="bold">
                        <div aria-label="my-experience"></div>
                        Experience
                      </Text>
                      <Text as="p" color="gray" size="2">
                        2+ years learning full stack development
                      </Text>
                    </article>
                
                </Card>
              </Box>

              <Box maxWidth="350px">
                <Card asChild>
                    <article>
                      <Text as="div" size="2" weight="bold">
                        <div aria-label="School"></div>
                        Education
                      </Text>
                      <Text as="p" color="gray" size="2">
                        Bachelor's in Computer Science – Ynov Lyon
                      </Text>
                    </article>
                
                </Card>
              </Box>

              <p className="biography">
                Amadou Diop is a young computer apprentice from Senegal,
                passionate about tech since childhood. He's pursuing knowledge
                to excel professionally.
                <br />
                Looking for:a 2.5-month internship starting June 2025, and a
                work-study position for the 3rd year (2 weeks company / 1 week
                school)starting October 2025.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContainerCard;
