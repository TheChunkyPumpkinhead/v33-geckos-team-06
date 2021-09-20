import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Bottom from "./Bottom";

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  background: #a8a7a7;
  width: 300px;
  height: 100vh;

  padding-top: 120px;
  padding-left: 33px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14.562px;
  line-height: 17px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #ffffff;
`;

const SidebarHeading = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14.562px;
  line-height: 17px;
`;

const SidebarSub = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 8.98932px;
  line-height: 11px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #ffffff;
`;

const HeroDiv = styled.div`
  display: flex;
  background: #bedff1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #635e5e;
  font-family: "Work Sans", sans-serif;
  font-size: 48px;
  font-style: italic;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: -0.02em;
  height: 148px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
`;

const RightDiv = styled.div`
  background: #fff;
`;

const Header = styled.h1`
  color: #000000;
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;
`;

const MainDiv = styled.div`
  padding-top: 65px;
  padding-left: 54px;
  padding-right: 54px;
`;

const Footer = styled.div``;

function AboutPage(props) {
  return (
    <div>
      <Navigation />
      <Container>
        {/* left sidebar */}
        <Sidebar>
          <SidebarHeading>HEADER</SidebarHeading>
          <SidebarSub>Subheading</SidebarSub>
        </Sidebar>

        <RightDiv>
          {/* main div */}
          <HeroDiv>
            {/* big hero thing */}
            About Page
          </HeroDiv>
          <MainDiv>
            {/* AboutPage text */}
            <Header>About Gekch.io</Header>
            <p>
              Gekch.io is an open marketplace for independent digital creators
              with a focus on independent video games. It’s a platform that
              enables anyone to sell the content they've created. As a seller
              you’re in charge of how it’s done: you set the price, you run
              sales, and you design your pages. It’s never necessary to get
              votes, likes, or follows to get your content approved, and you can
              make changes to how you distribute your work as frequently as you
              like.
            </p>

            <p>
              Gekch.io is an open marketplace for independent digital creators
              with a focus on independent video games. It’s a platform that
              enables anyone to sell the content they've created. As a seller
              you’re in charge of how it’s done: you set the price, you run
              sales, and you design your pages. It’s never necessary to get
              votes, likes, or follows to get your content approved, and you can
              make changes to how you distribute your work as frequently as you
              like.
            </p>

            <Header>Header</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ac sapien non purus vehicula varius quis sit amet augue. Nulla
              porttitor mi id feugiat feugiat. Donec porta accumsan accumsan.
              Proin auctor eros ac nibh blandit, vel dapibus nibh commodo.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>
              Nunc finibus malesuada facilisis. Phasellus elementum, massa nec
              sagittis viverra, risus augue dictum ante, vitae consequat massa
              dui eu massa.
            </p>

            <Header>Bottom Half</Header>
            <p>
              Gekch.io gives creators the tools to make smart choices about how
              they distribute their content. Creators have access to detailed
              analytics and about how people discover, download, or play what
              they've created. Our creator dashboard gives easy access to data
              about what uploads resonate the most or what links drive the most
              attention.
            </p>
            <p>
              Our strong emphasis on empowering creators show in how build
              Gekch.io:
            </p>
            <p>
              * We do not believe in exploiting content. Creators should be
              proud of the pages that display their work. They should never
              contain advertisements, distracting banners, links to other
              people’s pages, or any other links they didn’t approve of. * We
              believe in making it easy for creators to collect money for their
              creations in a non-obtrusive way. No matter how large or small the
              project, it should be simple for fans to donate or pay what they
              think is fair
            </p>

            <p>
              Every creator is unique, so we support a wide range of methods to
              help them make a living. All purchases and donations on Gekch.io
              are pay-what-you-want above the minimum. The minimum price can be
              set to zero: it’s free, but fans can choose to support the creator
              if they like what they're offering. Gekch.io supports pre-orders,
              selling rewards, creating early-access content, bundling your
              content, and even doing crowdfunding with project goals.
            </p>
            <p>NEXT link</p>

            <Header>Open revenue sharing</Header>
            <p>
              Most marketplaces have a fixed rate applied to all transactions.
              For most online distributors the standard has become 30%. When
              Gekch.io launched, it took a 0% cut of all transactions.
            </p>
            <p>
              Since September 2021, Gekch.io has an open revenue sharing model.
              Sellers can now apply the pay what you want model towards
              Gekch.io: the revenue split between the seller and Gekch.io is
              configurable by the seller. Set it to 10%, 30%, or even 0%.
            </p>
            <p>Next Link</p>

            <p>
              You might be thinking “that sounds pretty risky, what if everyone
              sets it to zero?” That’s a risk we're willing to take in the
              spirit of encouraging the generous and supportive community that’s
              already developed around Gekch.io.
              <p>
                If you like what we're doing please help spread awareness around
                Gekch.io. Encourage your friends or favorite developers to
                upload their games so we can build a marketplace whose primary
                goal is to support the creators it hosts.
                <p>Thanks,</p>
                <p>— The Gekch.io team</p>
              </p>
            </p>
          </MainDiv>
        </RightDiv>
      </Container>

      <Bottom />
    </div>
  );
}

export default AboutPage;
