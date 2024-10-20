import { Grid } from "@chakra-ui/react";
import DashboardLayout from "../../../layout/dashboardLayout";
import Overview from "./components/Overview";
import FreeLikeChart from "./components/FreeLikeChart";
import ExclusiveLikeChart from "./components/ExclusiveLikeChart";
import FreeDislikeChart from "./components/FreeDislikeChart";
import ExclusiveDislikeChart from "./components/ExclusiveDislikeChart";
import FreeContentChart from "./components/FreeContentChart";
import ExclusiveContentChart from "./components/ExclusiveContentChart";

const Analytics = () => {
  return (
    <DashboardLayout>
      <Overview />
      <Grid
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
        gap={6}
        mb={"5rem"}
      >
        <FreeLikeChart />
        <ExclusiveLikeChart />
        <FreeDislikeChart />
        <ExclusiveDislikeChart />
        <FreeContentChart />
        <ExclusiveContentChart />
      </Grid>
    </DashboardLayout>
  );
};

export default Analytics;
