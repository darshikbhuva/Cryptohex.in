import React from "react";
import DashboardLayout from "../../Componants/DashboardLayout";
import PortfolioSection from "./Componants/PortfolioSection";
import PriceSection from "./Componants/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transaction from "./Componants/Transaction";
import InfoCard from "./Componants/InfoCard";

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout title="Dashboard">
        <Grid gap="6">
          <GridItem colSpan={2}>
            <PortfolioSection />
          </GridItem>
          <GridItem colSpan={1} width="568px">
            <PriceSection />
          </GridItem>
          <GridItem colSpan={1} width="568px">
            <Transaction></Transaction>
          </GridItem>
          <GridItem colSpan={1}>
            <InfoCard
              imgUrl="./Public/dot_bg.svg"
              TagText="Loan"
              text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
        selling it."
              inverted={true}
            ></InfoCard>
          </GridItem>
          <GridItem colSpan={1}>
            <InfoCard
              imgUrl="./Public/grid_bg.svg"
              TagText="Contact"
              text=" Contact
Learn more about our real estate, mortgage, and  corporate account services"
              inverted={false}
            ></InfoCard>
          </GridItem>
        </Grid>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
